import {
    CHANGE_FAVORITES_POST_SUCCESS,
    FAVORITES_ERROR,
    FAVORITES_REQUEST,
    FAVORITES_SUCCESS
} from "../actions/FavoritesAction";

export default function favoritesReducer(state = {}, action){
    switch (action.type) {
        case FAVORITES_SUCCESS:
            return {...state, arrayFavorites: action.payload};
        case FAVORITES_ERROR:
            return {...state, error: action.payload};
        case FAVORITES_REQUEST:
            return {...state, request: action.payload};
        case CHANGE_FAVORITES_POST_SUCCESS:
            return {...state, typePost: action.typePost};
        default:  return state;
    }
}