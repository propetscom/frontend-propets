export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}

export const logoutUser = () => {
    console.log('logout');
    return (dispatch) => {
        dispatch(requestLogout());
        localStorage.removeItem('X-Token');
        console.log(localStorage.getItem('X-Token'));
        dispatch(receiveLogout())
    }
};