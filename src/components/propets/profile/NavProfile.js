
import style from '../../../css/profile.modules.css'
import React from "react";

class NavProfile extends React.Component{
    render() {
        return(
            <div>
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