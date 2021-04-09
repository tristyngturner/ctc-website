import React, { Component } from 'react';
import smallLogo from '../images/ctc-only.png'


class Header extends Component {

    _navbarBurger = (event) => {
        event.target.classList.add('is-active');
    }

    render () {
        return (
        <div>

            <nav className="navbar black">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <img src={smallLogo}></img>
                    </a>
                    <a className="navbar-item">
                        {/*make this the return home link*/}
                        Chisholm Trail Cabling
                    </a>
                    <a className="navbar-burger" id="burger" onClick={this._navbarBurger}>
                        <span>
                                <a className="navbar-item" href="#about">
                                    About Us
                                </a>
                        </span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div className="navbar-menu" id="nav-links">
                    <div className="navbar-end">
                                <a className="navbar-item" href="#about">
                                    About Us
                                </a>

                                <a className="navbar-item" href="#services">
                                    What We Offer
                                </a>

                                <a className="navbar-item" href="#quote">
                                    Get A Quote
                                </a>
                    </div>
                </div>
            </nav>







            
        </div>
        )
    }
}

export default Header;















