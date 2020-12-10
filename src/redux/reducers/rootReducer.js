import { combineReducers } from "redux";

//Importing reducers
import arrayReducer from "./array";
import delayReducer from "./delay";
import bubbleReducer from "./bubbleSort";
import selectionReducer from "./selectionSort";
import insertionReducer from "./insertionSort";
import mergeReducer from "./mergeSort";
import quickReducer from "./quickSort";

//Combining reducers
const rootReducer = combineReducers({
    arrayReducer: arrayReducer,
    delayReducer: delayReducer,

    //sorting reducers
    bubbleReducer: bubbleReducer,
    selectionReducer: selectionReducer,
    insertionReducer: insertionReducer,
    mergeReducer: mergeReducer,
    quickReducer: quickReducer,
});

export default rootReducer;
