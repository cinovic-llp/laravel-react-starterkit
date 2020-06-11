import {DISPLAY_USER, DISPLAY_USER_LIST, GET_USER, GET_USER_LIST} from "../Action";

const INIT_STATE = {
    user : "",
    loading:false
};

export default function UserReducer(state = INIT_STATE, action)
{
    switch (action.type) {
        case DISPLAY_USER:
            return {
                ...state,
                user: action.payload,
                loading: true
            };
            break;
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: true
            };
            break;
        case GET_USER_LIST:

            return {
                ...state,
                user: action.payload,
                loading: true
            };
            break;
        case DISPLAY_USER_LIST:
            return {
                ...state,
                user: action.payload,
                loading: true
            };
            break;
        default:
            return  state
    }
}
