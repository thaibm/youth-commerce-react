import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Banner from '../components/shop-style-one/Banner';
import OfferArea from '../components/shop-style-one/OfferArea';
import Products from '../components/shop-style-one/Products';
import CategoryProducts from '../components/shop-style-one/CategoryProducts';
import TrendingProducts from '../components/shop-style-one/TrendingProducts';
import BestSeller from '../components/shop-style-one/BestSellers';
import Facility from '../components/shop-style-one/Facility';
import Testimonials from '../components/Common/Testimonials';
import News from '../components/Common/News';
import Subscribe from '../components/Common/Subscribe';
import Partner from '../components/Common/Partner';
import InstagramPhoto from '../components/Common/InstagramPhoto';
import Footer from '../components/Layout/Footer';
import AddsModal from '../components/Modal/AddsModal';
import { connect } from 'react-redux';
import fetchProducts from '../store/product/productFetcher';
import { bindActionCreators } from 'redux';

class Index extends Component {
  componentWillMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {/* <Banner /> */}
        <OfferArea />
        <BestSeller />
        <Products />
        {/* <CategoryProducts /> */}
        {/* <TrendingProducts /> */}
        {/* <Facility /> */}
        {/* <Testimonials /> */}
        {/* <News /> */}
        {/* <Subscribe /> */}
        {/* <Partner /> */}
        {/* <InstagramPhoto /> */}
        <Footer />
        {/* <AddsModal /> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const {productsReducer} = state;
  return {
    error: productsReducer.pending,
    products: productsReducer.products,
    pending: productsReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchProducts: fetchProducts,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
