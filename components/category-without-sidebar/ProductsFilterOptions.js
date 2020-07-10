import React, { Component } from 'react';
import Link from 'next/link';
import LeftFilter from '../Modal/LeftFilter';

class ProductsFilterOptions extends Component {

    state = {
        display: false
    };

    handleGrid = (evt, e) => {
        this.props.onClick(e);
        let i, aLinks;

        aLinks = document.getElementsByTagName("a");
        for (i = 0; i < aLinks.length; i++) {
            aLinks[i].className = aLinks[i].className.replace("active", "");
        }

        evt.currentTarget.className += " active";
    }

    handleLeftFilter = () => {
        this.setState( prevState => {
            return {
                display: !prevState.display
            };
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="products-filter-options">
                    <div className="row align-items-center">
                        <div className="col d-flex">
                            <span>
                                <Link href="#">
                                    <a 
                                        onClick={e => {
                                            e.preventDefault();
                                            this.handleLeftFilter()
                                        }}
                                    >
                                        <i className="fas fa-filter"></i> Filter
                                    </a>
                                </Link>
                            </span>

                            <span>View:</span>

                            <div className="view-list-row">
                                <div className="view-column">
                                    <Link href="#">
                                        <a 
                                            className="icon-view-two"
                                            onClick={e => {
                                                e.preventDefault();
                                                this.handleGrid(e, "products-col-two")
                                            }}
                                        >
                                            <span></span>
                                            <span></span>
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a 
                                            className="icon-view-three"
                                            onClick={e => {
                                                e.preventDefault();
                                                this.handleGrid(e, "products-col-three")
                                            }}
                                        >
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a 
                                            className="icon-view-four active"
                                            onClick={e => {
                                                e.preventDefault();
                                                this.handleGrid(e, "products-col-four")
                                            }}
                                        >
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a 
                                            className="view-grid-switch"
                                            onClick={e => {
                                                e.preventDefault();
                                                this.handleGrid(e, "products-row-view")
                                            }}
                                        >
                                            <span></span>
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col d-flex justify-content-center">
                            <p>Showing 22 of 102 results</p>
                        </div>

                        <div className="col d-flex">
                            <span>Show:</span>

                            <div className="show-products-number">
                                <select>
                                    <option value="1">22</option>
                                    <option value="2">32</option>
                                    <option value="3">42</option>
                                    <option value="4">52</option>
                                    <option value="5">62</option>
                                </select>
                            </div>

                            <span>Sort:</span>

                            <div className="products-ordering-list">
                                <select>
                                    <option value="1">Featured</option>
                                    <option value="2">Best Selling</option>
                                    <option value="3">Price Ascending</option>
                                    <option value="4">Price Descending</option>
                                    <option value="5">Date Ascending</option>
                                    <option value="6">Date Descending</option>
                                    <option value="7">Name Ascending</option>
                                    <option value="8">Name Descending</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.display ? <LeftFilter onClick={this.handleLeftFilter} /> : ''}
            </React.Fragment>
        );
    }
}

export default ProductsFilterOptions;
