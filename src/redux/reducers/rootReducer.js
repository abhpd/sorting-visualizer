import { combineReducers } from "redux";

//Importing reducers
import arrayReducer from "./array";
import bubbleReducer from "./bubbleSort";
import delayReducer from "./delay";

//Combining reducers
const rootReducer = combineReducers({
    arrayReducer: arrayReducer,
    bubbleReducer: bubbleReducer,
    delayReducer: delayReducer,
});

export default rootReducer;
