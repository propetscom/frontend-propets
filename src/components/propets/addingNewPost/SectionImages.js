import * as React from "react";
import Dropzone from "react-dropzone";
import {bindActionCreators} from "redux";
import {addImagesAction, deleteImageAction} from "../../../reduxTools/actions/AddingNewPostAction";
import {connect} from "react-redux";

class SectionImages extends React.Component {
    constructor() {
        super();
        this.onDrop = (files) => {
            console.log(files.length);
            let size = 5 - this.props.images.length;
            console.log(size);
            if(this.props.images.length<4 && files.length<size) {
                files.forEach((file) => {
                    this.props.addImage(file, URL.createObjectURL(file));
                });

                this.setState({
                    files: files.map(file => Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    }))
                });
            }

        };

        this.deleteFile = (index) => {
            this.props.deleteImage(index);
            let tmp = this.state.files;
            tmp.splice(index, 1);
            this.setState({
                files: tmp
            })
        };

        this.state = {
            files: [],
        };
    }

    getImages = () => {
        console.log('upload : ' + this.props.urls.length);
        if (this.props.urls.length <= 1) {
            return (
                <div className={'preview-images'}>
                    <img src={this.props.urls[0]}/>
                </div>
            )
        } else {
            return (
                <div className={'preview-images'}>
                    <div className={'first-images'}>
                        <img src={this.props.urls[this.props.urls.length - 1]}/>
                    </div>
                    <div className={'second-images'}>
                        {this.props.urls[this.props.urls.length - 2] ?
                            <div className={'image-block'}><img
                                src={this.props.urls[this.props.urls.length - 2]}/>
                            </div> :
                            <div className={'block'}>+</div>}
                        {this.props.urls[this.props.urls.length - 3] ? <div className={'image-block'}>
                            <img src={this.props.urls[this.props.urls.length - 3]}/>
                        </div> : <div className={'block'}>+</div>}
                        {this.props.urls[this.props.urls.length - 4] ?
                            <div className={'image-block'}><img
                                src={this.props.urls[this.props.urls.length - 4]}/>
                            </div> :
                            <div className={'block'}>+</div>}
                    </div>
                </div>

            )
        }
    };


    render() {
        let tmp = this.props.images;
        return (
            <div className={'post-div new-post-images'}>
                <label className={'post-text post-text-label'}>Photos:
                    <div className={'post-text-span'}>up to 4 images</div>
                </label>
                <div className={'preview-div'}>
                    <div className={'preview-images'}>
                        {this.getImages()}
                    </div>
                    <Dropzone
                        accept='image/*'
                        noClick={true}
                        noKeyboard={true} onDrop={this.onDrop}>
                        {({getRootProps, getInputProps, open}) => (
                            <section className="container">
                                <div {...getRootProps({className: 'post-buttons'})}>
                                    <input {...getInputProps()} />
                                    <div className={'post-icon'}></div>
                                    <div>Drag and drop <br/> photo or</div>
                                    <div className={'post-button-browse'} onClick={open}>Browse
                                    </div>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                    <div className={'post-drop-drag'}>
                        <div className={'post-icon-text'}>
                            {tmp.map((file, index) =>
                                (<div className={'div-drop-drag'}>
                                    <span>{file.name}</span>
                                    <div className={'close'} onClick={() => this.deleteFile(index)}></div>
                                </div>))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        images: state.newPost.images,
        urls: state.newPost.urls
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            addImage: addImagesAction,
            deleteImage: deleteImageAction
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionImages);