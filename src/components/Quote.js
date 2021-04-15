import React, { Component } from 'react';
// import Alert from './Alert';



class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zipCode: "",
            typeOfCabling: [],
            cableDrops: "",
            dateCompleted: "",
            typeOfNetworking: "",
            typeOfProperty: "",
            multiFloor: "",
                zipCodeError: "",
                typeOfCablingError: "",
                cableDropsError: "",
                dateCompletedError: "",
                typeOfNetworkingError: "",
                typeOfPropertyError: "",
                multiFloorError: ""
    }
}

    _handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
            
    _handleChangeArray = (event) => {
        
        const currentArray = this.state.typeOfCabling;
        
        if (document.querySelector(`#${event.target.id}:checked`) !== null) {
            currentArray.push(event.target.value)
        } else {
            for (let i = 0; currentArray.length > i; i++) {
                if(document.querySelector(`#${event.target.id}:checked`) === null && currentArray.includes(event.target.value)) {
                    const index = currentArray.indexOf(event.target.value)
                    if(index > -1) {
                    currentArray.splice(index, 1)
                }
            }
        }
    }
    

        this.setState({
            [event.target.name]: currentArray
    });

}

    _validate = () => {
        
        let zipCodeError = '';
        let typeOfCablingError = '';
        let cableDropsError = '';
        let dateCompletedError = '';
        let typeOfNetworkingError = '';
        let typeOfPropertyError = '';
        let multiFloorError = '';

        if(!this.state.zipCode) {
            zipCodeError = 'must enter Zip Code';
        }

        if (!this.state.typeOfCabling) {
            typeOfCablingError = 'must choose type of cabling';
        } 
        
        if (!this.state.cableDrops) {
            cableDropsError = 'provide a number of cable drops, if you do not know, type "unsure"'
        } 
        
        if (!this.state.dateCompleted) {
            dateCompletedError = 'when would this work need to be completed? if you do not know, type "unsure"'
        } 
        
        if (!this.state.typeOfNetworking) {
            typeOfNetworkingError = 'choose a type of networking'
        } 
        
        if (!this.state.typeOfProperty) {
            typeOfPropertyError = 'must choose type of property'
        } 
        
        if (!this.state.multiFloor) {
            multiFloorError = 'will work be done on one or multiple floors?'
        } 
        
        if (zipCodeError.length > 0 || 
            typeOfCablingError.length > 0 || 
            cableDropsError.length > 0 || 
            dateCompletedError.length > 0 || 
            typeOfNetworkingError.length > 0 || 
            typeOfPropertyError.length > 0 ||
            multiFloorError.length > 0) {
            this.setState({
                zipCodeError, 
                typeOfCablingError, 
                cableDropsError, 
                dateCompletedError,
                typeOfNetworkingError,
                typeOfPropertyError,
                multiFloorError
            })
            return false;
        }
        return true;
    };

    _handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this._validate();
        if (isValid) {
            // console.log(this.state)
            alert(`Your quote has been submitted! \n 
            Zip Code: ${this.state.zipCode} \n 
            Type of cabling: ${this.state.typeOfCabling} \n 
            No. of cable drops: ${this.state.cableDrops} \n 
            Work to be completed by: ${this.state.dateCompleted} \n
            Type of networking needed: ${this.state.typeOfNetworking} \n
            Type of property: ${this.state.typeOfProperty} \n
            No. of floors: ${this.state.multiFloor}`);
        } else {
            alert('Please complete entire form')
        }
    };

    _lifeCycle = () => {

        document.getElementById('quoteForm').style.backgroundColor = '#dad9d9';

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("component did mount");
                setTimeout(this._lifeCycle(), 3000);
    }
    
    render () {
        return (

        <div className="hero is-full-height form pt-6 pr-3 pb-3 pl-3 mt-6">
            <div className="hero-header">
                <h1 className="is-size-2 has-text-weight-bold has-text-dark">Get a Quote</h1>
            </div>
            <div className="hero-body is-rounded" id="quoteForm">
            <form>
                <div className ="zipCode">
                    <label for="zipCode">1. Zip Code where work needs to be performed:</label><br/>
                    <br/>
                    <input type="text" id="zipCode" name="zipCode" onChange={this._handleChange}></input>
                    <div style={{fontSize: 12, color: "red"}}>
                        {this.state.zipCodeError}
                    </div>
                    <br/>
                </div>

                <div className="typeOfCabling">
                    <p>2. What type of cabling do you need?</p>
                    <input type="checkbox" id="CAT5" name="typeOfCabling" value="CAT5" onChange={this._handleChangeArray}></input>
                    <label for="typeOfCabling0">CAT5 / CAT5E</label><br/>
                    <input type="checkbox" id="CAT6" name="typeOfCabling" value="CAT6" onChange={this._handleChangeArray}></input>
                    <label for="typeOfCabling1">CAT6</label><br/>
                    <input type="checkbox" id="fiberOptic" value="Fiber_Optic" name="typeOfCabling" onChange={this._handleChangeArray}></input>
                    <label for="typeOfCabling2">Fiber Optic</label><br/>
                    <input type="checkbox" id="voice" value="Voice" name="typeOfCabling" onChange={this._handleChangeArray}></input>
                    <label for="typeOfCabling3">Voice/Telephone</label><br/>
                    <input type="checkbox" id="corpWireless" value="Commercial_Wireless" name="typeOfCabling" onChange={this._handleChangeArray}></input>
                    <label for="typeOfCabling4">Commercial Wireless</label><br/>
                    <input type="checkbox" id="security" value="Security" name="typeOfCabling" onChange={this._handleChangeArray}></input>
                    <label for="typeOfCabling5">Security/Surveillance</label><br/>
                    <input type="checkbox" id="notSure" value="Not_sure" name="typeOfCabling" onChange={this._handleChangeArray}></input>
                    <label for="typeOfCabling5">Not Sure</label><br/>
                    <input type="checkbox" id="other" value="Other" name="typeOfCabling" onChange={this._handleChangeArray}></input>
                    <label for="typeOfCabling6">Other</label><br/>
                    {/* <input type="text" id="otherText"></input> */}
                </div>
                        <div style={{fontSize: 12, color: "red"}}>
                            {this.state.typeOfCablingError}
                        </div>
                    <br/>

                <div className ="cableDrops">
                    <label for="cableDrops">3. Total # of cable drops (including data and voice cabling):</label><br/>
                    <br/>
                    <input type="text" id="cableDrops" name="cableDrops" onChange={this._handleChange}></input>
                </div>
                        <div style={{fontSize: 12, color: "red"}}>
                            {this.state.cableDropsError}
                        </div>
                    <br/>

                <div className ="dateCompleted">
                    <label for="dateCompleted">4. When does work need to be completed? (Can give date or number of months):</label><br/>
                    <br/>
                    <input type="text" id="dateCompleted" name="dateCompleted" onChange={this._handleChange}></input>
                </div>
                        <div style={{fontSize: 12, color: "red"}}>
                            {this.state.dateCompletedError}
                        </div>
                    <br/>

                <div>
                    <p>5. Type of network connection(s) needed:</p>
                    <input type="radio" id="dataPhone" name="typeOfNetworking" value="dataPhone" onChange={this._handleChange}></input>
                    <label for="dataPhone">Both Data and Phone</label><br/>
                    <input type="radio" id="data" name="typeOfNetworking" value="data" onChange={this._handleChange}></input>
                    <label for="data">Data Only</label><br/>
                    <input type="radio" id="phone" name="typeOfNetworking" value="phone" onChange={this._handleChange}></input>
                    <label for="phone">Phone Only</label><br/>
                    <input type="radio" id="unknown" name="typeOfNetworking" value="unknown" onChange={this._handleChange}></input>
                    <label for="unknown">Not Sure</label>
                </div>
                        <div style={{fontSize: 12, color: "red"}}>
                            {this.state.typeOfNetworkingError}
                        </div>
                    <br/>

                <div>
                <p>6. Type of construction where work is needed:</p>
                    <input type="radio" id="office" name="typeOfProperty" value="office" onChange={this._handleChange}></input>
                    <label for="office">Commercial Office Space</label><br/>
                    <input type="radio" id="warehouse" name="typeOfProperty" value="warehouse" onChange={this._handleChange}></input>
                    <label for="warehouse">Warehouse</label><br/>
                    <input type="radio" id="newConstruction" name="typeOfProperty" value="newConstruction" onChange={this._handleChange}></input>
                    <label for="newConstruction">New Construction or Multi-Dwelling</label><br/>
                    <input type="radio" id="outside" name="typeOfProperty" value="outside" onChange={this._handleChange}></input>
                    <label for="outside">Outside (moble office/trailers, external cabling, etc.</label>
                </div>
                        <div style={{fontSize: 12, color: "red"}}>
                            {this.state.typeOfPropertyError}
                        </div>
                        <br/>
                
                <div>
                <p>7. Will mulitple floors within office(s) need to be cabled?</p>
                    <input type="radio" id="oneFloor" name="multiFloor" value="oneFloor" onChange={this._handleChange}></input>
                    <label for="oneFloor">No - Only one floor needs to be cabled</label><br/>
                    <input type="radio" id="multipleFloors" name="multiFloor" value="multipleFloors" onChange={this._handleChange}></input>
                    <label for="multipleFloors">Yes - multiple floors will need to be connected</label><br/>
                </div>
                        <div style={{fontSize: 12, color: "red"}}>
                            {this.state.multiFloorError}
                        </div>
                        <br/>

                <div>
                    <button onClick={this._handleSubmit}>Submit</button>
                    
                    
                    
                </div>
                <hr className="orange"/>
                
            </form>
            </div>
            </div>
        )
    }
}

export default Quote;
