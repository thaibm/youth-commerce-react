import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import BlogGridOneColumn from '../components/blog/BlogGridOneColumn';

class Blog3 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Blog Three" />
                <BlogGridOneColumn />
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Blog3;