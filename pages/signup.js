import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Signup" />
                <section className="signup-area ptb-60">
                    <div className="container">
                        <div className="signup-content">
                            <div className="section-title">
                                <h2><span className="dot"></span> Create an Account</h2>
                            </div>

                            <form className="signup-form">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" placeholder="Enter your name" id="fname" name="fname" />
                                </div>

                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" placeholder="Enter your name" id="lname" name="lname" />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="Enter your name" id="name" name="name" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter your password" id="password" name="password" />
                                </div>

                                <button type="submit" className="btn btn-primary">Signup</button>
                                <Link href="/">
                                    <a className="return-store">or Return to Store</a>
                                </Link>
                            </form>
                        </div>
                    </div>
                </section>
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
