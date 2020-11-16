import { createStore } from "redux";

//Importing rootreducer
import rootReducer from "./reducers/rootReducer";

//Creating store
const store = createStore(rootReducer);

export default store;
