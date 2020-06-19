import React from "react";
import Logo from "./Logo";
import Form from "./Form";

class Login extends React.Component{
    render() {
        return(
            <div className="wrapper-sign">
                <div className={'form'}>
                    <Logo/>
                    <Form changePage={this.props.changePage}/>
                </div>
            </div>
        )
    }
}

export default Login;