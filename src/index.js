import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

//Importing css
import "./styles/App.css";

//Importing store
import store from "./redux/store";

//Importing Main Component
import MainComponent from "./components/MainComponent";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <MainComponent />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
