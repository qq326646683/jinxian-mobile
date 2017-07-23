import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import login from './login';
import home from './home';
import introduce from './introduce';


const rootReducer = combineReducers({
    login,
    home,
    introduce,
    router: routerReducer
});


export default rootReducer;