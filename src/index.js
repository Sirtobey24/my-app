import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from 'react-redux';


const initialState = { name: "John1", newCounter: "6", count: "1" };

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "INCREMENT_VALUE") {
    newState.newCounter++;
  }

  if (action.type === "DECREMENT_VALUE") {
    newState.newCounter--;
  }

  if (action.type === "CHANGE_NAME") {
    newState.name = action.payload;
  }


  return newState;
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
  // </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
