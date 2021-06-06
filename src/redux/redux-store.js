import { combineReducers } from 'redux';
import { reducer as formReducer } from 'react-final-form';
const reducers = combineReducers(
    {
        form: formReducer
    }
)



const store = createStore(reducers);

window.store = store;