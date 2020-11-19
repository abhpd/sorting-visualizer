import {
    updateSortedCandle,
    updateCompareCandle,
    updateCompareCandleOk,
    updateCompareCandleNotOk,
} from "./../actions/selectionSort";

export const selectionSortDispatcher = (dispatch) => {
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
