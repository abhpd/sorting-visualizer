import { DELAY } from "./../../actions/delay";
import { defaultDelay } from "./../../../algorithms/helpers/defaults";

const delayReducer = (state = defaultDelay, action) => {
    switch (action.type) {
        case DELAY:
            return action.payload;
        default:
            return state;
    }
};

export default delayReducer;
