import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {editUser} from "../../../reduxTools/actions/EditUserAction";
import {Link} from "react-router-dom";

class ButtonsProfile extends React.Component {
    render() {
        return (
            <div className="footer-sign right">
                <div className="footer-sign-right">
                    <Link to={'propets/home'}>
                        <div className="btn cancel-btn">
                            <span>Cancel</span>
                        </div>
                    </Link>
                    <Link to={'/propets/home'}>
                        <div className="btn save-btn"
                             onClick={this.props.editUser(this.props.name, this.props.avatar, this.props.phone)}>
                            <i className="icon-save"/>
                            <span>Save changes</span>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.login.user.name,
        avatar: state.login.user.avatar,
        phone: state.login.user.phone
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