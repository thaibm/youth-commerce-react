import React from 'react';
import axios from "axios"
import Router from 'next/router'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { resetCart } from '../../store/cart/cartActions';

class Payments extends React.Component {
    handleClick = () => {
        // this.props.resetCart(); 
        toast.success('Order has been confirmed', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });

        // setTimeout(function(){ Router.push('/thankyou'); }, 3000);
    }
    render() {
        // const onToken = async token => {
        //     const body = {
        //         amount: amount,
        //         token: token
        //     };
        //     await axios.post("/api/stripe/checkout", body);
        // };

        return (
            <React.Fragment>
                <ToastContainer transition={Zoom} />

                <div className="order-btn">
                    {/* <StripeCheckout 
                        name="Youth"
                        description="React Next eCommerce Templates"
                        amount={amount}
                        currency="USD"
                        token={onToken}
                        stripeKey="pk_test_ZaZZWZGlvdIn12yFleIqyjSI00G4e18Kf7"
                        billingAddress={false}
                        closed={this.handleClick}
                    >
                    </StripeCheckout> */}
                    <button disabled={this.props.disabled} className={`btn btn-primary ${this.props.disabled ? 'btn-disabled' : ''}`} onClick={this.handleClick} >
                        Place Order
                        </button>
                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetCart: () => { dispatch(resetCart()) }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Payments)