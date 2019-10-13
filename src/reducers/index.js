import { combineReducers } from 'redux';
import opportunityReducer from './opportunityReducer';

export default combineReducers({
    opportunities: opportunityReducer
});
