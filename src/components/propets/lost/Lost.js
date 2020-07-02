import * as React from "react";
import Navigation from "./Navigation";
import Map from "./Map";
import PostLostFound from "./PostLostFound";
import {bindActionCreators} from "redux";
import {getLostPosts} from "../../../reduxTools/actions/LostPostAction";
import {connect} from "react-redux";

class Lost extends React.Component {

    render() {
        return (
            <div className={'lost-content'}>
                <Navigation/>
                <div className={'content-lost'}>
                    <div className={'page_content'}>
                        {console.log('lost post: ' + this.props.postsLost)}
                        {this.props.postsLost ? this.props.postsLost.map((post, index) => <PostLostFound
                            key={post.id} {...post}/>) : ''}
                    </div>
                    <Map/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postsLost: state.lost.posts,
        pagePosts: state.lost.pagePosts
    }
};

export default connect(mapStateToProps)(Lost);