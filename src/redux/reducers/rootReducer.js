import { combineReducers } from "redux";

//Importing reducers
import arrayReducer from "./array";
import delayReducer from "./delay";
import bubbleReducer from "./bubbleSort";
import selectionReducer from "./selectionSort";

//Combining reducers
const rootReducer = combineReducers({
    arrayReducer: arrayReducer,
    delayReducer: delayReducer,
    bubbleReducer: bubbleReducer,
    selectionReducer: selectionReducer,
});

export default rootReducer;
