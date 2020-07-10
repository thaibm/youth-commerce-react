import React, { Component } from 'react';
import Link from 'next/link';

const useTagFunc = () => {
    let useTag = '<use xlink:href="#star" />';
    return <svg className="star" dangerouslySetInnerHTML={{__html: useTag }} />;
}

class DetailsTab extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <div className="col-lg-12 col-md-12">
                <div className="tab products-details-tab">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <ul className="tabs">
                                <li 
                                    onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab1')}}
                                    className="current"
                                >
                                    <span className="tabs-nav-text">
                                        <div className="dot"></div> Description
                                    </span>
                                </li>
                                
                                <li onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab2')}}>
                                    <span className="tabs-nav-text">
                                        <div className="dot"></div> Additional information
                                    </span>
                                </li>

                                <li onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab3')}}>
                                    <span className="tabs-nav-text">
                                        <div className="dot"></div> Shipping
                                    </span>
                                </li>
                                
                                <li onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab4')}}>
                                    <span className="tabs-nav-text">
                                        <div className="dot"></div> Why Buy From Us
                                    </span>
                                </li>

                                <li onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab5')}}>
                                    <span className="tabs-nav-text">
                                        <div className="dot"></div> Reviews
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="tab_content">
                                <div id="tab1" className="tabs_item">
                                    <div className="products-details-tab-content">
                                        <p>Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum.  Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nulla libero. Vivamus pharetra posuere sapien.</p>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <ul>
                                                    <li>Fabric 1: 100% Polyester</li>
                                                    <li>Fabric 2: 100% Polyester,Lining: 100% Polyester</li>
                                                    <li>Fabric 3: 75% Polyester, 20% Viscose, 5% Elastane</li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <ol>
                                                    <li>Fabric 1: 75% Polyester, 20% Viscose, 5% Elastane</li>
                                                    <li>Fabric 2: 100% Polyester,Lining: 100% Polyester</li>
                                                    <li>Fabric 3: 100% Polyester</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab2" className="tabs_item">
                                    <div className="products-details-tab-content">
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <tbody>
                                                    <tr>
                                                        <td>Color:</td>
                                                        <td>Blue, Purple, White</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Size:</td>
                                                        <td>20, 24</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Material:</td>
                                                        <td>100% Polyester</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Height:</td>
                                                        <td>180 cm - 5' 11”</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bust</td>
                                                        <td>83 cm - 32”</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Waist</td>
                                                        <td>57 cm - 22”</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hips</td>
                                                        <td>88 cm - 35</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shipping</td>
                                                        <td>Free</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab3" className="tabs_item">
                                    <div className="products-details-tab-content">
                                        <div className="table-responsive">
                                            <table className="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td>Shipping</td>
                                                        <td>This item Ship to USA</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Delivery</td>
                                                        <td>
                                                            Estimated between Wednesday 07/31/2020 and Monday 08/05/2020 <br />
                                                            Will usually ship within 1 bussiness day.
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab4" className="tabs_item">
                                    <div className="products-details-tab-content">
                                        <p>Here are 5 more great reasons to buy from us:</p>

                                        <ol>
                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                                            <li> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                                            <li>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                            <li>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                        </ol>
                                    </div>
                                </div>

                                <div id="tab5" className="tabs_item">
                                    <div className="products-details-tab-content">
                                        <div className="product-review-form">
                                            <h3>Customer Reviews</h3>

                                            <div className="review-title">
                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <p>Based on 3 reviews</p>

                                                <Link href="#">
                                                    <a className="btn btn-light">Write a Review</a>
                                                </Link>
                                            </div>

                                            <div className="review-comments">
                                                <div className="review-item">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                    </div>
                                                    <h3>Good</h3>
                                                    <span><strong>Admin</strong> on <strong>Sep 21, 2019</strong></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                                                    <Link href="#">
                                                        <a className="review-report-link">Report as Inappropriate</a>
                                                    </Link>
                                                </div>

                                                <div className="review-item">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                    </div>
                                                    <h3>Good</h3>
                                                    <span><strong>Admin</strong> on <strong>Sep 21, 2019</strong></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                                                    <Link href="#">
                                                        <a className="review-report-link">Report as Inappropriate</a>
                                                    </Link>
                                                </div>

                                                <div className="review-item">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                    </div>
                                                    <h3>Good</h3>
                                                    <span><strong>Admin</strong> on <strong>Sep 21, 2019</strong></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                                                    <Link href="#">
                                                        <a className="review-report-link">Report as Inappropriate</a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="review-form">
                                                <h3>Write a Review</h3>

                                                <form>
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input type="text" id="name" name="name" placeholder="Enter your name" className="form-control" />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input type="email" id="email" name="email" placeholder="Enter your email" className="form-control" />
                                                    </div>

                                                    <div className="review-rating">
                                                        <p>Rate this item</p>
                                
                                                        <div className="star-source">
                                                            <svg>
                                                                <linearGradient x1="50%" y1="5.41294643%" x2="87.5527344%" y2="65.4921875%" id="grad">
                                                                    <stop stopColor="#f2b01e" offset="0%"></stop>
                                                                    <stop stopColor="#f2b01e" offset="60%"></stop>
                                                                    <stop stopColor="#f2b01e" offset="100%"></stop>
                                                                </linearGradient>
                                                                <symbol id="star" viewBox="153 89 106 108">   
                                                                    <polygon id="star-shape" stroke="url(#grad)" strokeWidth="5" fill="currentColor" points="206 162.5 176.610737 185.45085 189.356511 150.407797 158.447174 129.54915 195.713758 130.842203 206 95 216.286242 130.842203 253.552826 129.54915 222.643489 150.407797 235.389263 185.45085"></polygon>
                                                                </symbol>
                                                            </svg>
                                                        </div>

                                                        <div className="star-rating">
                                                            <input type="radio" name="star" id="five" />
                                                            <label htmlFor="five">
                                                                {useTagFunc()}
                                                            </label>

                                                            <input type="radio" name="star" id="four" />
                                                            <label htmlFor="four">
                                                                {useTagFunc()}
                                                            </label>

                                                            <input type="radio" name="star" id="three" />
                                                            <label htmlFor="three">
                                                                {useTagFunc()}
                                                            </label>

                                                            <input type="radio" name="star" id="two" />
                                                            <label htmlFor="two">
                                                                {useTagFunc()}
                                                            </label>

                                                            <input type="radio" name="star" id="one" />
                                                            <label htmlFor="one">
                                                                {useTagFunc()}
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Review Title</label>
                                                        <input type="text" id="review-title" name="review-title" placeholder="Enter your review a title" className="form-control" />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Body of Review (1500)</label>
                                                        <textarea name="review-body" id="review-body" cols="30" rows="10" placeholder="Write your comments here" className="form-control" />
                                                    </div>
                                                    <button type="submit" className="btn btn-light">Submit Review</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailsTab;
