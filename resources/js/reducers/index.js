import { combineReducers } from "redux";

import UserReducer from '../Module/Users/Reducer/UserReducer';


export default combineReducers({
    user: UserReducer
})
