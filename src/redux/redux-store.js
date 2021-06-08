import { combineReducers, createStore } from 'redux';
import loginReducer from './loginReducer'
const reducers = combineReducers(
    {
        data: loginReducer
    }
)



const store = createStore(reducers);

window.store = store;
export default store;