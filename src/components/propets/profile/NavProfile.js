
import style from '../../../css/profile.module.css'

import React from "react";

class NavProfile extends React.Component{
    render() {
        return(
            <div className="nav">
                <ul className="links">
                    <li className="profile-link">
                        <p className={'btn-profile'}>My Profile</p>
                    </li>
                    <li className="profile-link">
                        <p className={'btn-profile active'}>Activities</p>
                    </li>
                </ul>
            </div>
        )
    }

}
export default NavProfile;