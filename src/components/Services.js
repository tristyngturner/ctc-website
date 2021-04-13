import React, { Component } from 'react';
import cable from '../images/cable.png';
import cable2 from '../images/cable2.png';
import ethernet from '../images/ethernet.png';
import usb from '../images/usb.png';


class Services extends Component {
    render () {
        return (
            <div>
                <div className="hero is-full-height pt-6 pr-3 pb-3 pl-3 mt-6">
                    <div className="hero-header">
                        <h1 className="is-size-2 has-text-weight-bold has-text-dark">What We Offer</h1>
                        
                    </div>
                    
                    <div className="hero-body grey" id="servicesBody">
                        {/* <h1 className="is-size-4 has-text-weight-bold has-text-centered">Our Core Services</h1> */}
                        <p className="py-5 pt-3 pb-3 pr-3 pl-3 has-text-centered">Network Cabling</p>
                            <div className="container has-image-centered">
                                <img className="icon" src={ethernet} alt=""></img>
                            </div>
                        <p className="py-5 px-3 has-text-centered">Fiber Optice Cabling</p>
                            <div className="container has-image-centered">
                                <img className="icon" src={cable} alt=""></img>
                            </div>
                        <p className="py-5 px-3 has-text-centered">Video Surveillance Solutions</p>
                            <div className="container has-image-centered">
                                <img className="icon" src={usb} alt=""></img>
                            </div>
                        <p className="py-5 px-3 has-text-centered">Wireless Network Installation</p>
                        <div className="container has-image-centered">
                            <img className="icon" src={cable2} alt=""></img>
                        </div>
                        <p className="py-5 pt-3 pb-3 pr-3 pl-3 has-text-centered">Residential Services</p>
                        <hr className="orange"/>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default Services;


