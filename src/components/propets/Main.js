import React from "react";
import Sidebar from "./Sidebar";
import SidebarRight from "./SidebarRight";
import Content from "./Content";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getFavorites} from "../../reduxTools/actions/FavoritesAction";

class Main extends React.Component {
    componentDidMount( ) {
        console.log("component main privet");
    }

    render() {
        console.log('main privet');
        return (
            <div className={'main'}>
                <Sidebar/>
                <Content />
                <SidebarRight/>
            </div>

        )
    }

}
const mapStateToProps = (state) => {
    return {
        email: state.login.user.email
        
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getFavorites: getFavorites
        },
        dispatch
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(Main)