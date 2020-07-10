import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import ProductsCollections from '../components/collections-styles/ProductsCollections';
import Facility from '../components/Common/Facility';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Collections Type 1" />
                <ProductsCollections />
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
