import { UPDATE_ARR } from "./../../actions/updateArray";
import { UPDATE_RUNNING } from "../../actions/updateRunning";
import { UPDATE_ALGO } from "../../actions/updateAlgo";
import randomizer from "./../../../algorithms/helpers/randomizer";

const defaultArrayLength = 20;

const defaultState = {
    length: defaultArrayLength,
    arr: randomizer(defaultArrayLength),
    isAlgoRunning: false,
    currentAlgo: "none",
};

const arrayReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_ARR:
            return {
                ...state,
                arr: action.payload.arr,
            };
        case UPDATE_RUNNING:
            console.log(action.payload);
            return {
                ...state,
                isAlgoRunning: action.payload,
            };
        case UPDATE_ALGO:
            return {
                ...state,
                currentAlgo: action.payload,
            };
        default:
            return state;
    }
};

export default arrayReducer;
