import React, { Component } from 'react';
import largeLogo from '../images/ctc.png'


class Home extends Component {
    render () {
        return (
            <div>
            <div className="container is-centered pt-6 pr-3 pb-3 pl-3 mt-6" id="home">
                <h1 className="is-size-2 has-text-weight-bold has-text-centered">Welcome to CTC</h1>
                <h1 className="is-size-4 has-text-weight-bold has-text-centered">Network Data, Structured Cable and Fiber Cable Installation In Fort Worth and Surrounding Areas.</h1>
                <img src={largeLogo} alt=""></img>
                
                
            </div>
            </div>
        )
    }
}

export default Home;