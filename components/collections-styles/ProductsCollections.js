import React, { Component } from 'react';
import Link from 'next/link';

class ProductsCollections extends Component {
    render() {
        return (
            <section className="products-collections-area ptb-60">
                <div className="container">
                    <div className="section-title">
                        <h2><span className="dot"></span> Collections</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="collections-box">
                                <img src={require("../../images/collections/1.jpg")} alt="image" />

                                <div className="category">
                                    <h4>Accessories</h4>
                                    <span>50 products</span>
                                </div>

                                <Link href="#">
                                    <a></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="collections-box">
                                <img src={require("../../images/collections/2.jpg")} alt="image" />

                                <div className="category">
                                    <h4>SHOES</h4>
                                    <span>150 products</span>
                                </div>

                                <Link href="#">
                                    <a></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="collections-box">
                                <img src={require("../../images/collections/3.jpg")} alt="image" />

                                <div className="category">
                                    <h4>SHIRTS & TOPS</h4>
                                    <span>120 products</span>
                                </div>

                                <Link href="#">
                                    <a></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="collections-box">
                                <img src={require("../../images/collections/4.jpg")} alt="image" />

                                <div className="category">
                                    <h4>BOTTOMS</h4>
                                    <span>55 products</span>
                                </div>

                                <Link href="#">
                                    <a></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="collections-box">
                                <img src={require("../../images/collections/5.jpg")} alt="image" />

                                <div className="category">
                                    <h4>BAGS</h4>
                                    <span>250 products</span>
                                </div>

                                <Link href="#">
                                    <a></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="collections-box">
                                <img src={require("../../images/collections/6.jpg")} alt="image" />

                                <div className="category">
                                    <h4>CLOGS & MULES</h4>
                                    <span>50 products</span>
                                </div>

                                <Link href="#">
                                    <a></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="collections-box">
                                <img src={require("../../images/collections/7.jpg")} alt="image" />

                                <div className="category">
                                    <h4>DRESSES</h4>
                                    <span>230 products</span>
                                </div>

                                <Link href="#">
                                    <a></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="collections-box">
                                <img src={require("../../images/collections/8.jpg")} alt="image" />

                                <div className="category">
                                    <h4>SWEATERS</h4>
                                    <span>20 products</span>
                                </div>

                                <Link href="#">
                                    <a></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="collections-box">
                                <img src={require("../../images/collections/9.jpg")} alt="image" />

                                <div className="category">
                                    <h4>PANTS</h4>
                                    <span>25 products</span>
                                </div>

                                <Link href="#">
                                    <a></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="collections-box">
                                <img src={require("../../images/collections/10.jpg")} alt="image" />

                                <div className="category">
                                    <h4>SLIPPERS</h4>
                                    <span>50 products</span>
                                </div>

                                <Link href="#">
                                    <a></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="collections-box">
                                <img src={require("../../images/collections/11.jpg")} alt="image" />

                                <div className="category">
                                    <h4>SOCKS</h4>
                                    <span>340 products</span>
                                </div>

                                <Link href="#">
                                    <a></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="collections-box">
                                <img src={require("../../images/collections/12.jpg")} alt="image" />

                                <div className="category">
                                    <h4>SUNGLASSES</h4>
                                    <span>50 products</span>
                                </div>

                                <Link href="#">
                                    <a></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProductsCollections;
