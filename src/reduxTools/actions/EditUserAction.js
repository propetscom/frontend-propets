

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

export const receiveEditUser = (user) => {
    return {
        type: EDIT_USER_SUCCESS,
        isFetching: false,
        user
    }
};

export const editUserError = (message) => {
    return {
        type: EDIT_USER_ERROR,
        isFetching: false,
        message
    }
};

export const editUser = (email,avatar,name,phone) =>{
    return(dispatch) => {

        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Client-ID c2d94ffce964b24");
        let formdata = new FormData();
        formdata.append("image", avatar);
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };
        fetch("https://api.imgur.com/3/image", requestOptions)
            .then(response => {
                if (!response.ok) {
                    dispatch(editUserError("Images didn't load"));
                }
                return response.json()
            })
            .then(json => json.data.link)
            .then(link => {

                let user = {
                    avatar: link,
                    name:name,
                    phone:phone
                };
                dispatch(requestEditUser(user));
                fetch(`https://propetsapp.herokuapp.com/account/en/v1/${email}`, {
                    method: 'put',
                    credentials: "omit",
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Token': localStorage.getItem("X-Token")
                    },
                    body: JSON.stringify(user)
                })
                    .then(response => {
                    console.log(response);
                    if (!response.ok) {
                        dispatch(editUserError("error"));
                    }
                    return response.json();
                })
                    .then(json => {
                        dispatch(receiveEditUser(json));
                        localStorage.setItem("X-Name", json.name);
                        localStorage.setItem("X-Avatar", json.avatar);
                        localStorage.setItem("X-Roles", json.roles);
                        localStorage.setItem("X-Phone", json.phone);
                    });
            })
    }
};