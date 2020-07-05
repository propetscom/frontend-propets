import {
    FOUND_CHANGE_PAGE_POSTS,
    FOUND_POST_ERROR,
    FOUND_POST_REQUEST,
    FOUND_POST_SUCCESS
} from "../actions/FoundAction";


function foundReducer(state = {}, action) {
    switch (action.type) {
        case FOUND_POST_SUCCESS:
            console.log(action.posts);
            return {...state, posts: action.posts || state, count: action.numbers || state};
        case FOUND_CHANGE_PAGE_POSTS:
            return {...state, pagePosts: +(action.page) || state};
        case FOUND_POST_REQUEST:
            return {...state, request: action.payload};
        case FOUND_POST_ERROR:
            return {...state, messageError: action.messageError};
        default:
            return state;
    }
}

export default foundReducer;