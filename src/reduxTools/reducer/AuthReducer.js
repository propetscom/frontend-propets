import {LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, TOKEN_REQUEST} from "../actions/LoginAction";
import {LOGOUT_SUCCESS} from "../actions/LogoutAction";
import {EDIT_USER_ERROR, EDIT_USER_REQUEST, EDIT_USER_SUCCESS} from "../actions/EditUserAction";

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
        case EDIT_USER_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                message: action.message
            });
        case EDIT_USER_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                message: '',
                user: action.user
            });
        case EDIT_USER_REQUEST:
            Object.assign({}, state, {
                isFetching: true,
                message: '',
                user: action.user
            });
        default:
            return state
    }
}