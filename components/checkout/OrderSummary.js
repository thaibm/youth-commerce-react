import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import CurrencyCost from '../Shared/CurrencyCost';

class OrderSummary extends Component {
  render() {
    const { isLoading } = this.props;
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="order-table table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Total</th>
            </tr>
          </thead>

          <tbody>
            {this.props.products.map((product, idx) => (
              <tr key={idx}>
                <td className="product-name">
                  <Link href="#">
                    <a>{product.title}</a>
                  </Link>
                </td>

                <td className="product-total">
                  <span className="subtotal-amount">
                    <CurrencyCost
                      ammount={product.price * product.quantity}
                    ></CurrencyCost>
                  </span>
                </td>
              </tr>
            ))}

            <tr>
              <td className="order-subtotal">
                <span>Cart Subtotal</span>
              </td>

              <td className="order-subtotal-price">
                <span className="order-subtotal-amount">
                  <CurrencyCost ammount={this.props.total}></CurrencyCost>
                </span>
              </td>
            </tr>

            {/* <tr>
              <td className="order-shipping">
                <span>Shipping</span>
              </td>

              <td className="shipping-price">
                <span>${this.props.shipping}</span>
              </td>
            </tr> */}

            <tr>
              <td className="total-price">
                <span>Order Total</span>
              </td>

              <td className="product-subtotal">
                <span className="subtotal-amount">
                  <CurrencyCost
                    ammount={this.props.total + this.props.shipping}
                  ></CurrencyCost>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.cartReducer.addedItems,
    total: state.cartReducer.total,
    shipping: state.cartReducer.shipping,
    currency: state.settingReducer.currency,
    currencyPosition: state.settingReducer.currencyPosition,
    isLoading: state.settingReducer.pending,
  };
};

export default connect(mapStateToProps)(OrderSummary);
