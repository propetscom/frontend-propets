import {pageAction} from "./GeneralAction";
import {addImagesAction} from "./AddingNewPostAction";

export const UPLOAD_REQUEST = 'UPLOAD_REQUEST';
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
export const UPLOAD_ERROR = 'UPLOAD_ERROR';


export const requestUpload = (image) => {
    return {
        type: UPLOAD_REQUEST,
        image
    }
};

export const receiveLogin = (uploadedFileUrl) => {
    return {
        type: UPLOAD_SUCCESS,
        uploadedFileUrl
    }
};

export const uploadError = (message, error) => {
    return {
        type: UPLOAD_ERROR,
        isFetching: false,
        message,
        error
    }
};

export const imagesUpload = (image,count,email, name, avatar, text, urls) => {
    return (dispatch) => {
       // console.log('count' + count);
        dispatch(requestUpload(image));
      //  console.log('image' + image.name);
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Client-ID c2d94ffce964b24");
        let formdata = new FormData();
        formdata.append("image", image);
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };
        if(count === 1){
            fetch("https://api.imgur.com/3/image", requestOptions)
                .then(response => {
                    console.log(response);
                    if (!response.ok) {
                        dispatch(uploadError("Images didn't load", true));
                    }
                    return response.json()
                })
                .then(json => {
                    console.log(json);
                    console.log(json.data.link);
                    dispatch(receiveLogin(json.data.link))
                })
                .then(res => {
                    let post = {
                        "username": name,
                        "avatar": avatar,
                        "text": text,
                        "images": urls
                    };
                        fetch(`https://pro-pets-router.herokuapp.com/message/en/v1/${email}`, {
                            method: 'POST',
                            credentials: "omit",
                            headers: {
                                'Content-Type': 'application/json',
                                'X-Token': localStorage.getItem("X-Token")
                            },
                            body: JSON.stringify(post)
                        })
                            .then(response => {
                                console.log(response)
                            })
                            .then(res => {
                                dispatch(pageAction('home'));
                            })
                            .then(res => dispatch(addImagesAction([],[])))
                            .catch(err => console.log("Error: ", err));
                })
                .catch(error => {
                    console.error(error);
                });
        }else {
            fetch("https://api.imgur.com/3/image", requestOptions)
                .then(response => {
                    console.log(response);
                    if (!response.ok) {
                        dispatch(uploadError("Images didn't load", true));
                    }
                    return response.json()
                })
                .then(json => {
                    console.log(json);
                    console.log(json.data.link);
                    dispatch(receiveLogin(json.data.link))
                })

                .catch(error => {
                    console.error(error);
                });
        }

    }

};

export const createPost = (email, name, avatar, text, images) => {
    console.log(name, avatar, text, images);
    let post = {
        "username": name,
        "avatar": avatar,
        "text": text,
        "images": images
    };
    return (dispatch) => {
        fetch(`https://pro-pets-router.herokuapp.com/message/en/v1/${email}`, {
            method: 'POST',
            credentials: "omit",
            headers: {
                'Content-Type': 'application/json',
                'X-Token': localStorage.getItem("X-Token")
            },
            body: JSON.stringify(post)
        })
            .then(response => {
                console.log(response)
            })
            .catch(err => console.log("Error: ", err));
    }
};