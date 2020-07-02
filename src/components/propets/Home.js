import React from "react";
import Post from "./Post";
import NavigationPage from "./NavigationPage";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getPosts, pagePostsAction} from "../../reduxTools/actions/PostAction";
import {getFavorites} from "../../reduxTools/actions/FavoritesAction";
import SidebarRight from "./SidebarRight";

class Home extends React.Component {

    handlePagePosts = (page) => {

        this.props.changePagePost(page);

    };

    componentDidUpdate(prevProps) {
      //  console.log("component update home privet");
     //   console.log(this.props.email);
        if(this.props.pagePosts !== prevProps.pagePosts || this.props.email !== prevProps.email){
            this.props.getFavorites(this.props.email);
            this.props.getPosts(this.props.pagePosts,this.props.token);
        }
    }

    componentDidMount() {
        if(this.props.email) {
            this.props.getFavorites(this.props.email);
            this.props.getPosts(this.props.pagePosts,this.props.token);
        }

    }

    render() {
        //console.log('home privet');
        //  console.log('email content' + this.props.emailUser);
       // console.log("posts"+this.props.posts);
      //  console.log("numbers"+this.props.numbers);

        return (
            <div className={'content'}>
                <section className="page_content">
                    {console.log('post'+this.props.posts[0])}
                    {this.props.posts[0] ? this.props.posts.map((post, index) => <Post key={post.id} {...post}/>) : ''}
                    <div className={'page-nav'}>
                        {this.props.numbers.map((page, index) => <NavigationPage pagePosts={page} index={index} handlePagePosts={this.handlePagePosts}/>)}
                    </div>
                </section>
                <SidebarRight/>
            </div>)
    }

}

const mapStateToProps = (state) => {
    return {
        email: state.login.user.email,
        pagePosts: state.posts.pagePosts,
        posts: state.posts.posts,
        numbers: state.posts.count,
        token: state.login.idToken
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);