import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import contactReducer from './contactReducer';
import newContactReducer from './newContactReducer';

export default combineReducers({
    errors: errorReducer,
    contacts: contactReducer,
    newContacts: newContactReducer
});