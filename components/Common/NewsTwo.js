import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        }
    }
}

class NewsTwo extends Component {
    state = { 
        display: false,
        panel: true
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <section className="news-area ptb-60">
                <div className="container">
                    <div className="section-title">
                        <h2><span className="dot"></span> Novine News</h2>
                    </div>

                    {this.state.display ? <OwlCarousel 
                        className="news-slides owl-carousel owl-theme"
                        {...options}
                    >
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src={require("../../images/blog1.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="post-tag">
                                        <Link href="#">
                                            <a>Shop</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">20 Jan, 2020</span>

                                    <h3>
                                        <Link href="#/blog-details">
                                            <a>The Most Popular New top Business Apps</a>
                                        </Link>
                                    </h3>

                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                                    <Link href="/blog-details">
                                        <a className="read-more-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src={require("../../images/blog2.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="post-tag">
                                        <Link href="#">
                                            <a>Inspiration</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">21 Jan, 2020</span>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>The Best Marketing top use Management Tools</a>
                                        </Link>
                                    </h3>

                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                                    <Link href="/blog-details">
                                        <a className="read-more-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src={require("../../images/blog3.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="post-tag">
                                        <Link href="#">
                                            <a>Sell</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">22 Jan, 2020</span>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>3 WooCommerce Plugins to Boost Sales</a>
                                        </Link>
                                    </h3>

                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                                    <Link href="/blog-details">
                                        <a className="read-more-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src={require("../../images/blog4.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="post-tag">
                                        <Link href="#">
                                            <a>Marketing</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">23 Jan, 2020</span>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Top 21 Must-Read Blogs For Creative Agencies</a>
                                        </Link>
                                    </h3>

                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                                    <Link href="/blog-details">
                                        <a className="read-more-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default NewsTwo;
