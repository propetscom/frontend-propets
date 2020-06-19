import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {logoutUser} from "../../reduxTools/actions/LogoutAction";
import {Link, Router} from "react-router-dom";

class MenuUser extends React.Component {

/*    handleLogout = () => {
        console.log('handle logout');
        this.props.logout();
        return (<Redirect to={'/login'} component={Login}/>)

    };*/

    render() {
        console.log('menu user:' + this.props.user);
        return (
            <nav className="menu-user">
                <ul className="menu-user-items">
                    <Link to={'/propets/profile'}>
                        <div className="menu-user-item menu-link-activ">
                            <div className="user-link">
                                <div className="user-img">
                                    <img className="img-photo" src={this.props.avatar} alt="user"/>
                                </div>
                                <div className="user-name">{this.props.name}</div>
                            </div>
                        </div>
                    </Link>
                    <li className="menu-user-item">
                        <div className="logout-link" onClick={() => this.props.logout()}>
                            <i className="logout-icon"></i>
                            <span className="logout-link-text">Logout</span>
                        </div>

                    </li>
                </ul>
            </nav>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        name: state.login.user.name,
        avatar: state.login.user.avatar,
        pageMenu: state.general.pageMenu
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            logout: logoutUser
        },
        dispatch
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(MenuUser);