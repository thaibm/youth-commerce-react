import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/Layout/Navbar';
import Facility from '../components/shop-style-one/Facility';
import Subscribe from '../components/Common/Subscribe';
import Partner from '../components/Common/Partner';
import InstagramPhoto from '../components/Common/InstagramPhoto';
import Footer from '../components/Layout/Footer';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />

                <div className="thank-you-area">
                    <div className="container">
                        <h1>Thank You</h1>
                        <Link href="/">
                            <a className="btn btn-primary">Go Home</a>
                        </Link>
                    </div>
                </div>

                <Facility />
                <Subscribe />
                <Partner />
                <InstagramPhoto />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
