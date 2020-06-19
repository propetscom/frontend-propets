import {ADD_IMAGES, CHANGE_TEXT, DELETE_IMAGE} from "../actions/AddingNewPostAction";
import {UPLOAD_ERROR, UPLOAD_REQUEST, UPLOAD_SUCCESS} from "../actions/ImageUploadAction";

function newPostReducer(state={},action) {
    switch (action.type) {
        case ADD_IMAGES:
            console.log(state.images);
            let files = state.images;
            let urls = state.urls;
            console.log(action.images);
            files.push(action.images);
            urls.push(action.url);
            return {...state, images: files || state, urls: urls || state};
        case DELETE_IMAGE:
            let filesDel = state.images;
            let urlDel = state.urls;
            filesDel.splice(action.index,1);
            urlDel.splice(action.index,1);
            return {...state, images: filesDel || state, urls: urlDel || state};
        case UPLOAD_SUCCESS:
            let urlsUpload = state.uploadedFileUrl;
            urlsUpload.push(action.uploadedFileUrl);
            console.log(urlsUpload);
            return {...state, uploadedFileUrl: urlsUpload || state};
        case UPLOAD_REQUEST:
            return {...state, isFetching: true};
        case UPLOAD_ERROR:
            return {...state, message: action.message || state, error: action.error || state };
        case CHANGE_TEXT:
            return {...state, text: action.text || state};
        default:
            return state;

    }

}
export default newPostReducer;