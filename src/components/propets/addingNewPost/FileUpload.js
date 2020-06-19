import * as React from "react";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {deleteImageAction} from "../../../reduxTools/actions/AddingNewPostAction";

class FileUpload extends React.Component {

    deleteFile = (index) => {
        this.props.deleteImage(index);
    };

    render() {
        let tmp = this.props.images;
        return (
            <div className={'post-drop-drag'}>
                <div className={'post-icon-text'}>
                    {tmp.map((file, index) =>
                        (<div className={'div-drop-drag'}>
                            <span>{file.name}</span>
                            <div className={'close'} onClick={() => this.deleteFile(index)}></div>
                        </div>))}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        images: state.newPost.images
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            deleteImage: deleteImageAction
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);