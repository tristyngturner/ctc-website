import React, { Component } from 'react';
import largeLogo from '../images/ctc.png'

class About extends Component {
    render () {
        return (
            <div className="hero is-fullheight">
                <div className="hero-body columns">
                        <h1 className="is-size-1 has-text-weight-bold">About Us</h1>
                        <p className="is-size-5">Our founder, Garrett Taylor, has always had a passion for tech and all that it entails. 
                        He has worked his way up in his field to become much more than a cable engineer. 
                        When working to build his first custom home, he learned the importance of properly laying out the cabling in your home to suit your the needs of your family.
                        Whether that's for work, gaming, internet, or just general all-encompassing cabling; he can make what you want work in your home.
                        CTC Cabling was built from passion, and we truly enjoy what we do and vow will make your home function to the best of it's ability.</p>
                        <img className="container" src={largeLogo}></img>
                </div>
            </div>
        )
    }
}

export default About;