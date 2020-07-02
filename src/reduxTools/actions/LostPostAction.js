import {postsHome} from "../../utils/Const";
import {postsError, postsSuccess} from "./PostAction";


export const LOST_POST_REQUEST = 'LOST_POST_REQUEST';
export const LOST_POST_SUCCESS = 'LOST_POST_SUCCESS';
export const LOST_CHANGE_PAGE_POSTS= 'LOST_CHANGE_PAGE_POSTS';
export const LOST_POST_ERROR = 'LOST_POST_ERROR';

export const pageLostAction = (page) => ({
    type: LOST_CHANGE_PAGE_POSTS,
    page
});

export const lostSuccess = (posts, numbers) => ({
    type: LOST_POST_SUCCESS,
    posts,
    numbers
});

export const lostRequest = () => ({
    type: LOST_POST_REQUEST,
    payload: 'pending...'
});

export const lostError = () => ({
    type: LOST_POST_ERROR,
    messageError: 'error'
});

export const getLostPosts = () => {
  //  if(!parseInt(page)){
  //      page = 0;
  //  }
   // let numbers =[];
    return (dispatch) => {
        dispatch(lostRequest());
        fetch(`https://propetsapp.herokuapp.com/lostfound/en/v1/losts?currentPage=0&itemsOnPage=5`, {
            method: 'GET',
            credentials: "omit",
            headers: {
                'Content-Type': 'application/json',
                'X-Token': localStorage.getItem('X-Token')
            }
        })
            .then(response => response.json(), e => dispatch(lostError()) )
            .then(json => {
                dispatch(lostSuccess(json.posts,1));
            })
            .catch(e => console.log(e));
    }
};