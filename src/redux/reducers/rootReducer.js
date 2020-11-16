import { combineReducers } from "redux";

//Importing reducers
import arrayReducer from "./array";
import bubbleReducer from "./bubbleSort";

//Combining reducers
const rootReducer = combineReducers({
    arrayReducer: arrayReducer,
    bubbleReducer: bubbleReducer,
});

export default rootReducer;
