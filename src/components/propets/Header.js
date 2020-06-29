import style from '../../css/home.modules.css'

import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";


class Header extends React.Component {

    getButtons = () => {
        switch (this.props.pageMenu) {
            case "home":
                return(
                    <div className="header-right">
                        <Link to={'/propets/newPost'}>
                            <div className="btn button-header-home">
                                <i className="plus"/>
                                <span className="button-header-home-text">Add new</span>
                            </div>
                        </Link>
                    </div>
                );
            case 'lost':
            case 'found':
                return (
                    <div className="header-right-lost">
                        <div className="btn-lost button-header-lost">
                            <i className="lost-icon-search"/>
                            <span className="button-header-lost-text">I lost my pet</span>
                        </div>
                        <div className="btn-lost button-header-found">
                            <i className="found-icon-search"/>
                            <span className="button-header-fount-text">I found a pet</span>
                        </div>
                    </div>
                );
            case 'profile':
                return '';
            default:
                return (
                    <div className="header-right">
                        <Link to={'/propets/newPost'}>
                            <div className="btn button-header-home">
                                <i className="plus"/>
                                <span className="button-header-home-text">Add new</span>
                            </div>
                        </Link>
                    </div>
                )
        }
    };


render()
{
    return (
        <header className="header">
            <div className="header-left">
                <div className="logo"/>
            </div>
            {this.getButtons()}
        </header>
    )
}

}
const mapStateToProps = (state) => {
    return {
        pageMenu: state.general.pageMenu
    }
};

export default connect(mapStateToProps)(Header);