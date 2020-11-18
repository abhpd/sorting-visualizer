export const DELAY = "DELAY";

export const updateDelay = (payload) => {
    return {
        type: DELAY,
        payload: payload,
    };
};
