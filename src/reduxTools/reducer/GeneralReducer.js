
import {CHANGE_PAGE} from "../actions/GeneralAction";

function generalReducer(state={}, action) {
    switch (action.type) {
        case CHANGE_PAGE:
            return {...state, pageMenu: action.payload || 'home' };
        default:
            return state;
    }
}

export default generalReducer;