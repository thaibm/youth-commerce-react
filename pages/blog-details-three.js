import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import DetailsContentThree from '../components/blog/DetailsContentThree';

class BlogDetailsThree extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Styling White Jeans after Labor Day" />
                <DetailsContentThree />
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default BlogDetailsThree;