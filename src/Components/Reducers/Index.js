import { combineReducers} from 'redux';
import isLoggedReducer from './User'
import dataLoadReducer from './Data';

export default combineReducers({
    IsLogged: isLoggedReducer,
    dataLoad: dataLoadReducer
});