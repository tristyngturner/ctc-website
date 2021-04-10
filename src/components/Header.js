import React, { Component } from 'react';
import smallLogo from '../images/ctc-only.png'


class Header extends Component {

    _handleBurger = (event) => {
        const burger = document.getElementById('burger');
        const navbar = document.getElementById('nav-links');

        burger.classList.toggle('is-active');
        
        navbar.classList.toggle('is-active')
        
    }

    render () {
        return (
        <div>

            <nav className="navbar is-fixed-top black" role="navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#home">
                        <img src={smallLogo} alt=""></img>
                    </a>
                    <a className="navbar-item has-text-light" href="#home">
                        {/*make this the return home link*/}
                        Chisholm Trail Cabling
                    </a>
                    <div className="navbar-burger" id="burger" onClick={this._handleBurger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="navbar-menu black" id="nav-links">
                    <div className="navbar-end">
                                <a className="navbar-item has-text-light" href="#about">
                                    About Us
                                </a>

                                <a className="navbar-item has-text-light" href="#services">
                                    What We Offer
                                </a>

                                <a className="navbar-item has-text-light" href="#quote">
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















