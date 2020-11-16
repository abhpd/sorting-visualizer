import React, { Component } from 'react';
import DisplayWindow, {} from "./DisplayWindow";

class ControlWindow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            values: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const values = new Array(50);

        for (let index = 0; index < values.length; index++) {
            values[index] = Math.floor(Math.random() * 500) + 50;
        }
        this.setState({ values });
    }

    bubbleSort_timed(){

    }

    render(){
        return (
            <div>
                <div className="ControlWindow">
                    <button
                        className="btn btn-outline-dark"
                        onClick={() => this.resetArray()}
                    >
                        Randomize
                    </button>
                    <button
                        className="btn btn-outline-dark"
                        onClick={()=> this.bubbleSort_timed()}
                    >
                        Sort
                    </button>
                </div>
                <DisplayWindow values = {this.state.values} />
            </div>
        );
    }
};

export default ControlWindow;