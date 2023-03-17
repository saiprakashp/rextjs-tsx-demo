import * as React from "react";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { render } from "react-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { UserReducer } from "./reducers/reducer";
import * as ReactDOMClient from 'react-dom/client';

const reduxStore = createStore(UserReducer, applyMiddleware(thunk));

const container: any = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);
root.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,

);
