import React, { Component } from 'react';
import Link from 'next/link';

class OfferArea extends Component {
    render() {
        return (
            <section className="offer-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="offer-box">
                                <img src={require("../../images/offer-women.jpg")} alt="image" />

                                <div className="category">
                                    <h4>Women's</h4>
                                </div>

                                <div className="box-inner">
                                    <h3>Women's</h3>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>Woman Accessories</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Man Accessories</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Sunglasses</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Belts</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Hats</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Scrafs</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="offer-box">
                                <img src={require("../../images/1.jpg")} alt="image" />

                                <div className="category">
                                    <h4>Accessories</h4>
                                </div>

                                <div className="box-inner">
                                    <h3>Accessories</h3>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>Woman Accessories</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Man Accessories</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Sunglasses</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Belts</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Hats</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Scrafs</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="offer-box">
                                <img src={require("../../images/offer-men.jpg")} alt="image" />

                                <div className="category">
                                    <h4>Men's</h4>
                                </div>

                                <div className="box-inner">
                                    <h3>Men's</h3>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>Woman Accessories</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Man Accessories</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Sunglasses</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Belts</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Hats</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Scrafs</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OfferArea;
