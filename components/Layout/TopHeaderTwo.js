import React, { Component } from 'react';
import Link from 'next/link';
import Wishlist from '../Modal/Wishlist';

class TopHeaderTwo extends Component {

    state = {
        display: false
    };

    handleWishlist = () => {
        this.setState( prevState => {
            return {
                display: !prevState.display
            };
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="top-header">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6">
                                <ul className="top-header-nav">
                                    <li><Link href="/about"><a>About</a></Link></li>
                                    <li><Link href="/"><a>Our Stores</a></Link></li>
                                    <li><Link href="/faq"><a>FAQ's</a></Link></li>
                                    <li><Link href="/contact-us"><a>Contact</a></Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-5 col-md-6">
                                <ul className="top-header-right-nav">
                                    <li>
                                        <Link href="#">
                                            <a 
                                                data-toggle="modal" 
                                                data-target="#shoppingWishlistModal"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    this.handleWishlist()
                                                }}
                                            >
                                                Wishlist <i className="far fa-heart"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/compare">
                                            <a>Compare <i className="fas fa-balance-scale"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="languages-list">
                                            <select>
                                                <option value="1">Eng</option>
                                                <option value="2">Ger</option>
                                                <option value="3">Span</option>
                                            </select>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {this.state.display ? <Wishlist onClick={this.handleWishlist} /> : ''}
            </React.Fragment>
        );
    }
}

export default TopHeaderTwo;
