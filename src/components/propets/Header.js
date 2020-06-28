import style from '../../css/home.modules.css'

import React from "react";
import {Link} from "react-router-dom";


class Header extends React.Component{

    render() {
        return(
            <header className="header">
                <div className="header-left">
                    <div className="logo"/>
                </div>
                <div className="header-right">
                    <Link to={'/propets/newPost'}>
                        <div className="btn button-header-home">
                            <i className="plus"/>
                            <span className="button-header-home-text">Add new</span>
                        </div>
                    </Link>
                </div>
            </header>
        )
    }

}

export  default Header;