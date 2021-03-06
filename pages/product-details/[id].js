import React, { Component } from 'react';
import Navbar from '../../components/Layout/Navbar';
import Breadcrumb from '../../components/Common/Breadcrumb';
import Footer from '../../components/Layout/Footer';
import ProductImage from '../../components/product-details/ProductImage';
import ProductContent from '../../components/product-details/ProductContent';
import DetailsTab from '../../components/product-details/DetailsTab';
import RelatedProducts from '../../components/product-details/RelatedProducts';
import Facility from '../../components/shop-style-one/Facility';
import { withRouter } from 'next/router';
import { fetchProductById } from '../../store/product/productFetcher';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Index extends Component {
  componentWillMount() {
    const { fetchProduct } = this.props;
    const { id } = this.props.router.query;
    fetchProduct(id);
  }

  render() {
    const { pending, error } = this.props;
    let productContent = pending ? (
      <div className="row">Loading...</div>
    ) : (
      <div className="row">
        <ProductImage />
        <ProductContent />
        <DetailsTab />
      </div>
    );
    if (error) {
      productContent = error;
    }
    return (
      <React.Fragment>
        <Navbar />
        <Breadcrumb title="Belted chino trousers polo" />

        <section className="products-details-area pt-60">
          <div className="container">{productContent}</div>

          <RelatedProducts />

          <Facility />
        </section>

        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  const { productReducer } = state;
  return {
    error: productReducer.error,
    product: productReducer.currentProduct,
    pending: productReducer.pending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: bindActionCreators(fetchProductById, dispatch),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
