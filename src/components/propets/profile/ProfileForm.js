import * as React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Dropzone from "react-dropzone";
import {editUser, editUserWithAvatar} from "../../../reduxTools/actions/EditUserAction";
import style from "../../../css/profile.modules.css"
import {Link} from "react-router-dom";

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            name: '',
            phone: '',
            avatar: ''
        }
    }

    onDrop = (file) => {
        console.log(file[0]);
        console.log(file[0]);
        this.setState({
            image: URL.createObjectURL(file[0]),
            avatar: file[0]
        });

    };

    componentDidMount() {
        let avatar = this.props.avatar;
        let name = this.props.name;
        let phone = this.props.phone;
        this.setState({
            image: avatar,
            name: name,
            phone: phone
        })
    }

    handleName = (e) => {
        let value = e.target.value;
        this.setState({
            name: value
        })
    };

    handlePhone = (e) => {
        let value = e.target.value;
        this.setState({
            phone: value
        })
    };

    render() {
        return (
            <div>
                <div className={'post-profile'}>
                    <div className={'post-header header-padding'}>
                        <div className="page_header_img">
                            <div>
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
                            <input name={'name'} className="page_header_name page_header_name_new" type={'text'}
                                   placeholder={this.props.name}
                                   value={this.state.name} onChange={this.handleName}></input>
                        </div>
                    </div>
                    <div className="profile-padding-bottom">
                        <div className="form-div">
                            <label className="form-text">Email:</label>
                            <input name='email'
                                   className="form-styling" placeholder={this.props.email} type="email"
                                   disabled="disabled"/>
                            <span className={'span-styling error'}></span>
                        </div>
                        <div className="form-div">
                            <label className="form-text">Phone:</label>
                            <input name='phone'
                                   className="form-styling" placeholder={this.props.phone} value={this.state.phone}
                                   type="phone"
                                   onChange={this.handlePhone}/>
                            <span className={'span-styling error'}></span>
                        </div>
                    </div>

                </div>
                <div className="footer-profile">
                    <div className="footer-sign-right">
                        <Link to={'/propets/home'}>
                            <div className="btn cancel-btn" href="#">
                                <span>Cancel</span>
                            </div>
                        </Link>
                        <Link to={'/propets/home'}>
                            <div className="btn save-btn"
                                 onClick={() => this.props.editUserWithAvatar(this.props.email, this.state.avatar || this.props.avatar, this.state.name, this.state.phone)}
                                 href={'#'}>
                                <i className="icon-save"/>
                                <span>Save changes</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>


        )
    }

}

const mapStateToProps = (state) => {
    return {
        avatar: state.login.user.avatar,
        name: state.login.user.name,
        email: state.login.user.email,
        phone: state.login.user.phone
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            editUserWithAvatar: editUserWithAvatar
        },
        dispatch
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)