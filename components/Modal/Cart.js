import React, { Component } from 'react';
import { connect } from 'react-redux'
import Link from 'next/link';

class Cart extends Component {

    state = {
        display: false
    };

    closeCart = () => {
        this.props.onClick(this.state.display);
    }

    render() {
        let { products, total } = this.props;
        return (
            <div 
                className="modal right fade show shoppingCartModal" 
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
                            onClick={this.closeCart}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>

                        <div className="modal-body">
                            <h3>My Cart ({products.length})</h3>

                            <div className="product-cart-content">

                                {products.length > 0 ? products.map((product, idx) => (
                                    <div className="product-cart" key={idx}>
                                        <div className="product-image">
                                            <img src={product.image} alt="image" />
                                        </div>

                                        <div className="product-content">
                                            <h3>
                                                <Link href="#">
                                                    <a>Belted chino trousers polo</a>
                                                </Link>
                                            </h3>
                                            <span>Blue / XS</span>
                                            <div className="product-price">
                                                <span>{product.quantity}</span>
                                                <span>x</span>
                                                <span className="price">${product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                )) : 'Empty'}
                                
                            </div>

                            <div className="product-cart-subtotal">
                                <span>Subtotal</span>

                                <span className="subtotal">${total}</span>
                            </div>

                            <div className="product-cart-btn">
                                <Link href="/checkout">
                                    <a className="btn btn-primary">Proceed to Checkout</a>
                                </Link>
                                <Link href="/cart">
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

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems,
        total: state.total
        //addedItems: state.addedItems
    }
}

export default connect(mapStateToProps)(Cart)