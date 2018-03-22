import { combineReducers } from 'redux';
import authReducer from './authReducer';
import noteReducer from './noteReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
    form: reduxForm,
    auth: authReducer,
    noteData: noteReducer
});