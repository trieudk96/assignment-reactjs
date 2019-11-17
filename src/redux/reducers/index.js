import { combineReducers } from 'C:/Users/trieu/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import authenticationReducer from './authentication.reducer';
import profileReducer from './profile.reducer';

const rootReducer = combineReducers({
    auth: authenticationReducer,
    user:profileReducer
})

export default rootReducer