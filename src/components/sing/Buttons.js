import React from "react";

class Buttons extends React.Component {
    render() {
        return (
            <div className="footer-sign">
                <div className="footer-sign-left">
                    By clicking “Submit”, you agree to us processing your information in accordance with <u> these
                    terms</u>.
                </div>
                <div className="footer-sign-right">
                    <a className="btn cancel-btn" href="#">
                        <span>Cancel</span>
                    </a>
                        <a className="btn submit-btn" onClick={this.props.handleFormData} href={'#'}>
                            <i className="icon-found"/>
                            <span>Submit</span>
                        </a>
                </div>
            </div>
        )
    }
}

export default Buttons;