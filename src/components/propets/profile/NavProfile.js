import React from "react";

class NavProfile extends React.Component{
    render() {
        return(
            <div className="nav">
                <ul className="links">
                    <li className="sign-link">
                        <p className={'btn-sign'}>My Profile</p>
                    </li>
                    <li className="sign-link">
                        <p className={'btn-sign active'}>Activities</p>
                    </li>
                </ul>
            </div>
        )
    }

}
export default NavProfile;