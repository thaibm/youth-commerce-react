import React, { Component } from 'react';
import Link from 'next/link';

class LeftSidebar extends Component {
    state = {
        currentSelection: false,
        collection: false,
        brand: false,
        size: false,
        price: false,
        color: false,
        popular: false
    }

    handleToggle = (e, evt) => {
        e.preventDefault();

        if (evt == "currentSelection"){
            this.setState({
                currentSelection: !this.state.currentSelection
            })
        } else if (evt == "collection"){
            this.setState({
                collection: !this.state.collection
            })
        } else if (evt == "brand"){
            this.setState({
                brand: !this.state.brand
            })
        } else if (evt == "size"){
            this.setState({
                size: !this.state.size
            })
        } else if (evt == "price"){
            this.setState({
                price: !this.state.price
            })
        }  else if (evt == "color"){
            this.setState({
                color: !this.state.color
            })
        } else if (evt == "popular"){
            this.setState({
                popular: !this.state.popular
            })
        }
    }

    render() {
        let { currentSelection, collection, brand, size, price, color, popular } = this.state;
        return (
            <div className={`col-lg-${this.props.col ? this.props.col : '4' } col-md-12`}>
                <div className="woocommerce-sidebar-area">
                    <div 
                        className={`collapse-widget filter-list-widget ${currentSelection ? '' : 'open'}`}>
                        <h3 
                            className={`collapse-widget-title ${currentSelection ? '' : 'active'}`}
                            onClick={e => this.handleToggle(e, "currentSelection")}
                        >
                            Current Selection

                            <i className="fas fa-angle-up"></i>
                        </h3>

                        <div className={`selected-filters-wrap-list ${currentSelection ? 'block' : 'none'}`}>
                            <ul>
                                <li>
                                    <Link href="#">
                                        <a>44</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>XI</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Clothing</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Shoes</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Accessories</a>
                                    </Link>
                                </li>
                            </ul>

                            <div className="delete-selected-filters">
                                <Link href="#">
                                    <a>
                                        <i className="far fa-trash-alt"></i> <span>Clear All</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div 
                        className={`collapse-widget collections-list-widget ${collection ? '' : 'open'}`}
                    >
                        <h3 
                            className={`collapse-widget-title ${collection ? '' : 'active'}`}
                            onClick={e => this.handleToggle(e, "collection")}
                        >
                            Collections

                            <i className="fas fa-angle-up"></i>
                        </h3>

                        <ul className={`collections-list-row ${collection ? 'block' : 'none'}`}>
                            <li className="active">
                                <Link href="#">
                                    <a>Women’s</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Men</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Clothing</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Shoes</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Accessories</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Uncategorized</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div 
                        className={`collapse-widget brands-list-widget ${brand ? '' : 'open'}`}
                    >
                        <h3 
                            className={`collapse-widget-title ${brand ? '' : 'active'}`}
                            onClick={e => this.handleToggle(e, "brand")}
                        >
                            Brands

                            <i className="fas fa-angle-up"></i>
                        </h3>

                        <ul className={`brands-list-row ${brand ? 'block' : 'none'}`}>
                            <li className="active">
                                <Link href="#">
                                    <a>Adidas</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Nike</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Reebok</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Shoes</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Ralph Lauren</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Delpozo</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div 
                        className={`collapse-widget size-list-widget ${size ? '' : 'open'}`}
                    >
                        <h3 
                            className={`collapse-widget-title ${size ? '' : 'active'}`}
                            onClick={e => this.handleToggle(e, "size")}
                        >
                            Size

                            <i className="fas fa-angle-up"></i>
                        </h3>

                        <ul className={`size-list-row ${size ? 'block' : 'none'}`}>
                            <li>
                                <Link href="#">
                                    <a>20</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>24</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>36</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>30</a>
                                </Link>
                            </li>
                            <li className="active">
                                <Link href="#">
                                    <a>XS</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>S</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>M</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>L</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>L</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>XL</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div 
                        className={`collapse-widget price-list-widget ${price ? '' : 'open'}`}
                    >
                        <h3 
                            className={`collapse-widget-title ${price ? '' : 'active'}`}
                            onClick={e => this.handleToggle(e, "price")}
                        >
                            Price

                            <i className="fas fa-angle-up"></i>
                        </h3>

                        <ul className={`price-list-row ${price ? 'block' : 'none'}`}>
                            <li>
                                <Link href="#">
                                    <a>$10 - $100</a>
                                </Link>
                            </li>
                            <li className="active">
                                <Link href="#">
                                    <a>$100 - $200</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>$200 - $300</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>$300 - $400</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>$400 - $500</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>$500 - $600</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div 
                        className={`collapse-widget color-list-widget ${color ? '' : 'open'}`}
                    >
                        <h3 
                            className={`collapse-widget-title ${color ? '' : 'active'}`}
                            onClick={e => this.handleToggle(e, "color")}
                        >
                            Color

                            <i className="fas fa-angle-up"></i>
                        </h3>

                        <ul className={`color-list-row ${color ? 'block' : 'none'}`}>
                            <li>
                                <Link href="#">
                                    <a title="Black" className="color-black"></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a title="Red" className="color-red"></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a title="Yellow" className="color-yellow"></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a title="White" className="color-white"></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a title="Blue" className="color-blue"></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a title="Green" className="color-green"></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a title="Yellow Green" className="color-yellowgreen"></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a title="Pink" className="color-pink"></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a title="Violet" className="color-violet"></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a title="Blue Violet" className="color-blueviolet"></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a title="Lime" className="color-lime"></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a title="Plum" className="color-plum"></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a title="Teal" className="color-teal"></a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div 
                        className={`collapse-widget tag-list-widget ${popular ? '' : 'open'}`}
                    >
                        <h3 
                            className={`collapse-widget-title ${popular ? '' : 'active'}`}
                            onClick={e => this.handleToggle(e, "popular")}
                        >
                            Popular Tags

                            <i className="fas fa-angle-up"></i>
                        </h3>

                        <ul className={`tags-list-row ${popular ? 'block' : 'none'}`}>
                            <li>
                                <Link href="#">
                                    <a>Vintage</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Black</a>
                                </Link>
                            </li>
                            <li className="active">
                                <Link href="#">
                                    <a>Discount</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Good</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Jeans</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Summer</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Winter</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="collapse-widget aside-products-widget">
                        <h3 className="aside-widget-title">
                            Popular Products
                        </h3>

                        <div className="aside-single-products">
                            <div className="products-image">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/img2.jpg")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="products-content">
                                <span>
                                    <Link href="#">
                                        <a>Men's</a>
                                    </Link>
                                </span>
                                <h3>
                                    <Link href="#">
                                        <a>Belted chino trousers polo</a>
                                    </Link>
                                </h3>

                                <div className="product-price">
                                    <span className="new-price">$191.00</span>
                                    <span className="old-price">$291.00</span>
                                </div>
                            </div>
                        </div>

                        <div className="aside-single-products">
                            <div className="products-image">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/img3.jpg")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="products-content">
                                <span>
                                    <Link href="#">
                                        <a>Men's</a>
                                    </Link>
                                </span>
                                <h3>
                                    <Link href="#">
                                        <a>Belted chino trousers polo</a>
                                    </Link>
                                </h3>

                                <div className="product-price">
                                    <span className="new-price">$191.00</span>
                                    <span className="old-price">$291.00</span>
                                </div>
                            </div>
                        </div>

                        <div className="aside-single-products">
                            <div className="products-image">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/img4.jpg")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="products-content">
                                <span>
                                    <Link href="#">
                                        <a>Men's</a>
                                    </Link>
                                </span>
                                <h3>
                                    <Link href="#">
                                        <a>Belted chino trousers polo</a>
                                    </Link>
                                </h3>

                                <div className="product-price">
                                    <span className="new-price">$191.00</span>
                                    <span className="old-price">$291.00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="collapse-widget aside-trending-widget">
                        <div className="aside-trending-products">
                            <img src={require("../../images/bestseller-hover-img1.jpg")} alt="image" />

                            <div className="category">
                                <h4>Top Trending</h4>
                                <span>Spring/Summer 2018 Collection</span>
                            </div>
                            <Link href="#">
                                <a></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftSidebar;
