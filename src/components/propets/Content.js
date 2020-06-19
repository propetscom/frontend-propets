import React from "react";
import Home from "./Home";
import {connect} from "react-redux";
import Lost from "./Lost";
import Found from "./Found";
import Services from "./Services";
import Favorites from "./Favorites";
import Profile from "./Profile";
import AddNewPost from "./addingNewPost/AddNewPost";

class Content extends React.Component{

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
        pageMenu: state.general.pageMenu
    }
};
export default connect(mapStateToProps)(Content);