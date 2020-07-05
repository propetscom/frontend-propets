import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "../reducer";
import thunk from 'redux-thunk'

const initialState = {

    general:{
        pageMenu: 'home'
    },
    posts:{
        posts:[],
        pagePosts:0,
        count: [1],
        error:'',
        request:''
    },
    favorites:{
        arrayFavorites: '',
        error: '',
        request:''
    },
    login:{
        user:'',
        idToken:'',
        isFetching: false,
       // isAuthenticated: false,
        isAuthenticated: localStorage.getItem('X-Token') ? true : false,
        message:''
    },
    newPost:{
        images:[],
        urls:[],
        uploadedFileUrl:[],
        message: '',
        error: false
    },
    lost:{
        posts:[],
        pagePosts:0,
        count: [1],
        error:'',
        request:''
    },
    found:{
        posts:[],
        pagePosts:0,
        count: [1],
        error:'',
        request:''
    }

};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
console.log(store.getState());
export default store;