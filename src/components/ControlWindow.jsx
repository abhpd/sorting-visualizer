import React, { Component } from "react";
import { connect } from 'react-redux';

//Importing Helpers
import randomizer from './../algorithms/helpers/randomizer';


//Improting sorting Algorithms
import bubbleSort from './../algorithms/sortingAlgos/bubbleSort';


//Importing actions
import { updateArray } from './../redux/actions/updateArray';
import { updateRunning } from '../redux/actions/updateRunning';
import { updateDelay } from './../redux/actions/delay';

import {
    updateSortedCandle,
    updateCompareCandle,
    updateCompareCandleOk,
    updateCompareCandleNotOk
} from "./../redux/actions/bubbleSort"


class ControlWindow extends Component {
    constructor(props){
        super(props);

        this.state = {
            len: props.arr.length,
        }
        this.randomizeHandler = this.randomizeHandler.bind(this);
        this.arrayLengthHandler = this.arrayLengthHandler.bind(this);
        this.sortClickHandler = this.sortClickHandler.bind(this);
        this.delayHandler = this.delayHandler.bind(this);
    }

    randomizeHandler(){
        const newArr = randomizer(this.state.len);
        console.log(newArr);
        this.props.updateArr(newArr);
    }

    arrayLengthHandler(event){
        const newLength = Number(event.target.value);
        this.setState({
            len: newLength,
        });
        console.log(newLength);
        this.randomizeHandler();

        //bubbleSort
        this.props.sortedCandle(newLength);
    }

    delayHandler(event){
        console.log(this.props.delay+"->");
        const newDelay = 600 - Number(event.target.value);
        this.props.updateDelay(newDelay);
        console.log(this.props.delay);
    }

    async sortClickHandler(){
        this.props.sort(
            this.props.updateRunning,
            this.props.delay,
            this.props.arr,
            this.props.sortedCandle,
            this.props.compareCandle,
            this.props.compareCandleOk,
            this.props.compareCandleNotOk
        );
    }

    render() {
        return (
            <div className='ControlWindow'>
                <h6>Size: {this.props.arr.length}</h6>
                <input 
                    className='inputs'
                    type='range' 
                    min='10' 
                    max='50' 
                    defaultValue='20' 
                    onChange={this.arrayLengthHandler}
                    onClick={this.arrayLengthHandler}
                    disabled = {this.props.isAlgoRunning}
                ></input>
                <h6>Speed: {610-Number(this.props.delay)}</h6>
                <input 
                    className='inputs'
                    type='range' 
                    min='0' 
                    max='600' 
                    defaultValue={600-Number(this.props.delay)} //since default is delay not speed
                    onChange={this.delayHandler}
                    onClick={this.delayHandler}
                    disabled = {this.props.isAlgoRunning}
                ></input>
                <button 
                    className='btn btn-outline-dark' 
                    onClick={this.randomizeHandler}
                    disabled = {this.props.isAlgoRunning}
                >Randomize</button>
                <button 
                    className='btn btn-outline-dark' 
                    onClick={this.sortClickHandler}
                    disabled = {this.props.isAlgoRunning}
                >Sort</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        arr: state.arrayReducer.arr,
        delay: state.delayReducer,
        isAlgoRunning: state.arrayReducer.isAlgoRunning,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateArr : (newArr) => {
            dispatch(updateArray({arr:newArr}));
        },

        updateRunning: (payload) => {
            dispatch(updateRunning(payload));
        },

        updateDelay : (value) => {
            dispatch(updateDelay(value));
        },

        sort : (updateRunning, delay, array,
                sortedCandle,
                compareCandle,
                compareCandleOk,
                compareCandleNotOk
            ) => {
            bubbleSort(updateRunning, delay, array, 
                sortedCandle,
                compareCandle,
                compareCandleOk,
                compareCandleNotOk,
                dispatch
            );
        },

        //bubbleSort
        sortedCandle : (value) => {
            dispatch(updateSortedCandle(value));
        },
        compareCandle : (value) => {
            dispatch(updateCompareCandle(value));
        },
        compareCandleOk : (value) => {
            dispatch(updateCompareCandleOk(value));
        },
        compareCandleNotOk : (value) => {
            dispatch(updateCompareCandleNotOk(value));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ControlWindow);