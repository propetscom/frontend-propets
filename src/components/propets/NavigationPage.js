import React from "react";
import {bindActionCreators} from "redux";
import {getPosts, pagePostsAction} from "../../reduxTools/actions/PostAction";
import {getFavorites} from "../../reduxTools/actions/FavoritesAction";
import {connect} from "react-redux";
class NavigationPage extends React.Component{



    render() {
        return(
            <div className={'home-page'} onClick={() => this.props.handlePagePosts(this.props.index)}>
                {this.props.pagePosts}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        email: state.login.user.email,
        page: state.posts.pagePosts,
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            changePagePost: pagePostsAction,
            getFavorites: getFavorites,
            getPosts: getPosts
        },
        dispatch
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(NavigationPage);