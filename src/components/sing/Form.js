import React from "react";

import Nav from "./Nav";
import SignUp from "./SignUp";

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sign: true,
            passwordError: false,

        }
    }
handleSing=(section) => {
        this.setState({
            sign: section
        })

};
    render() {
        return(
            <div className="main-sign">
                <div className="sign">
                    <span className="title"><b>Welcome!</b> Please sign in / sign up to continue</span>
                </div>
                <Nav handleSing={this.handleSing} sing={this.state.sign}/>
                <SignUp passwordEror={this.state.passwordError} sign={this.state.sign}/>

                </div>

        )
    }
}

export default Form;