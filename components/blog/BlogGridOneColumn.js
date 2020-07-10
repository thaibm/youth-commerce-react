import React, { Component } from 'react';
import Link from 'next/link';

export class BlogGridOneColumn extends Component {
    render() {
        return (
            <section className="news-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-12 offset-md-0">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a><img src={require("../../images/blog1.jpg")} alt="image" /></a>
                                    </Link>

                                    <div className="post-tag">
                                        <Link href="#">
                                            <a>Technology</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">25 Feb, 2019</span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>The Most Popular New top Business Apps</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                                    <Link href="/blog-details"> 
                                        <a className="read-more-btn">
                                            Read More <i className="icofont-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a><img src={require("../../images/blog2.jpg")} alt="image" /></a>
                                    </Link>

                                    <div className="post-tag">
                                        <Link href="#">
                                            <a>Agency</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">27 Feb, 2019</span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>The Best Marketing top use Management Tools</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                    
                                    <Link href="/blog-details"> 
                                        <a className="read-more-btn">
                                            Read More <i className="icofont-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a><img src={require("../../images/blog3.jpg")} alt="image" /></a>
                                    </Link>

                                    <div className="post-tag">
                                        <Link href="#">
                                            <a>IT</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">28 Feb, 2019</span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>3 WooCommerce Plugins to Boost Sales</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                    
                                    <Link href="/blog-details"> 
                                        <a className="read-more-btn">
                                            Read More <i className="icofont-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a><img src={require("../../images/blog4.jpg")} alt="image" /></a>
                                    </Link>

                                    <div className="post-tag">
                                        <Link href="#">
                                            <a>Creative</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">29 Feb, 2019</span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Top 21 Must-Read Blogs For Creative Agencies</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                    
                                    <Link href="/blog-details"> 
                                        <a className="read-more-btn">
                                            Read More <i className="icofont-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a><img src={require("../../images/blog5.jpg")} alt="image" /></a>
                                    </Link>

                                    <div className="post-tag">
                                        <Link href="#">
                                            <a>Technology</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">25 Feb, 2019</span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>The Most Popular New top Business Apps</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                    
                                    <Link href="/blog-details"> 
                                        <a className="read-more-btn">
                                            Read More <i className="icofont-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a><img src={require("../../images/blog6.jpg")} alt="image" /></a>
                                    </Link>

                                    <div className="post-tag">
                                        <Link href="#">
                                            <a>Agency</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">27 Feb, 2019</span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>The Best Marketing top use Management Tools</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                    
                                    <Link href="/blog-details"> 
                                        <a className="read-more-btn">
                                            Read More <i className="icofont-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            
                            {/* Pagination */}
                            <div className="pagination-area">
                                <Link href="#">
                                    <a className="prev page-numbers">
                                        <i className="fas fa-angle-double-left"></i>
                                    </a>
                                </Link>

                                <Link href="#">
                                    <a className="page-numbers">1</a>
                                </Link>

                                <span className="page-numbers current" aria-current="page">2</span>

                                <Link href="#">
                                    <a className="page-numbers">3</a>
                                </Link>

                                <Link href="#">
                                    <a className="page-numbers">4</a>
                                </Link>

                                <Link href="#">
                                    <a className="next page-numbers">
                                        <i className="fas fa-angle-double-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogGridOneColumn;
