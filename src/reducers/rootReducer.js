import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import login from './login';
import home from './home';


const rootReducer = combineReducers({
    login,
    home,
    router: routerReducer
});


export default rootReducer;