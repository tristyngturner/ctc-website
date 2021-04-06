import React, { Component } from 'react';
import logo from '../images/ctc.png'

class Header extends Component {

    // burgerIcon = document.querySelector('#burger');
    // navbarMenu = document.querySelector('#nav-links');


    // _navbarBurger = (event) => {
    //     navbarMenu.classList.toggle('is-active');
    // }

    render () {
        return (
        <div>

            <nav class="navbar has-shadow is-">
                <div class="navbar-brand">
                    <a class="navbar-item">
                        <img src={logo}></img>
                    </a>
                    <a class="navbar-item">
                        {/*make this the return home link*/}
                        Chisholm Trail Cabling
                    </a>
                    <a class="navbar-burger" id="burger" onClick={this._navbarBurger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div class="navbar-menu" id="nav-links">
                    <div class="navbar-end">
                                <a class="navbar-item" href="#about">
                                    About Us
                                </a>

                                <a class="navbar-item" href="#services">
                                    What We Offer
                                </a>

                                <a class="navbar-item" href="#quote">
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















{/* <div class="py-6 header">
                
                <nav class="navbar">
                    
                <ul>
                    <img src="./images/ctc.png" id="logo" alt=""></img>  
                    <li class="company">Chisholm Trail Cabling</li>
                    
                    <li>
                    <a href="#quote">Get a Quote</a>
                    </li>
                    <li>
                    <a href="#services">What we offer</a>
                    </li>
                    <li>
                    <a href="#about">About Us</a>
                    </li>
                </ul>
                </nav>
           
            </div> */}