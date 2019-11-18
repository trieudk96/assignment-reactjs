import { combineReducers } from 'redux';
import authenticationReducer from './authentication.reducer';
import profileReducer from './profile.reducer';

const rootReducer = combineReducers({
    auth: authenticationReducer,
    user:profileReducer
})

export default rootReducer