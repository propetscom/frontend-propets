import * as React from "react";
import PostTitle from "../addingNewPost/PostTitle";
import {postTitleProfile} from "../../../utils/Const";
import NavProfile from "./NavProfile";
import ProfileForm from "./ProfileForm";

class Profile extends React.Component {

    render() {
        return (
            <div className={'content'}>
                <div className={'page_content'}>
                    <PostTitle title={postTitleProfile}/>
                    <NavProfile/>
                    <ProfileForm/>
                </div>
            </div>
        )
    }

}

export default Profile;