import {
    updateSortedCandle,
    updateCompareCandle,
    updateCompareCandleOk,
    updateCompareCandleNotOk,
    updateCurrentPivot,
} from "./../actions/quickSort";

export const quickSortDispatcher = (dispatch) => {
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
        currentPivot: (value) => {
            dispatch(updateCurrentPivot(value));
        },
    };
};
