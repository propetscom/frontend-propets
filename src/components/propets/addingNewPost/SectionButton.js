import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {createPost, imagesUpload} from "../../../reduxTools/actions/ImageUploadAction";
import {pageAction} from "../../../reduxTools/actions/GeneralAction";
import {Link} from "react-router-dom";

function SectionButton(props) {

    const addNewPost = () => {
        for(let i = 0 ; i < props.images.length; i++) {
            let count = props.images.length - i;
            props.uploadImage(props.images[i], count , props.email, props.name, props.avatar, props.text, props.uploadedFileUrl);
        }


    };


    return(
        <div className={'post-div'}>
            <div className={'post-header'}>
                <div className="page_header_img">
                    <img className="page_img_user" src={props.avatar} alt="user"/>
                </div>
                <div className="page_header_right">
                    <div className="page_header_name page_header_name_new">{props.name}</div>
                </div>
            </div>
            <Link to={'/propets/home'}>
            <div className="btn button-header-home">
                <i className="plus"/>
                <span className="button-header-home-text" onClick={() => addNewPost()}>Publish</span>
            </div>
            </Link>
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        images: state.newPost.images,
        name: state.login.user.name,
        email: state.login.user.email,
        uploadedFileUrl: state.newPost.uploadedFileUrl,
        text: state.newPost.text,
        avatar: state.login.user.avatar
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            uploadImage: imagesUpload,
            createPost: createPost,
            changePage:pageAction
        },
        dispatch
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(SectionButton);