export const COMPARE_CANDLE = "COMPARE_CANDLE";
export const COMPARE_CANDLE_OK = "COMPARE_CANDLE_OK";
export const COMPARE_CANDLE_NOT_OK = "COMPARE_CANDLE_NOT_OK";
export const SORTED_CANDLE = "SORTED_CANDLE";

export const updateCompareCandle = (payload) => {
    return {
        type: COMPARE_CANDLE,
        payload: payload,
    };
};

export const updateCompareCandleOk = (payload) => {
    return {
        type: COMPARE_CANDLE_OK,
        payload: payload,
    };
};

export const updateCompareCandleNotOk = (payload) => {
    return {
        type: COMPARE_CANDLE_NOT_OK,
        payload: payload,
    };
};

export const updateSortedCandle = (payload) => {
    console.log("==" + payload);
    return {
        type: SORTED_CANDLE,
        payload: payload,
    };
};
