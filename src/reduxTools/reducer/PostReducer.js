import {CHANGE_PAGE_POSTS, POST_ERROR, POST_REQUEST, POST_SUCCESS} from "../actions/PostAction";

function postsReducer(state = {}, action) {
    switch (action.type) {
        case POST_SUCCESS:
            return {...state, posts: action.post || state, count: action.numbers || state};
        case CHANGE_PAGE_POSTS:
            return {...state, pagePosts: +(action.page) || state};
        case POST_REQUEST:
            return {...state, request: action.payload};
        case POST_ERROR:
            return {...state, messageError: action.messageError};
        default:
            return state;
    }
}

export default postsReducer;