import React, { Component } from "react";
import { connect } from 'react-redux';

//Importing Helpers
import randomizer from './../algorithms/helpers/randomizer';


//Improting sorting Algorithms
import bubbleSort from './../algorithms/sortingAlgos/bubbleSort';


//Importing actions
import { updateArray } from './../redux/actions/updateArray';
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
            speed: 200
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
        const newDelay = 550 - Number(event.target.value);
        this.props.updateDelay(newDelay);
        console.log(this.props.delay);
    }

    sortClickHandler(){
        this.props.sort(
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
                <input 
                    className='inputs'
                    type='range' 
                    min='10' 
                    max='50' 
                    defaultValue='20' 
                    onChange={this.arrayLengthHandler}
                    onClick={this.arrayLengthHandler}
                ></input>
                <input 
                className='inputs'
                    type='range' 
                    min='50' 
                    max='500' 
                    defaultValue={this.props.delay} 
                    onChange={this.delayHandler}
                    onClick={this.delayHandler}
                ></input>
                <button 
                    className='btn btn-outline-dark' 
                    onClick={this.randomizeHandler}
                >Randomize</button>
                <button 
                    className='btn btn-outline-dark' 
                    onClick={this.sortClickHandler}
                >Sort</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        arr: state.arrayReducer.arr,
        delay: state.delayReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateArr : (newArr) => {
            dispatch(updateArray({arr:newArr}));
        },

        updateDelay : (value) => {
            dispatch(updateDelay(value));
        },

        sort : (delay, array,
                sortedCandle,
                compareCandle,
                compareCandleOk,
                compareCandleNotOk
            ) => {
            bubbleSort(delay, array, 
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