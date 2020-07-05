import React from "react";
import Home from "./Home";
import {connect} from "react-redux";
import Lost from "./lost/Lost";
import Found from "./lost/Found";
import Services from "./Services";
import Favorites from "./Favorites";
import Profile from "./profile/Profile";
import AddNewPost from "./addingNewPost/AddNewPost";
import {bindActionCreators} from "redux";
import {getLostPosts} from "../../reduxTools/actions/LostPostAction";
import {getFoundPosts} from "../../reduxTools/actions/FoundAction";
import NewPostLost from "./lost/NewPostLost";

class Content extends React.Component {
    /*
        componentDidMount() {
            if(this.props.pageMenu === 'lost') {
             //   this.props.getLostPosts();
            }
            if(this.props.pageMenu === 'found') {
             //   this.props.getFoundPosts();
            }
        }*/
    render() {
        //  console.log('this.props.match.params.id' + this.props.match.params.id);
        // console.log('content privet');
        switch (this.props.pageMenu) {
            case 'home':
                return (
                    <Home/>);
            case 'newPost':
                return (
                    <AddNewPost/>
                );
            case 'lost':
                this.props.getLostPosts();
                return <Lost/>;
            case 'found':
                this.props.getFoundPosts();
                return <Found/>;
            case 'services':
                return <Services/>;
            case 'favorites':
                return <Favorites/>;
            case 'profile':
                return <Profile/>;
            case 'newPostLost':
                return <NewPostLost/>;
            default:
                return <Home/>
        }
    }

}

const mapStateToProps = (state) => {
    return {
        pageMenu: state.general.pageMenu
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getLostPosts: getLostPosts,
            getFoundPosts: getFoundPosts
        },
        dispatch
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(Content);