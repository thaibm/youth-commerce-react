import React, { Component } from 'react';

class Shipping extends Component {
    render() {
        const { closeShipModal } = this.props;
        return (
            <div 
                className="modal fade productShippingModal show" style={{paddingRight: '16px', display: 'block'}}
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" onClick={closeShipModal} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">
                                <i className="fas fa-times"></i>
                            </span>
                        </button>

                        <div className="shipping-content">
                            <h3>Shipping</h3>
                            <ul>
                                <li>Complimentary ground shipping within 1 to 7 business days</li>
                                <li>In-store collection available within 1 to 7 business days</li>
                                <li>Next-day and Express delivery options also available</li>
                                <li>Purchases are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain items</li>
                                <li>See the delivery FAQs for details on shipping methods, costs and delivery times</li>
                            </ul>

                            <h3>Returns and Exchanges</h3>
                            <ul>
                                <li>Easy and complimentary, within 14 days</li>
                                <li>See conditions and procedure in our return FAQs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shipping;
