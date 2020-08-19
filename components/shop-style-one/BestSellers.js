import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, addToCompare } from '../../store/cart/cartActions';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip';
import { ToastContainer, toast, Slide } from 'react-toastify';
import QuickView from '../Modal/QuickView';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../../store/product/productFetcher';

class BestSeller extends Component {
  state = {
    modalOpen: false,
    quickViewProduct: null,
  };

  componentWillMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  handleAddToCart = (product) => {
    this.props.addToCart(product);

    toast.success('Added to the cart', {
      position: 'bottom-left',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  handleAddToCompare = (id) => {
    this.props.addToCompare(id);

    toast.success('Added to the compare', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  compareButton = (id) => {
    let compare_exist = this.props.CompareProducts.filter(
      (item) => item.id === id
    );
    if (compare_exist.length > 0) {
      return (
        <Link href="#">
          <a
            data-tip="Already Added"
            data-place="left"
            onClick={(e) => {
              e.preventDefault();
            }}
            disabled={true}
            className="disabled"
          >
            <i className="fas fa-sync"></i>
          </a>
        </Link>
      );
    } else {
      return (
        <Link href="#">
          <a
            data-tip="Add to Compare"
            data-place="left"
            onClick={(e) => {
              e.preventDefault();
              this.handleAddToCompare(id);
            }}
          >
            <i className="fas fa-sync"></i>
          </a>
        </Link>
      );
    }
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  handleModalData = (product) => {
    this.setState({
      product: product,
    });
  };

  render() {
    let { products } = this.props;
    const { modalOpen } = this.state;
    return (
      <section className="best-sellers-area pb-60">
        <ReactTooltip />
        <ToastContainer transition={Slide} />
        <div className="container">
          <div className="section-title">
            <h2>
              <span className="dot"></span> Best Sellers
            </h2>
          </div>

          <div className="row">
            {products.map((product, idx) => (
              <div className="col-lg-3 col-sm-6 col-6" key={idx}>
                <div className="single-product-box">
                  <div className="product-image">
                    <Link href={`/product-details/${product.id}`}>
                      <a>
                        <img src={product.imageSrc} alt="image" />
                        <img src={product.imageHoverSrc} alt="image" />
                      </a>
                    </Link>

                    <ul>
                      <li>
                        <Link href="#">
                          <a
                            data-tip="Quick View"
                            data-place="left"
                            onClick={(e) => {
                              e.preventDefault();
                              this.openModal();
                              this.handleModalData(product);
                            }}
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a data-tip="Add to Wishlist" data-place="left">
                            <i className="far fa-heart"></i>
                          </a>
                        </Link>
                      </li>
                      <li>{this.compareButton(product.id)}</li>
                    </ul>
                  </div>

                  <div className="product-content">
                    <h3>
                      <Link href={`/product-details/${product.id}`}>
                        <a>{product.title}</a>
                      </Link>
                    </h3>

                    <div
                      className="product-price"
                      dangerouslySetInnerHTML={{ __html: product.priceHtml }}
                    >
                      {/* <span className="new-price"></span> */}
                    </div>

                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>

                    <Link href="#">
                      <a
                        className="btn btn-light"
                        onClick={(e) => {
                          e.preventDefault();
                          this.handleAddToCart(product);
                        }}
                      >
                        Add to Cart
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {modalOpen ? (
          <QuickView
            closeModal={this.closeModal}
            product={this.state.product}
          />
        ) : (
            ''
          )}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const { productReducer } = state;
  return {
    error: productReducer.error,
    products: productReducer.products,
    pending: productReducer.pending,
    CompareProducts: state.cartReducer.addedItemsToCompare,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product));
    },
    addToCompare: (id) => {
      dispatch(addToCompare(id));
    },
    fetchProducts: bindActionCreators(fetchProducts, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BestSeller);
