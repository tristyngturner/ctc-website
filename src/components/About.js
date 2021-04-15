import React, { Component } from 'react';
// import largeLogo from '../images/ctc.png'

class About extends Component {
    render () {
        return (
            <div className="hero is-full-height-with-navbar pt-6 pr-3 pb-3 pl-3 mt-6">
                <div className="hero-header">
                    <h1 className="is-size-2 has-text-weight-bold has-text-dark">About Us</h1>
                </div>
                <div className="hero-body grey" id="aboutBody">
                        
                        <p className="is-size-5">Our founder, Garrett Taylor, has always had a passion for tech and all that it entails. 
                        He has worked his way up in his field to become much more than a cable engineer. 
                        When working to build his first custom home, he learned the importance of properly laying out the cabling in your home to suit your the needs of your family.
                        Whether that's for work, gaming, internet, or just general all-encompassing cabling; he can make what you want work in your home.
                        CTC Cabling was built from passion, and we truly enjoy what we do and vow to make your home function to the best of it's ability.</p>
                        {/* <img className="container" src={largeLogo} alt=""></img> */}
                        <hr className="orange"/>
                </div>
            </div>
        )
    }
}

export default About;