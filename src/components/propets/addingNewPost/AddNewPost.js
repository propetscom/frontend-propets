import * as React from "react";
import {postTitleNewPost} from "../../../utils/Const";

import PostTitle from "./PostTitle";
import SectionText from "./SectionText";
import SectionImages from "./SectionImages";
import SectionButton from "./SectionButton";
import style from '../../../css/newpost.modules.css';

function AddNewPost () {

        return (
            <div className={'content'}>
                <div className={'page_content'}>
                    <PostTitle title={postTitleNewPost}/>
                    <div className={'post-new'}>
                        <SectionText/>
                        <SectionImages/>
                        <SectionButton/>
                    </div>

                </div>
            </div>
        )
}
export default AddNewPost;