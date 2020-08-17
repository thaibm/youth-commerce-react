import React, { Component } from 'react';
import Link from "next/link";
import { connect } from 'react-redux';
import { removeItem, addQuantity, subtractQuantity } from '../../store/cart/cartActions';
import { ToastContainer, toast, Slide } from 'react-toastify';
import CurrencyCost from '../Shared/CurrencyCost';

class CartProduct extends Component {

    handleRemove = (id) => {
        this.props.removeItem(id);

        toast.error('Removed from cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render() {
        let cartItems = this.props.products.length ?
        (
            this.props.products.map((data, idx) => {
                return (
                    <tr key={idx}>
                        <td className="product-thumbnail">
                            <Link href="#">
                                <a>
                                    <img src={data.imageSrc} alt="item" />
                                </a>
                            </Link>
                        </td>

                        <td className="product-name">
                            <Link href="#">
                                <a>{data.title}</a>
                            </Link>
                            {/* <ul>
                                <li>Color: <strong>Light Blue</strong></li>
                                <li>Size: <strong>XL</strong></li>
                                <li>Material: <strong>Cotton</strong></li>
                            </ul> */}
                        </td>

                        <td className="product-price">
                            <CurrencyCost amount={data.price}></CurrencyCost>
                        </td>

                        <td className="product-quantity">
                            <div className="input-counter">
                                <span 
                                    className="minus-btn"
                                    onClick={()=>{this.handleSubtractQuantity(data.id)}}
                                >
                                    <i className="fas fa-minus"></i>
                                </span>
                                <input 
                                    type="text" 
                                    value={data.quantity} 
                                    min="1" 
                                    max={10} 
                                    readOnly={true}
                                    onChange={e => (e)}
                                />
                                <span 
                                    className="plus-btn"
                                    onClick={()=>{this.handleAddQuantity(data.id)}}
                                >
                                    <i className="fas fa-plus"></i>
                                </span>
                            </div>
                        </td>

                        <td className="product-subtotal">
                            <CurrencyCost amount={data.price * data.quantity}></CurrencyCost>
                            <Link href="#">
                                <a
                                    className="remove"
                                    onClick={(e)=>{e.preventDefault();this.handleRemove(data.id)}}
                                >
                                    <i className="far fa-trash-alt"></i>
                                </a>
                            </Link>
                        </td>
                    </tr>
                )
            })
        ): (
            <tr>
                <td className="product-thumbnail" colSpan="5">
                    <p>Empty.</p>
                </td>
            </tr>
        );

        return (
            <>
                <ToastContainer transition={Slide} />
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Name</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                    </tbody>
                </table>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.cartReducer.addedItems,
        total: state.cartReducer.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => {dispatch(removeItem(id))},
        addQuantity: (id) => {dispatch(addQuantity(id))},
        subtractQuantity: (id) => {dispatch(subtractQuantity(id))}
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartProduct)
