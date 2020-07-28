import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { addQuantityWithNumber } from '../../store/cart/cartActions';
import { ToastContainer, toast } from 'react-toastify';

class QuickView extends Component {

    state = {
        qty: 1,
        max: 10,
        min: 1
    };

    handleAddToCartFromView = () => {
        this.props.addQuantityWithNumber(this.props.product, this.state.qty); 

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });

        setTimeout(() => {this.props.closeModal()},5000); 
    }

    IncrementItem = () => {
        this.setState(prevState => {
            if(prevState.qty < 10) {
                return {
                    qty: prevState.qty + 1
                }
            } else {
                return null;
            }
        });
    }

    DecreaseItem = () => {
        this.setState(prevState => {
            if(prevState.qty > 1) {
                return {
                    qty: prevState.qty - 1
                }
            } else {
                return null;
            }
        });
    }

    render() {
        const { closeModal, product } = this.props;
        return (
            <div className="modal fade productQuickView show" style={{paddingRight: '16px', display: 'block'}}>
                <ToastContainer />
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" onClick={closeModal} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="productQuickView-image">
                                    <img src={product.quickViewImage} alt="image" /> 
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="product-content">
                                    <h3>
                                        <Link href="#">
                                            <a>{product.title}</a>
                                        </Link>
                                    </h3>

                                    <div className="price" dangerouslySetInnerHTML={{ __html: product.priceHtml }}>
                                        {/* <span className="new-price">${product.price}</span> */}
                                    </div>

                                    <div className="product-review">
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>

                                        <Link href="#">
                                            <a className="rating-count">3 reviews</a>
                                        </Link>
                                    </div>

                                    <ul className="product-info">
                                        <li>
                                            <span>Vendor:</span> <Link href="#"><a>Lereve</a></Link>
                                        </li>
                                        <li>
                                            <span>Availability:</span> <Link href="#"><a>In stock (7 items)</a></Link>
                                        </li>
                                        <li>
                                            <span>Product Type:</span> <Link href="#"><a>T-Shirt</a></Link>
                                        </li>
                                    </ul>

                                    <div className="product-color-switch">
                                        <h4>Color:</h4>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a title="Black" className="color-black"></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a title="White" className="color-white"></a>
                                                </Link>
                                            </li>
                                            <li className="active">
                                                <Link href="#">
                                                    <a title="Green" className="color-green"></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a title="Yellow Green" className="color-yellowgreen"></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a title="Teal" className="color-teal"></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="product-size-wrapper">
                                        <h4>Size:</h4>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a>XS</a>
                                                </Link>
                                            </li>
                                            <li className="active">
                                                <Link href="#">
                                                    <a>S</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a>M</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a>XL</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a>XXL</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="product-add-to-cart">
                                        <div className="input-counter">
                                            <span 
                                                className="minus-btn"
                                                onClick={this.DecreaseItem}
                                            >
                                                <i className="fas fa-minus"></i>
                                            </span>
                                            <input 
                                                type="text" 
                                                value={this.state.qty}
                                                min={this.state.min}
                                                max={this.state.max} 
                                                onChange={e => this.setState({ qty: e.target.value })}
                                            />
                                            <span 
                                                className="plus-btn"
                                                onClick={this.IncrementItem}
                                            >
                                                <i className="fas fa-plus"></i>
                                            </span>
                                        </div>

                                        <button 
                                            type="submit" 
                                            className="btn btn-primary"
                                            onClick={this.handleAddToCartFromView}
                                        >
                                            <i className="fas fa-cart-plus"></i> Add to Cart
                                        </button>
                                    </div>

                                    <Link href="#">
                                        <a className="view-full-info">View full info</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        addQuantityWithNumber: (id, qty) => {dispatch(addQuantityWithNumber(id, qty))}
    }
}

export default connect(
    null,
    mapDispatchToProps
)(QuickView)
