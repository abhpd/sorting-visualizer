export const UPDATE_ARR = "UPDATE_ARR";

export const updateArray = (payload) => {
    return {
        type: UPDATE_ARR,
        payload: payload,
    };
};
