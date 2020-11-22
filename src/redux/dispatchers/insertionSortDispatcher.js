import {
    updateSortedCandle,
    updateCompareCandle,
    updateCompareCandleOk,
    updateCompareCandleNotOk,
} from "./../actions/insertionSort";

export const insertionSortDispatcher = (dispatch) => {
    return {
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
