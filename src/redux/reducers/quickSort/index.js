import {
    COMPARE_CANDLE,
    COMPARE_CANDLE_OK,
    COMPARE_CANDLE_NOT_OK,
    SORTED_CANDLE,
} from "./../../actions/quickSort";

const defaultState = {
    compareCandle: [-1, -1],
    compareCandleOk: [-1, -1],
    compareCandleNotOk: [-1, -1],
    sortedCandle: -1,
};

const quickReducer = (state = defaultState, action) => {
    switch (action.type) {
        case COMPARE_CANDLE: {
            return Object.assign(state, { compareCandle: action.payload });
        }
        case COMPARE_CANDLE_OK: {
            return Object.assign(state, { compareCandleOk: action.payload });
        }
        case COMPARE_CANDLE_NOT_OK: {
            return Object.assign(state, { compareCandleNotOk: action.payload });
        }
        case SORTED_CANDLE: {
            // -- Dosen't work
            // return {
            //     sortedCandle: action.payload,
            // };

            // -- Solution 1
            return Object.assign(state, { sortedCandle: action.payload });

            // -- Solution 2
            // return { ...state, ...{ sortedCandle: action.payload } };
        }
        default:
            return state;
    }
};

export default quickReducer;
