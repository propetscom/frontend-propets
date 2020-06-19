import React from "react";
import Buttons from "./Buttons";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {loginError, loginUser, registrUser} from "../../reduxTools/actions/LoginAction";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            email: '',
            password: '',
            password2: '',
            formErrors: {email: '', password: '', password2: ''},
            emailValid: false,
            passwordValid: false,
            password2Valid: false,
            formValid: false
        }
    }


    handleInputForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value}, () => this.validateField(name, value));
    };


    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let password2Valid = this.state.password2Valid;
        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : '* Email is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : '* Is too short';
                break;
            case  'password2':
                password2Valid = this.state.password === value;
                fieldValidationErrors.password2 = password2Valid ? '' : '* Password is invalid';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            password2Valid: password2Valid
        }, this.validateForm);
    };

    validateForm() {
        this.setState({
            formValid: this.state.emailValid &&
                this.state.passwordValid && this.state.password2Valid
        });
    };
    handleForm = async () => {
        if(this.props.sign) {
            if (this.state.formValid) {
                let user = {
                    name: this.state.user,
                    email: this.state.email,
                    password: this.state.password
                };
                this.props.registrUser(user)
            }
            else
            {
                this.props.changeMessage('* Check that the data you entered is correct and try again.');
            }

        }else {

            let login = this.state.email;
            let  password = this.state.password;
            let user = {
                login: login,
                password: password
            };
            this.props.loginUser(user);
        }
        this.props.changeMessage('*Net work error.');
    };


    render() {
       // console.log('fetch ' + this.props.isFetching);
        return (
            <div>
                <div className="signup">
                    <div className={this.props.sign ? "form-div" : "sing-in-none"}>
                        <label className={"form-text"}>Name:</label>
                        <input name="user" placeholder="Name" value={this.state.user}
                               onChange={this.handleInputForm}
                               className={"form-styling"} type="text"/>
                        <span className={'span-styling error'}>{this.state.formErrors.password}</span>
                    </div>
                    <div className="form-div">
                        <label className="form-text">Email:</label>
                        <input name='email' value={this.state.email} onChange={this.handleInputForm}
                               className="form-styling" placeholder="Email" type="email"/>
                        <span className={'span-styling error'}>{this.state.formErrors.email}</span>
                    </div>
                    <div className="form-div">
                        <label className="form-text">Password:</label>
                        <input value={this.state.password} onChange={this.handleInputForm}
                               className="form-styling" type="password" name="password"
                               placeholder="***************"/>
                        <span className={'span-styling'} >
                                Password must have at least 8 characters with at least one Capital letter,
                                at least one lower case letter and at least one number or special character.
                            </span>
                    </div>
                    <div className={this.props.sign ? "form-div" : "sing-in-none"}>
                        <label className="form-text">Password:</label>
                        <input value={this.state.password2} onChange={this.handleInputForm}
                               className="form-styling" type="password" name="password2"
                               placeholder="***************"/>
                        <span className={'span-styling'}>
                                Please re-enter your password
                            </span>
                    </div>
                    <div className={this.props.sign ? 'sing-in-none' : 'form-div'}>

                        <span className={'span-styling-forget'}>Forget password?</span>


                    </div>

                    <div className={this.props.messageError ? 'message-styling error' : 'message'}>{this.props.messageError}</div>
                    {/*<div className={!this.props.isFetching ? 'hidden' : ' '} id="fountainG">
                        <div id="fountainG_1" className="fountainG"></div>
                        <div id="fountainG_2" className="fountainG"></div>
                        <div id="fountainG_3" className="fountainG"></div>
                        <div id="fountainG_4" className="fountainG"></div>
                        <div id="fountainG_5" className="fountainG"></div>
                        <div id="fountainG_6" className="fountainG"></div>
                        <div id="fountainG_7" className="fountainG"></div>
                        <div id="fountainG_8" className="fountainG"></div>
                    </div>*/}
                </div>
                <Buttons handleFormData={this.handleForm}/>
            </div>
        )

    }

}
const mapStateToProps = (state) => {
    return {

    messageError: state.login.message,
        isFetching: state.login.isFetching

    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            loginUser: loginUser,
            registrUser: registrUser,
            changeMessage:loginError
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);