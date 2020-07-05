import * as React from "react";
import PostTitle from "../addingNewPost/PostTitle";
import {postTitleNewPostLost, textFoundForDescription} from "../../../utils/Const";
import SidebarRight from "../SidebarRight";
import Dropzone from "react-dropzone";
import FormLostFound from "../addingNewPost/FormLostFound";

class NewPostLost extends React.Component {
    constructor(props) {
        super(props);
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
    render() {
        let tmp = this.props.images;
        return (
            <div className={'content'}>
                <div className={'page_content'}>
                    <PostTitle title={postTitleNewPostLost}/>
                    <div className={'post-new'}>
                        <div className={'post-new-lost'}>
                            <FormLostFound/>
                            <div className={'lost-new-post-right'}>
                                <div>
                                    <img src={'../../../img/newlostpost.svg'}/>
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
                                        {/* {tmp.map((file, index) =>
                                        (<div className={'div-drop-drag'}>
                                            <span className={'text-drop-drag'}>{file.name} </span>
                                            <div className={'close'} onClick={() => this.deleteFile(index)}></div>
                                        </div>))}*/}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <SidebarRight/>
            </div>

        )
    }

}

export default NewPostLost;