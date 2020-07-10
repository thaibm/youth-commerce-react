import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import DetailsContent from '../components/blog/DetailsContent';

class BlogDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Styling White Jeans after Labor Day" />
                <DetailsContent />
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default BlogDetails;