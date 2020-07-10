import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Customer Service" />
                <section className="customer-service-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2><span className="dot"></span> Customer Service</h2>
                        </div>

                        <div className="customer-service-content">
                            <h3><i className="fas fa-gift"></i> Shipping Times and Costs</h3>
                            <ul>
                                <li>Complimentary ground shipping within 1 to 7 business days</li>
                                <li>In-store collection available within 1 to 7 business days</li>
                                <li>Next-day and Express delivery options also available</li>
                                <li>Purchases are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain items</li>
                                <li>See the delivery FAQs for details on shipping methods, costs and delivery times</li>
                            </ul>
                            <h3><i className="far fa-credit-card"></i> Payment Methods</h3>
                            <p>Shella accepts the following payment methods:</p>
                            <ul>
                                <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                <li>Shella features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                                <li>PayPal: Shop easily online without having to enter your credit card details on the website.Your account will be charged once the order is completed. To register for a PayPal account, visit the website <a href="#">paypal.com.</a></li>
                            </ul>
                            <h3><i className="fas fa-sync"></i> Exchanges, Returns and Refunds</h3>
                            <p>Items returned within 14 days of their original shipment date in same as new condition will be eligible for a full refund or store credit. Refunds will be charged back to the original form of payment used for purchase. Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.</p>
                        </div>
                    </div>
                </section>
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;