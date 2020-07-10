import React, { Component } from 'react';
import TopPanel from './TopPanel';
import TopHeaderTwo from './TopHeaderTwo';
import MegaMenuTwo from './MegaMenuTwo';

class NavbarTwo extends Component {
    render() {
        return (
            <React.Fragment>
                <TopPanel />
                
                <div className="header-area">
                    <TopHeaderTwo />
                    <MegaMenuTwo />
                </div>
            </React.Fragment>
        );
    }
}

export default NavbarTwo;
