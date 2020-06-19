
export const FAVORITES_REQUEST = 'FAVORITES_REQUEST';
export const FAVORITES_SUCCESS = 'FAVORITES_SUCCESS';
export const FAVORITES_ERROR = 'FAVORITES_ERROR';
export const CHANGE_FAVORITES_POST_SUCCESS = 'CHANGE_FAVORITES_POST_SUCCESS';

export const favoritesSuccess = (favorites) => ({
    type: FAVORITES_SUCCESS,
    isFetching: false,
    payload: favorites
});

export const favoritesPostSuccess = (typePost) => ({
    type:   CHANGE_FAVORITES_POST_SUCCESS,
    isFetching: false,
    typePost

});

export const favoritesRequest = (idPost) => ({
    type: FAVORITES_REQUEST,
    isFetching: true,
    idPost
});

export const favoritesError = (message) => ({
    type: FAVORITES_ERROR,
    isFetching: false,
    message
});

export const getFavorites = (email) => {
    return (dispatch) => {
        dispatch(favoritesRequest());
        fetch(`https://propetsapp.herokuapp.com/userdata/en/v1/${email}?dataType=true`, {
            method: 'GET',
            credentials: "omit",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': localStorage.getItem("X-Token")
            }
        })
            .then(response => response.json(), e => dispatch(favoritesError()) )
          //  .then(json => console.log(json['service name']))
            .then(json => dispatch(favoritesSuccess(json.otherPosts)))
            .catch(e => console.log(e));
    }
};

export const changeFavoritesPost = (token,email, idPost, type) => {
    return (dispatch) => {
        dispatch(favoritesRequest(idPost));
        fetch(`https://propetsapp.herokuapp.com/account/en/v1/${email}/favorite/${idPost}`, {
                method: type,
                credentials: "omit",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Token': localStorage.getItem("X-Token"),
                    'X-ServiceName': 'message'
                }
            }
        )
            .then(response => response)
            .catch(e => console.log(e));
    }
};
