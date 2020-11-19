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
        }
    }
}

export default connect(mapStateToProps,null)(DisplayWindow);