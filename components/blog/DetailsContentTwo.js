import React, { Component } from 'react';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';

export class DetailsContentTwo extends Component {
    render() {
        return (
            <section className="blog-details-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details">
                                <div className="article-img">
                                    <img src={require("../../images/blog2.jpg")} alt="image" />
                                </div>

                                <div className="article-content">
                                    <ul className="entry-meta">
                                        <li>
                                            <i className="far fa-user"></i> 
                                            <Link href="#">
                                                <a>Novine</a>
                                            </Link>
                                        </li>
                                        <li><i className="far fa-calendar-alt"></i> April 08, 2019</li>
                                        <li><i className="far fa-comment-dots"></i> 2 Comment</li>
                                    </ul>

                                    <h3>The Most Popular New top Business Apps</h3>

                                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                                    <blockquote className="wp-block-quote">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                                        <cite>Tom Cruise</cite>
                                    </blockquote>

                                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>

                                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.</p>

                                    <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                    <ul className="category">
                                        <li><span>Tags:</span></li>
                                        <li>
                                            <Link href="#">
                                                <a>Business</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>IT</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Tips</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Design</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="comments-area">
                                <h3 className="comments-title">2 Comments:</h3>

                                <ol className="comment-list">
                                    <li className="comment">
                                        <article className="comment-body">
                                            <footer className="comment-meta">
                                                <div className="comment-author vcard">
                                                    <img src={require("../../images/author1.jpg")} className="avatar" alt="image" />
                                                    <b className="fn">Novine</b>
                                                    <span className="says">says:</span>
                                                </div>

                                                <div className="comment-metadata">
                                                    <Link href="#">
                                                        <a>
                                                            <time>April 24, 2019 at 10:59 am</time>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </footer>

                                            <div className="comment-content">
                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>

                                            <div className="reply">
                                                <Link href="#">
                                                    <a className="comment-reply-link">Reply</a>
                                                </Link>
                                            </div>
                                        </article>

                                        <ol className="children">
                                            <li className="comment">
                                                <article className="comment-body">
                                                    <footer className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src={require("../../images/author2.jpg")} className="avatar" alt="image" />
                                                            <b className="fn">Novine</b>
                                                            <span className="says">says:</span>
                                                        </div>
            
                                                        <div className="comment-metadata">
                                                            <Link href="#">
                                                                <a>
                                                                    <time>April 24, 2019 at 10:59 am</time>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </footer>
            
                                                    <div className="comment-content">
                                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                    </div>
            
                                                    <div className="reply">
                                                        <Link href="#">
                                                            <a className="comment-reply-link">Reply</a>
                                                        </Link>
                                                    </div>
                                                </article>
                                            </li>

                                            <ol className="children">
                                                <li className="comment">
                                                    <article className="comment-body">
                                                        <footer className="comment-meta">
                                                            <div className="comment-author vcard">
                                                                <img src={require("../../images/author3.jpg")} className="avatar" alt="image" />
                                                                <b className="fn">Novine</b>
                                                                <span className="says">says:</span>
                                                            </div>
                
                                                            <div className="comment-metadata">
                                                                <Link href="#">
                                                                    <a>
                                                                        <time>April 24, 2019 at 10:59 am</time>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </footer>
                
                                                        <div className="comment-content">
                                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                        </div>
                
                                                        <div className="reply">
                                                            <Link href="#">
                                                                <a className="comment-reply-link">Reply</a>
                                                            </Link>
                                                        </div>
                                                    </article>

                                                    <ol className="children">
                                                        <li className="comment">
                                                            <article className="comment-body">
                                                                <footer className="comment-meta">
                                                                    <div className="comment-author vcard">
                                                                        <img src={require("../../images/author4.jpg")} className="avatar" alt="image" />
                                                                        <b className="fn">Novine</b>
                                                                        <span className="says">says:</span>
                                                                    </div>
                        
                                                                    <div className="comment-metadata">
                                                                        <Link href="#">
                                                                            <a>
                                                                                <time>April 24, 2019 at 10:59 am</time>
                                                                            </a>
                                                                        </Link>
                                                                    </div>
                                                                </footer>
                        
                                                                <div className="comment-content">
                                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                </div>
                        
                                                                <div className="reply">
                                                                    <Link href="#">
                                                                        <a className="comment-reply-link">Reply</a>
                                                                    </Link>
                                                                </div>
                                                            </article>
                                                        </li>
                                                    </ol>
                                                </li>
                                            </ol>
                                        </ol>
                                    </li>

                                    <li className="comment">
                                        <article className="comment-body">
                                            <footer className="comment-meta">
                                                <div className="comment-author vcard">
                                                    <img src={require("../../images/author2.jpg")} className="avatar" alt="image" />
                                                    <b className="fn">Novine</b>
                                                    <span className="says">says:</span>
                                                </div>

                                                <div className="comment-metadata">
                                                    <Link href="#">
                                                        <a>
                                                            <time>April 24, 2019 at 10:59 am</time>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </footer>

                                            <div className="comment-content">
                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>

                                            <div className="reply">
                                                <Link href="#">
                                                    <a className="comment-reply-link">Reply</a>
                                                </Link>
                                            </div>
                                        </article>
                                    </li>
                                </ol>

                                <div className="comment-respond">
                                    <h3 className="comment-reply-title">Leave a Reply</h3>

                                    <form className="comment-form">
                                        <p className="comment-notes">
                                            <span id="email-notes">Your email address will not be published.</span>
                                            Required fields are marked 
                                            <span className="required">*</span>
                                        </p>
                                        <p className="comment-form-comment">
                                            <label>Comment</label>
                                            <textarea name="comment" id="comment" cols="45" rows="5" maxLength="65525" required={true} />
                                        </p>
                                        <p className="comment-form-author">
                                            <label>Name <span className="required">*</span></label>
                                            <input type="text" id="author" name="author" required={true} />
                                        </p>
                                        <p className="comment-form-email">
                                            <label>Email <span className="required">*</span></label>
                                            <input type="email" id="email" name="email" required={true} />
                                        </p>
                                        <p className="comment-form-url">
                                            <label>Website</label>
                                            <input type="url" id="url" name="url" />
                                        </p>
                                        <p className="comment-form-cookies-consent">
                                            <input type="checkbox" value="yes" name="wp-comment-cookies-consent" id="wp-comment-cookies-consent" />
                                            <label>Save my name, email, and website in this browser for the next time I comment.</label>
                                        </p>
                                        <p className="form-submit">
                                            <input type="submit" name="submit" id="submit" className="submit" value="Post Comment" />
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DetailsContentTwo;
