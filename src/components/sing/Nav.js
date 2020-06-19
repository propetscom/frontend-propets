import React from "react";

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    changeClassName(word) {

        console.log(word);
        if (word === 'sign') {
            this.props.handleSing(true);
        } else {
            this.props.handleSing(false);
        }
    };

    render() {
        return (
            <div className="nav">
                <ul className="links">
                    <li className="sign-link" onClick={() => this.changeClassName('sign')}>
                        <p className={this.props.sing ? 'btn-sign' : 'btn-sign active'}>Sign up</p>
                    </li>
                    <li className="sign-link" onClick={() => this.changeClassName('login')}>
                        <p className={!this.props.sing ? 'btn-sign' : 'btn-sign active'}>Sign in</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;