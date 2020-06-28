export const TOKEN_REQUEST = 'TOKEN_REQUEST';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const requestToken = (idToken) => {
    return {
        type: TOKEN_REQUEST,
        isAuthenticated: false,
        idToken
    }
};
export const requestLogin = (user) => {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        user
    }
};

export const receiveLogin = (user, idToken) => {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        user,
        idToken
    }
};

export const loginError = (message) => {
    return {
        type: LOGIN_ERROR,
        isFetching: false,
        isAuthenticated: false,
        message
    }
};

export const loginUser = (user) => {

    let config = {
        method: 'post',
        credentials: "omit",
        headers: new Headers({
            'Authorization': 'Basic ' + btoa(user.login + ':' + user.password)
        })
    };

    return (dispatch) => {
        dispatch(requestLogin(user));
        fetch('https://propetsapp.herokuapp.com/account/en/v1/login', config)
            .then(response =>
                response.json().then(user => ({user, response}))
            ).then(({user, response}) => {
            if (!response.ok) {
                // console.log('response' + response.json());
                dispatch(loginError(user.message));
            } else {
                console.log('user login' + user.email);
                localStorage.setItem("X-Token", response.headers.get("X-Token"));
                localStorage.setItem("X-Name", user.name);
                localStorage.setItem("X-Login", user.email);
                localStorage.setItem("X-Avatar", user.avatar);
                localStorage.setItem("X-Roles", user.roles);
                console.log(localStorage.getItem("X-Name"));
                // localStorage.setItem("X-User", user);
                console.log(localStorage.getItem("X-Token"));
                dispatch(receiveLogin(user, localStorage.getItem("X-Token")))
            }
        })
            .catch(err => console.log("Error: ", err));
    }
};

export const registrUser = (user) => {

    let config = {
        method: 'POST',
        credentials: "omit",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    };

    return (dispatch) => {
        dispatch(requestLogin(user));
        fetch('https://propetsapp.herokuapp.com/account/en/v1', config)
            .then(response =>
                response.json().then(user => ({user, response}))
            ).then(({user, response}) => {
            if (!response.ok) {
                // console.log('response' + response.json());
                dispatch(loginError(user.message));
            } else {
                // console.log('response' + response);
                localStorage.setItem("X-Token", response.headers.get("X-Token"));
                localStorage.setItem("X-Name", user.name);
                localStorage.setItem("X-Login", user.email);
                localStorage.setItem("X-Avatar", user.avatar);
                localStorage.setItem("X-Phone", user.phone);
                localStorage.setItem("X-Roles", user.roles);
                console.log(localStorage.getItem("X-Name"));
                dispatch(receiveLogin(user, localStorage.getItem("X-Token")))
            }
        })
            .catch(err => console.log("Error: ", err));
    }
};

export const tokenAction = (token) => {
    return (dispatch) => {
        dispatch(requestToken(token));
        fetch(`https://propetsapp.herokuapp.com/account/en/v1/token/validation`, {
            method: 'GET',
            credentials: "omit",
            headers: {
                'Content-Type': 'application/json',
                'X-Token': token
            }
        })
            .then(response => {
                if (!response.ok) {
                    console.log(response);
                    //dispatch(loginError(''));
                } else {
                    console.log(response);
                    // console.log("headers: "+response.headers.get("X-Login"));
                    //let user =  localStorage.getItem('X-User');
                    //
                    let user = {
                        name: localStorage.getItem('X-Name'),
                        email: localStorage.getItem("X-Login"),
                        avatar: localStorage.getItem("X-Avatar"),
                        phone: localStorage.getItem("X-Phone"),
                        roles: localStorage.getItem('X-Roles')
                    };
                    console.log(localStorage.getItem('X-Token'));
                    console.log('user ' + user.name);
                    dispatch(receiveLogin(user, token))
                }
            })
            .catch(err => console.log("Error: ", err));
    }
};