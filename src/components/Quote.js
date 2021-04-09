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
        };
    }

    _handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    _handleChangeArray = (event) => {

        const currentArray = this.state.typeOfCabling

        currentArray.push(event.target.value)

        this.setState({
            [event.target.name]: currentArray
        })
        
    }

    _handleSubmit = () => {
    alert(`Your quote has been submitted! \n 
            Zip Code: ${this.state.zipCode} \n 
            Type of cabling: ${this.state.typeOfCabling} \n 
            No. of cable drops: ${this.state.cableDrops} \n 
            Work to be completed by: ${this.state.dateCompleted} \n
            Type of networking needed: ${this.state.typeOfNetworking} \n
            Type of property: ${this.state.typeOfProperty} \n
            No. of floors: ${this.state.multiFloor}`)
    }

    _hideAlert = () => {

        document.getElementById('quoteForm').style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        console.log("component did mount")
                setTimeout(this._hideAlert(), 3000);
    }
    
    render () {
        return (

            <div className="form container" id="quoteForm">
            <h1 className="is-size-1 has-text-weight-bold">Get a Quote</h1>
            <form>
                <div className ="zipCode">
                    <label for="zipCode">1. Zip Code where work needs to be performed:</label><br/>
                    <br/>
                    <input type="text" id="zipCode" name="zipCode" onChange={this._handleChange}></input>
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
                    <input type="checkbox" id="voice" value="Voice" name="typeOfCabling" ></input>
                    <label for="typeOfCabling3">Voice/Telephone</label><br/>
                    <input type="checkbox" id="corpWireless" value="Commercial_Wireless" name="typeOfCabling" ></input>
                    <label for="typeOfCabling4">Commercial Wireless</label><br/>
                    <input type="checkbox" id="security" value="Security" name="typeOfCabling" ></input>
                    <label for="typeOfCabling5">Security/Surveillance</label><br/>
                    <input type="checkbox" id="notSure" value="Not_sure" name="typeOfCabling" ></input>
                    <label for="typeOfCabling5">Not Sure</label><br/>
                    <input type="checkbox" id="other" value="Other" name="typeOfCabling" ></input>
                    <label for="typeOfCabling6">Other</label><br/>
                    {/* <input type="text" id="otherText"></input> */}
                </div>

                    <br/>

                <div className ="cableDrops">
                    <label for="cableDrops">3. Total # of cable drops (including data and voice cabling):</label><br/>
                    <br/>
                    <input type="text" id="cableDrops" name="cableDrops" onChange={this._handleChange}></input>
                </div>

                    <br/>

                <div className ="dateCompleted">
                    <label for="dateCompleted">4. When does work need to be complted? (Can give date or number of months):</label><br/>
                    <br/>
                    <input type="text" id="dateCompleted" name="dateCompleted" onChange={this._handleChange}></input>
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

                        <br/>
                
                <div>
                <p>7. Will mulitple floors within office(s) need to be cabled?</p>
                    <input type="radio" id="oneFloor" name="multiFloor" value="oneFloor" onChange={this._handleChange}></input>
                    <label for="oneFloor">No - Only one floor needs to be cabled</label><br/>
                    <input type="radio" id="multipleFloors" name="multiFloor" value="multipleFloors" onChange={this._handleChange}></input>
                    <label for="multipleFloors">Yes - multiple floors will need to be connected</label><br/>
                </div>

                        <br/>

                <div>
                    <button onClick={this._handleSubmit}>Submit</button>
                    
                    
                    
                </div>
            </form>
            </div>
        )
    }
}

export default Quote;


// {/* {
//                         this.state.showAlert ? */}
//                         <Alert showAlert={this.state.showAlert} zipCode={this.state.zipCode} onHide={this._hideAlert}/>
//                     {/* } */}