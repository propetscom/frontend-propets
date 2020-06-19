import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {pageAction} from "../../reduxTools/actions/GeneralAction";

class Menu extends React.Component {

    render() {

        return (
            <nav className="menu">
                <ul className="menu-items">
                    <li className="menu-item">
                        <Link to={'/propets/home'}>

                            <div className={this.props.pageMenu === 'home' ? "menu-items-link-active menu-items-link" : 'menu-items-link'}>
                                <i className="menu-icon"/>
                                <span className='menu-items-link-text'>Home</span>
                                {console.log('page+++'+this.props.pageMenu)}
                                <div className={this.props.pageMenu === 'home' ? 'div-active' : 'hidden'}/>
                            </div>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to={'/propets/lost'}>
                            <div className={this.props.pageMenu === 'lost' ? "menu-items-link-active menu-items-link" : 'menu-items-link'}>
                                <i className="menu-icon"/>
                                <span className="menu-items-link-text">Lost</span>
                                <div className={this.props.pageMenu === 'lost' ? 'div-active' : 'hidden'}/>
                            </div>
                        </Link>
                    </li>

                    <li className="menu-item">
                        <Link to={'/propets/found'}>
                            <div className={this.props.pageMenu === 'found' ? "menu-items-link-active menu-items-link" : 'menu-items-link'}>
                                <i className="menu-icon"></i>
                                <span className="menu-items-link-text">Found</span>
                                <div className={this.props.pageMenu === 'found' ? 'div-active' : 'hidden'}></div>
                            </div>
                        </Link>
                    </li>

                    <li className="menu-item">
                        <Link to={'/propets/services'}>
                            <div className={this.props.pageMenu === 'services' ? "menu-items-link-active menu-items-link" : 'menu-items-link'}>
                                <i className="menu-icon"></i>
                                <span className="menu-items-link-text">Services</span>
                                <div className={this.props.pageMenu === 'services' ? 'div-active' : 'hidden'}></div>
                            </div>
                        </Link>
                    </li>

                    <li className="menu-item">
                        <Link to={'/propets/favorites'}>
                            <div className={this.props.pageMenu === 'favorites' ? "menu-items-link-active menu-items-link" : 'menu-items-link'}>
                                <i className="menu-icon"></i>
                                <span className="menu-items-link-text">Favorites</span>
                                <div className={this.props.pageMenu === 'favorites' ? 'div-active' : 'hidden'}></div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        pageMenu: state.general.pageMenu
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
          changePage: pageAction
        },
        dispatch
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);