import React, { Component } from 'react';

class Alert extends Component {

    // componentDidUpdate (prevProps, prevState, snapshot) {
    //     console.log("component did mount")
    //     console.log(this.props.showAlert)
    //             setTimeout(this.props.onHide(), 3000);
    // }

        render () {
            if (this.props.showAlert === true ) {
                console.log('test')
            return (
               
                alert(`Your quote has been submitted! \n
                Zip Code: ${this.props.zipCode} \n
                Type of cabling: ${this.props.typeOfCabling} \n
                No. of cable drops: ${this.props.cableDrops} \n
                Work to be completed by: ${this.props.dateCompleted} \n
                Type of networking needed: ${this.props.typeOfNetworking} \n
                Type of property: ${this.props.typeOfProperty} \n
                No. of floors: ${this.props.multiFloor}`)
             
                    )
                }
        return (
            <div></div>
            );
        }
    }

export default Alert;


// let zipCode = this.state.zipCode;
// let typeOfCabling = this.state.typeOfCabling;
// let cableDrops = this.state.cableDrops;
// let dateCompleted = this.state.dateCompleted;
// let typeOfNetworking = this.state.typeOfNetworking;
// let typeOfProperty = this.state.typeOfProperty;
// let multiFloor = this.state.multiFloor; 