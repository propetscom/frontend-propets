import * as React from "react";
import PostTitle from "../addingNewPost/PostTitle";
import {postTitleProfile} from "../../../utils/Const";
import NavProfile from "./NavProfile";

class Profile extends React.Component{

    render() {
        return (
            <div>
            <PostTitle title={postTitleProfile}/>
            <NavProfile/>
            </div>


        )
    }

}

export default Profile;