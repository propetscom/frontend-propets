import React from "react";
import Home from "./Home";
import {connect} from "react-redux";
import Lost from "./lost/Lost";
import Found from "./Found";
import Services from "./Services";
import Favorites from "./Favorites";
import Profile from "./profile/Profile";
import AddNewPost from "./addingNewPost/AddNewPost";
import {bindActionCreators} from "redux";
import {getLostPosts} from "../../reduxTools/actions/LostPostAction";

class Content extends React.Component{

    componentDidMount() {
        if(this.props.pageMenu === 'lost') {
            this.props.getLostPosts();
        }
    }
    render() {
      //  console.log('this.props.match.params.id' + this.props.match.params.id);
        console.log('content privet');
            switch(this.props.pageMenu){
                case 'home':
                    return  (
                    <Home/>);
                case 'newPost':
                    return (
                        <AddNewPost/>
                        );
                case 'lost':
                    return <Lost/>;
                case 'found':
                    return <Found/>;
                case 'services':
                    return <Services/>;
                case 'favorites':
                    return <Favorites/>;
                case 'profile':
                    return <Profile/>;
                default: return <Home/>
            }
    }

}
const mapStateToProps = (state) => {
    return {
        pageMenu: state.general.pageMenu,
        postsLost: state.lost.posts,
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getLostPosts: getLostPosts
        },
        dispatch
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(Content);