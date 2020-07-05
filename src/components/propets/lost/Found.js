import * as React from "react";
import Navigation from "./Navigation";
import PostLostFound from "./PostLostFound";
import Map from "./Map";
import {connect} from "react-redux";

class Found extends React.Component{
    render() {
        return (
            <div className={'lost-content'}>
                <Navigation/>
                <div className={'content-lost'}>
                    <div className={'page_content'}>
                        {console.log('lost post: ' + this.props.postsFound)}
                        {this.props.postsFound ? this.props.postsFound.map((post, index) => <PostLostFound
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
        postsFound: state.found.posts,
        pagePosts: state.found.pagePosts
    }
};

export default connect(mapStateToProps)(Found);