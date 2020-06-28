export const EDIT_USER_REQUEST = 'EDIT_USER_REQUEST';
export const EDIT_USER_SUCCESS = 'LOGIN_SUCCESS';
export const EDIT_USER_ERROR = 'LOGIN_ERROR';

export const requestEditUser = (user) => {
    return {
        type: EDIT_USER_REQUEST,
        isFetching: true,
        user
    }
};

export const receiveLogin = (user) => {
    return {
        type: EDIT_USER_SUCCESS,
        isFetching: false,
        user
    }
};

export const EditUserError = (message) => {
    return {
        type: EDIT_USER_ERROR,
        isFetching: false,
        message
    }
};

export const editUser = (name,avatar,phone) =>{
    return(dispatch) => {
        let user = {
            avatar: avatar,
            name:name,
            phone:phone
        };

        dispatch(requestEditUser(user));
        fetch('https://propetsapp.herokuapp.com/account/en/v1',{
            method: 'put',
            credentials: "omit",
            headers: {
                'Content-Type': 'application/json',
                'X-Token': localStorage.getItem("X-Token")
            },
            body: JSON.stringify(user)
        }).then(response => console.log(response));
    }
};