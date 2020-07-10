import React, { Component } from 'react';
import Link from 'next/link';

class BlogSidebar extends Component {
    render() {
        return (
            <aside className="widget-area" id="secondary">
                <section className="widget widget_comero_posts_thumb">
                    <h3 className="widget-title">Popular Posts</h3>

                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <time>June 30, 2019</time>
                            <h4 className="title usmall">
                                <Link href="#">
                                    <a>How to change yourself for the better.</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg2" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <time>June 30, 2019</time>
                            <h4 className="title usmall">
                                <Link href="#">
                                    <a>10 Tactics for marketing your company.</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg3" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <time>June 30, 2019</time>
                            <h4 className="title usmall">
                                <Link href="#">
                                    <a>Google web ranking changing much.</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>
                </section>

                <section className="widget widget_recent_comments">
                    <h3 className="widget-title">Recent Comments</h3>

                    <ul>
                        <li>
                            <span className="comment-author-link">
                                <Link href="#">
                                    <a>A WordPress Commenter</a>
                                </Link>
                            </span> on <Link href="#"><a>Hello world!</a></Link>
                        </li>
                        <li>
                            <span className="comment-author-link">
                                <Link href="#">
                                    <a>Novine</a>
                                </Link>
                            </span> on <Link href="#"><a>Hello world!</a></Link>
                        </li>
                        <li>
                            <span className="comment-author-link">
                                <Link href="#">
                                    <a>Wordpress</a>
                                </Link>
                            </span> on <Link href="#"><a>Hello world!</a></Link>
                        </li>
                        <li>
                            <span className="comment-author-link">
                                <Link href="#">
                                    <a>A WordPress Commenter</a>
                                </Link>
                            </span> on <Link href="#"><a>Hello world!</a></Link>
                        </li>
                        <li>
                            <span className="comment-author-link">
                                <Link href="#">
                                    <a>Novine</a>
                                </Link>
                            </span> on <Link href="#"><a>Hello world!</a></Link>
                        </li>
                    </ul>
                </section>

                <section className="widget widget_recent_entries">
                    <h3 className="widget-title">Recent Posts</h3>

                    <ul>
                        <li>
                            <Link href="#">
                                <a>How to Become a Successful Entry Level UX Designer</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>How to start your business as an entrepreneur</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>How to be a successful entrepreneur</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>How to Become a Successful Entry Level UX Designer</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Protect your workplace from cyber attacks</a>
                            </Link>
                        </li>
                    </ul>
                </section>

                <section className="widget widget_archive">
                    <h3 className="widget-title">Archives</h3>

                    <ul>
                        <li>
                            <Link href="#">
                                <a>May 2019</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>April 2019</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>June 2019</a>
                            </Link>
                        </li>
                    </ul>
                </section>

                <section className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>

                    <ul>
                        <li>
                            <Link href="#">
                                <a>Business</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Privacy</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Shop</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Tips</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Uncategorized</a>
                            </Link>
                        </li>
                    </ul>
                </section>

                <section className="widget widget_meta">
                    <h3 className="widget-title">Meta</h3>

                    <ul>
                        <li>
                            <Link href="#">
                                <a>Log in</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Entries <abbr title="Really Simple Syndication">RSS</abbr></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Comments <abbr title="Really Simple Syndication">RSS</abbr></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>WordPress.org</a>
                            </Link>
                        </li>
                    </ul>
                </section>

                <section className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>

                    <div className="tagcloud">
                        <Link href="#">
                            <a>Business <span className="tag-link-count">(3)</span></a>
                        </Link>
                        
                        <Link href="#">
                            <a>Design <span className="tag-link-count">(3)</span></a>
                        </Link>

                        <Link href="#">
                            <a>IT <span className="tag-link-count">(2)</span></a>
                        </Link>

                        <Link href="#">
                            <a>Marketing <span className="tag-link-count">(2)</span></a>
                        </Link>

                        <Link href="#">
                            <a>Mobile <span className="tag-link-count">(1)</span></a>
                        </Link>

                        <Link href="#">
                            <a>Protect <span className="tag-link-count">(1)</span></a>
                        </Link>

                        <Link href="#">
                            <a>Startup <span className="tag-link-count">(1)</span></a>
                        </Link>

                        <Link href="#">
                            <a>Tips <span className="tag-link-count">(2)</span></a>
                        </Link>
                    </div>
                </section>
            </aside>
        );
    }
}

export default BlogSidebar;