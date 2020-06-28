import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {editUser} from "../../../reduxTools/actions/EditUserAction";

class ButtonsProfile extends React.Component {
    render() {
        return (
            <div className="footer-sign right">
                <div className="footer-sign-right">
                    <a className="btn cancel-btn" href="#">
                        <span>Cancel</span>
                    </a>
                    <a className="btn save-btn" onClick={this.props.editUser(this.props.name,this.props.email,this.props.avatar,this.props.phone)} href={'#'}>
                        <i className="icon-save"/>
                        <span>Save changes</span>
                    </a>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        name:state.login.user.name,
        email:state.login.user.email,
        avatar:state.login.user.avatar,
        phone:state.login.user.phone
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            editUser: editUser
        },
        dispatch
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonsProfile);