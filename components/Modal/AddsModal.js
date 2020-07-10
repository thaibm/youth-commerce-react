import React, { Component } from 'react';
import Link from 'next/link';

class AddsModal extends Component {
    _isMounted = false;
    state = {
        open: false
    };

    componentDidMount(){
        this.setState({
            open: true
        });
    }

    closeModal = (e) => {
        this._isMounted = true;
        e.preventDefault();
        this.setState({
            open: false
        });
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    render() {
        let { open } = this.state;
        return (
            <div className={`bts-popup ${open ? 'is-visible' : ''}`} role="alert">
                <div className="bts-popup-container">
                    <h3>Free Shipping</h3>
                    <p>Worldwide free shipping for all members. To become a member subscribe for our <strong>free offers / discount newsletter.</strong></p>

                    <form>
                        <input type="email" className="form-control" placeholder="mail@name.com" name="EMAIL" required={true} />
                        <button type="submit"><i className="far fa-paper-plane"></i></button>
                    </form>

                    <ul>
                        <li>
                            <Link href="#">
                                <a className="facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="twitter">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="linkdein">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </Link>
                        </li>
                    </ul>

                    <div className="img-box">
                        <img src={require("../../images/women.png")} alt="image" />
                        <img src={require("../../images/women2.png")} alt="image" />
                    </div>

                    <Link href="#">
                        <a onClick={this.closeModal} className="bts-popup-close"></a>
                    </Link>
                </div>
            </div>
        );
    }
}

export default AddsModal;
