import * as React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Dropzone from "react-dropzone";
import {editUser} from "../../../reduxTools/actions/EditUserAction";
import style from '../../../css/profile.module.css';

class ProfileForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            image: ''
        }
    }

    onDrop = (file) => {
        console.log(file[0]);
        console.log(URL.createObjectURL(file[0]));
        this.setState({
            image: URL.createObjectURL(file[0])
        });

    };

    componentDidMount() {
        let avatar = this.props.avatar;
        this.setState({
            image: avatar
        })
    }

    render() {
        return(
            <div className={'post-profile'}>
                <div className={'post-header'}>
                    <div className="page_header_img">
                        <div>
                            {console.log(this.image)}
                        <img className="page_img_user" src={this.state.image} alt="user"/>
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
                           className="form-styling" placeholder={this.props.email} type="email"/>
                    <span className={'span-styling error'}></span>
                </div>
                <div className="form-div">
                    <label className="form-text">Phone:</label>
                    <input name='phone'
                           className="form-styling" placeholder={this.props.phone} type="phone"/>
                    <span className={'span-styling error'}></span>
                </div>
                </div>
                <div className="footer-sign right">
                    <div className="footer-sign-right">
                        <a className="btn cancel-btn" href="#">
                            <span>Cancel</span>
                        </a>
                        <a className="btn save-btn"  href={'#'}>
                            <i className="icon-save"/>
                            <span>Save changes</span>
                        </a>
                    </div>
                </div>
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        avatar: state.login.user.avatar,
        name:state.login.user.name,
        email: state.login.user.email,
        phone:state.login.user.phone
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