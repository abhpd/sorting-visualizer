import React, { Component } from "react";
import { connect } from "react-redux";

class DisplayWindow extends Component {
    constructor(props){
        super(props);

        this.color = this.color.bind(this);
    }

    color(indx) {
        // Set Colors
        if (indx >= this.props.sortedCandle) {
            return "blue";
        } else if (
            indx === this.props.compareCandleNotOk[0] ||
            indx === this.props.compareCandleNotOk[1]
        ) {
            return "red";
        } else if (indx === this.props.compareCandleOk[0] || indx === this.props.compareCandleOk[1]) {
            return "green";
        } else if (indx === this.props.compareCandle[0] || indx === this.props.compareCandle[1]) {
            return "DodgerBlue";
        } else return "DarkSlateGray";
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

        //bubbleSort
        compareCandle: state.bubbleReducer.compareCandle,
        compareCandleOk: state.bubbleReducer.compareCandleOk,
        compareCandleNotOk: state.bubbleReducer.compareCandleNotOk,
        sortedCandle: state.bubbleReducer.sortedCandle,
    }
}

export default connect(mapStateToProps,null)(DisplayWindow);