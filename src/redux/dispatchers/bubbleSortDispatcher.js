import {
    updateSortedCandle,
    updateCompareCandle,
    updateCompareCandleOk,
    updateCompareCandleNotOk,
} from "./../actions/bubbleSort";

export const bubbleSortDispatcher = (dispatch) => {
    return {
        //bubbleSort
        sortedCandle: (value) => {
            dispatch(updateSortedCandle(value));
        },
        compareCandle: (value) => {
            dispatch(updateCompareCandle(value));
        },
        compareCandleOk: (value) => {
            dispatch(updateCompareCandleOk(value));
        },
        compareCandleNotOk: (value) => {
            dispatch(updateCompareCandleNotOk(value));
        },
    };
};
