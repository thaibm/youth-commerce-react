import React, { Component } from 'react';
import Link from 'next/link';

class Breadcrumb extends Component {
    render() {
        return (
            <div className="page-title-area">
                <div className="container">
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>{this.props.title}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;
