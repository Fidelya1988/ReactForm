import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/redux-store'
const storeContext = React.createContext(store);
const MyContext = React.createContext;

const rerender =()=>
{ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store = {store}> */}
    <App state={store.getState()} dispatch ={store.dispatch} subscribe={store.subscribe}/>
    {/* <Provider/> */}
  </React.StrictMode>,
  document.getElementById('root')
)}
rerender();
store.subscribe(rerender)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
