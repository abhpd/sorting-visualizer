import React, { Component } from "react";

//Importing all components
import ControlWindow from './ControlWindow';
import DisplayWindow from './DisplayWindow';

export default class MainComponent extends Component{
    render(){
        return (
            <div>
                <ControlWindow/>
                <DisplayWindow/>
            </div>
        )
    }
}