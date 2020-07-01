import {postsHome} from "../../utils/Const";

export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const CHANGE_PAGE_POSTS= 'CHANGE_PAGE_POSTS';
export const POST_ERROR = 'POST_ERROR';

export const pagePostsAction = (page) => ({
    type: CHANGE_PAGE_POSTS,
    page
});

export const postsSuccess = (post, numbers) => ({
    type: POST_SUCCESS,
    post,
    numbers
});

export const postsRequest = () => ({
    type: POST_REQUEST,
    payload: 'pending...'
});

export const postsError = () => ({
    type: POST_ERROR,
    messageError: 'error'
});

export const getPosts = (page,token) => {
    if(!parseInt(page)){
        page = 0;
    }
    let numbers =[];
    return (dispatch) => {
        dispatch(postsRequest());
        fetch(`https://pro-pets-router.herokuapp.com/message/en/v1/view/?itemsOnPage=${postsHome}&currentPage=${page}`, {
            method: 'GET',
            credentials: "omit",
            headers: {
                'Content-Type': 'application/json',
                'X-Token': localStorage.getItem('X-Token')
            }
        })
            .then(response => response.json(), e => dispatch(postsError()) )
            .then(json => {
                const itemsTotal = +(json.itemsTotal);
                const page1 = Math.ceil(itemsTotal / postsHome);
                for (let i = 0; i < page1; i++) {
                    numbers[i] = i + 1
                }
                dispatch(postsSuccess(json.posts, numbers))})
            .catch(e => console.log(e));
    }
};