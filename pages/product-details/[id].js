import React, { Component } from 'react';
import Navbar from '../../components/Layout/Navbar';
import Breadcrumb from '../../components/Common/Breadcrumb';
import Footer from '../../components/Layout/Footer';
import ProductImage from '../../components/product-details/ProductImage';
import ProductContent from '../../components/product-details/ProductContent';
import DetailsTab from '../../components/product-details/DetailsTab';
import RelatedProducts from '../../components/product-details/RelatedProducts';
import Facility from '../../components/shop-style-one/Facility';
import { withRouter } from 'next/router'

class Index extends Component {
    render() {
        const { id } = this.props.router.query;
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Belted chino trousers polo" />

                <section className="products-details-area pt-60">
                    <div className="container">
                        <div className="row">
                            <ProductImage />
                            <ProductContent />
                            <DetailsTab />
                        </div>
                    </div>

                    <RelatedProducts />

                    <Facility />
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}

export default withRouter(Index);
