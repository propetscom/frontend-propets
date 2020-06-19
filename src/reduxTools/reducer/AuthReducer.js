import {LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, TOKEN_REQUEST} from "../actions/LoginAction";
import {LOGOUT_SUCCESS} from "../actions/LogoutAction";

export default function auth(state =  {}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                isAuthenticated: false,
                user: action.user
            });
        case TOKEN_REQUEST:
            return Object.assign({}, state, {
                isAuthenticated: false,
                idToken: action.idToken
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                message: '',
                user: action.user,
                idToken: action.idToken
            });
        case LOGIN_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                message: action.message
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false
            });
        default:
            return state
    }
}