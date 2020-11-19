export const UPDATE_ALGO = "UPDATE_ALGO";

export const updateAlgo = (payload) => {
    return {
        type: UPDATE_ALGO,
        payload: payload,
    };
};
