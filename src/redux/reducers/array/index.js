import { UPDATE_ARR } from "./../../actions/updateArray";
import randomizer from "./../../../algorithms/helpers/randomizer";

const defaultArrayLength = 20;

const defaultState = {
    length: defaultArrayLength,
    arr: randomizer(defaultArrayLength),
};

const arrayReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_ARR:
            return {
                arr: action.payload.arr,
            };
        default:
            return state;
    }
};

export default arrayReducer;
