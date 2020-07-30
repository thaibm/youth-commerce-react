import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { addToCart, removeItemFromCompare } from '../../store/cart/cartActions';
import { ToastContainer, toast, Slide } from 'react-toastify';

export class Content extends Component {

    handleRemove = (id) => {
        this.props.removeItemFromCompare(id);

        toast.error('Removed from compare list', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    handleAddToCart = (id) => {
        this.props.addToCart(id); 

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    render() {
        let { compare_products } = this.props;
        return (
            <section className="compare-area ptb-60">
                <ToastContainer transition={Slide} />
                <div className="container">
                    <div className="section-title">
                        <h2><span className="dot"></span> Compare Products</h2>
                    </div>

                    <div className="products-compare-table">
                        <div className="row">
                            { compare_products.length ? (
                                compare_products.map((data, idx) => (
                                    <div className="col-lg-3 col-md-6 col-sm-6" key={idx}>
                                        <div className="remove-btn">
                                            <Link href="#">
                                                <a
                                                    className="remove"
                                                    onClick={(e)=>{e.preventDefault();this.handleRemove(data.id)}}
                                                >
                                                    <i className="far fa-trash-alt"></i>
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="single-product-box">
                                            <div className="product-image">
                                                <Link href="#">
                                                    <a>
                                                        <img src={data.image} alt="image" />
                                                        <img src={data.imageHover} alt="image" />
                                                    </a>
                                                </Link>
                                            </div>

                                            <div className="product-content">
                                                <h3>
                                                    <Link href="#">
                                                        <a>{data.title}</a>
                                                    </Link>
                                                </h3>

                                                <div className="product-price">
                                                    <span className="new-price">${data.price}</span>
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
                                                            e.preventDefault(); this.handleAddToCart(data.id)
                                                        }}
                                                    >
                                                        Add to Cart
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div>Empty</div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        compare_products: state.cartReducer.addedItemsToCompare
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) },
        removeItemFromCompare: (id) => {dispatch(removeItemFromCompare(id))}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content)
