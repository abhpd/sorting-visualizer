import React, { useState } from "react";

const DisplayWindow = () => {
    const temp = new Array(20);

    for (let index = 0; index < temp.length; index++) {
        temp[index] = Math.floor(Math.random() * 500) + 50;
    }

    // States
    const [delay_time, setDelayTime] = useState(300);
    const [len, setLength] = useState(20);
    const [values, setValues] = useState(temp);
    const [compareCandle, setCompareCandle] = useState([-1, -1]);
    const [compareCandleOk, setCandleOk] = useState([-1, -1]);
    const [compareCandleNotOk, setCandleNotOk] = useState([-1, -1]);
    const [sortedCandle, setSortedCandle] = useState(values.length);

    function changeLength(e) {
        setSortedCandle(e.target.value + 1);
        setLength(e.target.value);
        randomizeValues();
    }

    function changeSpeed(e) {
        //max
        setDelayTime(e.target.value);
    }

    const randomizeValues = () => {
        const temp2 = new Array(Number(len));
        for (let index = 0; index < temp2.length; index++) {
            temp2[index] = Math.floor(Math.random() * 500) + 50;
        }

        setValues(temp2.map((x) => x));
    };

    const swapValues = (i, j) => {
        [values[i], values[j]] = [values[j], values[i]];
    };

    var delayer;
    // var delay_time = 300;

    function delay(delayInms) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(1);
            }, delayInms);
        });
    }

    const bubbleSort_timed = async () => {
        for (let i = 0; i < values.length; i++) {
            var no_swap = true;
            for (let j = 0; j < values.length - 1 - i; j++) {
                setCompareCandle([j, j + 1]);
                delayer = await delay(delay_time);

                if (values[j] > values[j + 1]) {
                    setCandleNotOk([j, j + 1]);
                    delayer = await delay(delay_time);

                    swapValues(j, j + 1);
                    setValues(values.map((x) => x));
                    no_swap = false;
                }
                setCandleNotOk([-1, -1]);
                setCandleOk([j, j + 1]);
                delayer = await delay(delay_time);
                setCandleOk([-1, -1]);
                setCompareCandle([-1, -1]);
            }
            setSortedCandle(values.length - i - 1);
            delayer = await delay(delay_time);
            if (no_swap) {
                break;
            }
        }
        setSortedCandle(0);
        delayer = await delay(1000);
        setSortedCandle(values.length);
    };

    function color(indx) {
        // Set Colors
        if (indx >= sortedCandle) {
            return "blue";
        } else if (
            indx === compareCandleNotOk[0] ||
            indx === compareCandleNotOk[1]
        ) {
            return "red";
        } else if (indx === compareCandleOk[0] || indx === compareCandleOk[1]) {
            return "green";
        } else if (indx === compareCandle[0] || indx === compareCandle[1]) {
            return "DodgerBlue";
        } else return "DarkSlateGray";
    }

    return (
        <div className="DisplayWindow">
            <div className="ControlWindow">
                <p>Length {len} </p>
                <input
                    type="range"
                    min="5"
                    max="100"
                    defaultValue={values.length}
                    onChange={changeLength}
                ></input>
                <p>Delay {delay_time}</p>
                <input
                    type="range"
                    min="0"
                    max="1500"
                    defaultValue={300}
                    onChange={changeSpeed}
                ></input>
                <button
                    className="btn btn-outline-dark"
                    onClick={randomizeValues}
                >
                    Randomize
                </button>
                <button
                    className="btn btn-outline-dark"
                    onClick={bubbleSort_timed}
                >
                    Sort
                </button>
            </div>
            <div>
                <div className="candles">
                    {values.map((value, indx) => (
                        <div
                            className="candle"
                            key={indx}
                            style={{
                                height: `${value}px`,
                                backgroundColor: `${color(indx)}`,
                                // ${color(indx)}
                                width: `${500 / values.length}px`,
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DisplayWindow;
