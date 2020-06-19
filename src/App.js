import React from 'react';
import './App.css';
import Login from "./components/sing/Login";
import Propets from "./components/propets/Propets";
import {Redirect, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {tokenAction} from "./reduxTools/actions/LoginAction";

class App extends React.Component {

    componentDidMount() {
        console.log("component app privet");
        this.props.token(localStorage.getItem("X-Token"));
        //  console.log('app user: ' + this.props.email);

    }

    render() {
        console.log('app privet');
        console.log('auth = ' + this.props.isAuthenticated);
        if(!this.props.isAuthenticated){
            return  <Route exact path={['/login','/','/propets', '/propets/:id']} component={Login}/>
        }else{
            return(
                <Switch>
                    <Route exact path={['/','/login','/propets', '/propets/:id']} exact render={(props) => <Propets {...props} />}>
                    </Route>
                </Switch>


            )}
        }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.login.isAuthenticated,
        email: state.login.user.email
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            token: tokenAction
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
