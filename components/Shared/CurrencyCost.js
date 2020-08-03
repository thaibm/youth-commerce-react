import React, { Component } from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';

class CurrencyCost extends Component {
  renderCurrency(rawHTML) {
    return React.createElement('span', {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });
  }

  renderCost(ammount) {
    const { currency, currencyPosition } = this.props;

    if (!currency || !currencyPosition) {
      return (
        <NumberFormat
          value={ammount}
          displayType={'text'}
          thousandSeparator={true}
        />
      );
    }

    if (currencyPosition === 'left') {
      return (
        <span className="price">
          {this.renderCurrency(currency.symbol)}
          <NumberFormat
            value={ammount}
            displayType={'text'}
            thousandSeparator={true}
          />
        </span>
      );
    } else {
      return (
        <span className="price">
          <NumberFormat
            value={ammount}
            displayType={'text'}
            thousandSeparator={true}
          />
          {this.renderCurrency(currency.symbol)}
        </span>
      );
    }
  }

  render() {
    const { ammount } = this.props;
    return this.renderCost(ammount);
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.settingReducer.currency,
    currencyPosition: state.settingReducer.currencyPosition,
  };
};

export default connect(mapStateToProps)(CurrencyCost);
