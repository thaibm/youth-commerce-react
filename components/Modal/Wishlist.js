import React, { Component } from 'react';
import Link from 'next/link';

class Wishlist extends Component {

    state = {
        display: false
    };

    closeWishlist = () => {
        this.props.onClick(this.state.display);
    }

    render() {
        return (
            <div 
                className="modal right fade show shoppingWishlistModal" 
                style={{
                    display: "block", paddingRight: "16px"
                }}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <button 
                            type="button" 
                            className="close" 
                            data-dismiss="modal" 
                            aria-label="Close"
                            onClick={this.closeWishlist}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>

                        <div className="modal-body">
                            <h3>My Wish List (3)</h3>

                            <div className="product-cart-content">
                                <div className="product-cart">
                                    <div className="product-image">
                                        <img src={require("../../images/img2.jpg")} alt="image" />
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Belted chino trousers polo</a>
                                            </Link>
                                        </h3>
                                        <span>Blue / XS</span>
                                        <div className="product-price">
                                            <span>1</span>
                                            <span>x</span>
                                            <span className="price">$191.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="product-cart">
                                    <div className="product-image">
                                        <img src={require("../../images/img3.jpg")} alt="image" />
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Belted chino trousers polo</a>
                                            </Link>
                                        </h3>
                                        <span>Blue / XS</span>
                                        <div className="product-price">
                                            <span>1</span>
                                            <span>x</span>
                                            <span className="price">$191.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="product-cart">
                                    <div className="product-image">
                                        <img src={require("../../images/img4.jpg")} alt="image" />
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Belted chino trousers polo</a>
                                            </Link>
                                        </h3>
                                        <span>Blue / XS</span>
                                        <div className="product-price">
                                            <span>1</span>
                                            <span>x</span>
                                            <span className="price">$191.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product-cart-btn">
                                <Link href="#">
                                    <a className="btn btn-light">View Shopping Cart</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wishlist;
