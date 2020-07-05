export const FOUND_POST_REQUEST = 'FOUND_POST_REQUEST';
export const FOUND_POST_SUCCESS = 'FOUND_POST_SUCCESS';
export const FOUND_CHANGE_PAGE_POSTS= 'LOST_CHANGE_PAGE_POSTS';
export const FOUND_POST_ERROR = 'FOUND_POST_ERROR';

export const pageFoundAction = (page) => ({
    type: FOUND_CHANGE_PAGE_POSTS,
    page
});

export const foundSuccess = (posts, numbers) => ({
    type: FOUND_POST_SUCCESS,
    posts,
    numbers
});

export const foundRequest = () => ({
    type: FOUND_POST_REQUEST,
    payload: 'pending...'
});

export const foundError = () => ({
    type: FOUND_POST_ERROR,
    messageError: 'error'
});

export const getFoundPosts = () => {
    //  if(!parseInt(page)){
    //      page = 0;
    //  }
    // let numbers =[];
    return (dispatch) => {
        dispatch(foundRequest());
        fetch(`https://propetsapp.herokuapp.com/lostfound/en/v1/founds?currentPage=0&itemsOnPage=5`, {
            method: 'GET',
            credentials: "omit",
            headers: {
                'Content-Type': 'application/json',
                'X-Token': localStorage.getItem('X-Token')
            }
        })
            .then(response => response.json(), e => dispatch(foundError()) )
            .then(json => {
                console.log(json);
                dispatch(foundSuccess(json.posts,1));
            })
            .catch(e => console.log(e));
    }
};
