import * as React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Dropzone from "react-dropzone";

class ProfileForm extends React.Component{
    render() {
        return(
            <div className={'post-profile'}>
                <div className={'post-header'}>
                    <div className="page_header_img">
                        <div>
                        <img className="page_img_user" src={this.props.avatar} alt="user"/>
                        <Dropzone
                            accept='image/*'
                            noClick={true}
                            noKeyboard={true} onDrop={this.onDrop}>
                            {({getRootProps, getInputProps, open}) => (
                                <section className="container">
                                    <div {...getRootProps({className: 'div-icon'})}>
                                        <input {...getInputProps()} />
                                        <div className={'profile-icon'} onClick={open}>
                                        </div>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                        </div>
                    </div>
                    <div className="page_header_right">
                        <div className="page_header_name page_header_name_new">{this.props.name}</div>
                    </div>
                </div>
                <div className="signup">
                <div className="form-div">
                    <label className="form-text">Email:</label>
                    <input name='email'
                           className="form-styling" placeholder="Email" type="email"/>
                    <span className={'span-styling error'}></span>
                </div>
                <div className="form-div">
                    <label className="form-text">Phone:</label>
                    <input name='email'
                           className="form-styling" placeholder="Email" type="email"/>
                    <span className={'span-styling error'}></span>
                </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        avatar: state.login.user.avatar,
        name:state.login.user.name
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {

        },
        dispatch
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)