export const UPDATE_RUNNING = "UPDATE_RUNNING";

export const updateRunning = (payload) => {
    return {
        type: UPDATE_RUNNING,
        payload: payload,
    };
};
