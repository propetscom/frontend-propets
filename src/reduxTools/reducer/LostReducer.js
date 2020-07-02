import {LOST_CHANGE_PAGE_POSTS, LOST_POST_ERROR, LOST_POST_REQUEST, LOST_POST_SUCCESS} from "../actions/LostPostAction";


function lostReducer(state = {}, action) {
    switch (action.type) {
        case LOST_POST_SUCCESS:
            console.log(action.posts);
            return {...state, posts: action.posts || state, count: action.numbers || state};
        case LOST_CHANGE_PAGE_POSTS:
            return {...state, pagePosts: +(action.page) || state};
        case LOST_POST_REQUEST:
            return {...state, request: action.payload};
        case LOST_POST_ERROR:
            return {...state, messageError: action.messageError};
        default:
            return state;
    }
}

export default lostReducer;