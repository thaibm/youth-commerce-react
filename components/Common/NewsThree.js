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

class NewsThree extends Component {
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
                        <div className="single-blog-post-box">
                            <div className="blog-image">
                                <Link href="/blog-details">
                                    <a>
                                        <img src={require("../../images/news-image/news-img1.jpg")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta">
                                    <li>By: <Link href="#"><a>Admin</a></Link></li>
                                    <li>20 February, 2020</li>
                                </ul>
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Evolving Ecommerce: 14 Trends Driving Online Retail In 2020</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>

                        <div className="single-blog-post-box">
                            <div className="blog-image">
                                <Link href="/blog-details">
                                    <a>
                                        <img src={require("../../images/news-image/news-img2.jpg")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta">
                                    <li>By: <Link href="#"><a>Admin</a></Link></li>
                                    <li>21 February, 2020</li>
                                </ul>
                                <h3>
                                    <Link href="/blog-details">
                                        <a>The Best Ecommerce Platform for Growing Sales</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>

                        <div className="single-blog-post-box">
                            <div className="blog-image">
                                <Link href="/blog-details">
                                    <a>
                                        <img src={require("../../images/news-image/news-img3.jpg")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta">
                                    <li>By: <Link href="#"><a>Admin</a></Link></li>
                                    <li>22 February, 2020</li>
                                </ul>
                                <h3>
                                    <Link href="/blog-details">
                                        <a>A Green Brand Finding Roots in Sustainability</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>

                        <div className="single-blog-post-box">
                            <div className="blog-image">
                                <Link href="/blog-details">
                                    <a>
                                        <img src={require("../../images/news-image/news-img4.jpg")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta">
                                    <li>By: <Link href="#"><a>Admin</a></Link></li>
                                    <li>23 February, 2020</li>
                                </ul>
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Don’t Miss These Top Ecommerce Conferences in 2020</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>

                        <div className="single-blog-post-box">
                            <div className="blog-image">
                                <Link href="/blog-details">
                                    <a>
                                        <img src={require("../../images/news-image/news-img5.jpg")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta">
                                    <li>By: <Link href="#"><a>Admin</a></Link></li>
                                    <li>24 February, 2020</li>
                                </ul>
                                <h3>
                                    <Link href="/blog-details">
                                        <a>The Most Popular New top Business eCommerce Apps</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default NewsThree;
