import React, { Component } from "react";
import { connect } from "react-redux";

class DisplayWindow extends Component {
    constructor(props){
        super(props);

        this.color = this.color.bind(this);
    }

    color(indx) {
        switch(this.props.currentAlgo){

            case "bubbleSort":
                if (indx >= this.props.bubbleSort.sortedCandle) {
                    return "blue";
                } else if (
                    indx === this.props.bubbleSort.compareCandleNotOk[0] ||
                    indx === this.props.bubbleSort.compareCandleNotOk[1]
                ) {
                    return "red";
                } else if (indx === this.props.bubbleSort.compareCandleOk[0] || indx === this.props.bubbleSort.compareCandleOk[1]) {
                    return "green";
                } else if (indx === this.props.bubbleSort.compareCandle[0] || indx === this.props.bubbleSort.compareCandle[1]) {
                    return "DodgerBlue";
                } else return "DarkSlateGray";
            
            case "selectionSort":
                if (indx <= this.props.selectionSort.sortedCandle) {
                    return "blue";
                } else if (
                    indx === this.props.selectionSort.compareCandleNotOk[0] ||
                    indx === this.props.selectionSort.compareCandleNotOk[1]
                ) {
                    return "red";
                } else if (indx === this.props.selectionSort.compareCandleOk[0] || indx === this.props.selectionSort.compareCandleOk[1]) {
                    return "green";
                } else if (indx === this.props.selectionSort.compareCandle[0] || indx === this.props.selectionSort.compareCandle[1]) {
                    return "DodgerBlue";
                } else return "DarkSlateGray";

            case "insertionSort":
                if (indx === this.props.insertionSort.compareCandleOk[0] || indx === this.props.insertionSort.compareCandleOk[1]) {
                    return "green";
                } else if (
                    indx === this.props.insertionSort.compareCandleNotOk[0] ||
                    indx === this.props.insertionSort.compareCandleNotOk[1]
                ){
                    return "red";
                } else if (indx <= this.props.insertionSort.sortedCandle) {
                    return "blue";
                } else if (indx === this.props.insertionSort.compareCandle[0] || indx === this.props.insertionSort.compareCandle[1]) {
                    return "DodgerBlue";
                } else return "DarkSlateGray";

            case "mergeSort":
                if (indx === this.props.mergeSort.compareCandleOk[0] || indx === this.props.mergeSort.compareCandleOk[1]) {
                    return "green";
                } else if (
                    indx === this.props.mergeSort.compareCandleNotOk[0] ||
                    indx === this.props.mergeSort.compareCandleNotOk[1]
                ){
                    return "red";
                } else if (indx <= this.props.mergeSort.sortedCandle) {
                    return "blue";
                } else if (indx === this.props.mergeSort.compareCandle[0] || indx === this.props.mergeSort.compareCandle[1]) {
                    return "DodgerBlue";
                } else return "DarkSlateGray";

            case "quickSort":
                if (indx === this.props.quickSort.compareCandleOk[0] || indx === this.props.quickSort.compareCandleOk[1]) {
                    return "green";
                } else if (
                    indx === this.props.quickSort.compareCandleNotOk[0] ||
                    indx === this.props.quickSort.compareCandleNotOk[1]
                ){
                    return "red";
                } else if (indx <= this.props.quickSort.sortedCandle) {
                    return "blue";
                } else if (indx === this.props.quickSort.compareCandle[0] || indx === this.props.quickSort.compareCandle[1]) {
                    return "DodgerBlue";
                } else return "DarkSlateGray";

            default:
                return "DarkSlateGray";
        }
    }

    render() {
        const candleArr = this.props.arr.map((element,indx)=>{
            const s = {
                height: `${element}px`,
                width: `${500 / this.props.arr.length}px`,
                backgroundColor: `${this.color(indx)}`,
            }
            return (
                <div className='candle' style={s} key={indx}></div>
            )
        })
        return (
            <div className="DisplayWindow">
                <div className='candles'>
                    {candleArr}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        arr: state.arrayReducer.arr,
        currentAlgo: state.arrayReducer.currentAlgo,

        bubbleSort: {
            compareCandle: state.bubbleReducer.compareCandle,
            compareCandleOk: state.bubbleReducer.compareCandleOk,
            compareCandleNotOk: state.bubbleReducer.compareCandleNotOk,
            sortedCandle: state.bubbleReducer.sortedCandle,
        },

        selectionSort: {
            compareCandle: state.selectionReducer.compareCandle,
            compareCandleOk: state.selectionReducer.compareCandleOk,
            compareCandleNotOk: state.selectionReducer.compareCandleNotOk,
            sortedCandle: state.selectionReducer.sortedCandle,
        },

        insertionSort: {
            compareCandle: state.insertionReducer.compareCandle,
            compareCandleOk: state.insertionReducer.compareCandleOk,
            compareCandleNotOk: state.insertionReducer.compareCandleNotOk,
            sortedCandle: state.insertionReducer.sortedCandle,
        },

        mergeSort: {
            compareCandle: state.mergeReducer.compareCandle,
            compareCandleOk: state.mergeReducer.compareCandleOk,
            compareCandleNotOk: state.mergeReducer.compareCandleNotOk,
            sortedCandle: state.mergeReducer.sortedCandle,
        },

        quickSort: {
            compareCandle: state.quickReducer.compareCandle,
            compareCandleOk: state.quickReducer.compareCandleOk,
            compareCandleNotOk: state.quickReducer.compareCandleNotOk,
            sortedCandle: state.quickReducer.sortedCandle,
        }
    }
}

export default connect(mapStateToProps,null)(DisplayWindow);