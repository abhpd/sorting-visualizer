import React, { Component } from "react";
import { connect } from 'react-redux';

//Importing Helpers
import randomizer from './../algorithms/helpers/randomizer';


//Improting sorting Algorithms
import bubbleSort from './../algorithms/sortingAlgos/bubbleSort';
import { bubbleSortDispatcher } from "./../redux/dispatchers/bubbleSortDispatcher";

import selectionSort from './../algorithms/sortingAlgos/selectionSort';
import { selectionSortDispatcher } from "./../redux/dispatchers/selectionSortDispatcher";

import insertionSort from './../algorithms/sortingAlgos/insertionSort';
import { insertionSortDispatcher } from "./../redux/dispatchers/insertionSortDispatcher";

import mergeSort from './../algorithms/sortingAlgos/mergeSort';
import { mergeSortDispatcher } from './../redux/dispatchers/mergeSortDispatcher';

import quickSort from './../algorithms/sortingAlgos/quickSort';
import { quickSortDispatcher } from './../redux/dispatchers/quickSortDispatcher';


//Importing actions
import { updateArray } from './../redux/actions/updateArray';
import { updateRunning } from '../redux/actions/updateRunning';
import { updateDelay } from './../redux/actions/delay';
import { updateAlgo } from './../redux/actions/updateAlgo';


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
        this.handleAlgoSelect = this.handleAlgoSelect.bind(this);
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

        //bubbleSort sorted color hardcode
        if(this.props.currentAlgo==="bubbleSort"){
            this.props.bubbleSort.sortedCandle(newLength);
        } else {
            this.props.selectionSort.sortedCandle(-1);
        }
        // this.props.bubbleSort.sortedCandle(newLength);
    }

    delayHandler(event){
        console.log(this.props.delay+"->");
        const newDelay = 600 - Number(event.target.value);
        this.props.updateDelay(newDelay);
        console.log(this.props.delay);
    }

    handleAlgoSelect(event){
        this.props.updateAlgo(event.target.value);
    }

    async sortClickHandler(){
        switch(this.props.currentAlgo){
            case "bubbleSort":
                this.props.runBubbleSort(
                    this.props.updateRunning,
                    this.props.delay,
                    this.props.arr,
                    this.props.bubbleSort.sortedCandle,
                    this.props.bubbleSort.compareCandle,
                    this.props.bubbleSort.compareCandleOk,
                    this.props.bubbleSort.compareCandleNotOk
                );
            break;
            case "selectionSort":
                this.props.runSelectionSort(
                    this.props.updateRunning,
                    this.props.delay,
                    this.props.arr,
                    this.props.selectionSort.sortedCandle,
                    this.props.selectionSort.compareCandle,
                    this.props.selectionSort.compareCandleOk,
                    this.props.selectionSort.compareCandleNotOk
                );
            break;
            case "insertionSort":
                this.props.runInsertionSort(
                    this.props.updateRunning,
                    this.props.delay,
                    this.props.arr,
                    this.props.insertionSort.sortedCandle,
                    this.props.insertionSort.compareCandle,
                    this.props.insertionSort.compareCandleOk,
                    this.props.insertionSort.compareCandleNotOk
                );
            break;
            case "mergeSort":
                this.props.runMergeSort(
                    this.props.updateRunning,
                    this.props.delay,
                    this.props.arr,
                    this.props.mergeSort.sortedCandle,
                    this.props.mergeSort.compareCandle,
                    this.props.mergeSort.compareCandleOk,
                    this.props.mergeSort.compareCandleNotOk
                );
            break;
            case "quickSort":
                this.props.runQuickSort(
                    this.props.updateRunning,
                    this.props.delay,
                    this.props.arr,
                    this.props.quickSort.sortedCandle,
                    this.props.quickSort.compareCandle,
                    this.props.quickSort.compareCandleOk,
                    this.props.quickSort.compareCandleNotOk,
                    this.props.quickSort.currentPivot,
                );
            break;
            default:
                console.log("Algo name error");
        }
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

                <select name="Algorithm" disabled={this.props.isAlgoRunning} onChange={this.handleAlgoSelect}>
                    <option value="none" selected disabled hidden>Choose Algorithm</option>
                    <option value="bubbleSort">Bubble Sort</option>
                    <option value="selectionSort">Selection Sort</option>
                    <option value="insertionSort">Insertion Sort</option>
                    <option value="mergeSort">Merge Sort</option>
                    <option value="quickSort">Quick Sort</option>
                </select>

                <button 
                    className='btn btn-outline-dark' 
                    onClick={this.sortClickHandler}
                    disabled = {this.props.isAlgoRunning||(this.props.currentAlgo==="none")}
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
        currentAlgo: state.arrayReducer.currentAlgo
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

        updateAlgo : (algo) => {
            dispatch(updateAlgo(algo));
        },

        //Bubble Sort
        runBubbleSort : (updateRunning, delay, array,
                sortedCandle,
                compareCandle,
                compareCandleOk,
                compareCandleNotOk
            ) => {
            bubbleSort(updateRunning, delay, array, dispatch,
                sortedCandle,
                compareCandle,
                compareCandleOk,
                compareCandleNotOk
            );
        },
        bubbleSort: bubbleSortDispatcher(dispatch),

        //Selection Sort
        runSelectionSort : (updateRunning, delay, array,
                sortedCandle,
                compareCandle,
                compareCandleOk,
                compareCandleNotOk
            ) => {
            selectionSort(updateRunning, delay, array, dispatch,
                sortedCandle,
                compareCandle,
                compareCandleOk,
                compareCandleNotOk
            );
        },
        selectionSort: selectionSortDispatcher(dispatch),

        //Insertion Sort
        runInsertionSort : (updateRunning, delay, array,
                sortedCandle,
                compareCandle,
                compareCandleOk,
                compareCandleNotOk
            ) => {
            insertionSort(updateRunning, delay, array, dispatch,
                sortedCandle,
                compareCandle,
                compareCandleOk,
                compareCandleNotOk
            );
        },
        insertionSort: insertionSortDispatcher(dispatch),

        //Merge Sort
        runMergeSort : (updateRunning, delay, array,
                sortedCandle,
                compareCandle,
                compareCandleOk,
                compareCandleNotOk
            ) => {
            mergeSort(updateRunning, delay, array, dispatch,
                sortedCandle,
                compareCandle,
                compareCandleOk,
                compareCandleNotOk
            );
        },
        mergeSort: mergeSortDispatcher(dispatch),

        //Quick Sort
        runQuickSort : (updateRunning, delay, array,
                sortedCandle,
                compareCandle,
                compareCandleOk,
                compareCandleNotOk,
                currentPivot
            ) => {
            quickSort(updateRunning, delay, array, dispatch,
                sortedCandle,
                compareCandle,
                compareCandleOk,
                compareCandleNotOk,
                currentPivot
            );
        },
        quickSort: quickSortDispatcher(dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ControlWindow);