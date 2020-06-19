import * as React from "react";
import {textNewPost} from "../../../utils/Const";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {textAction} from "../../../reduxTools/actions/AddingNewPostAction";


class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        });
        this.props.changeText(e.target.value);

    };

    render() {
        return (
            <textarea className={'post-textarea'} value={this.state.text} placeholder={textNewPost}
                      onChange={this.handleText}/>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        text: state.newPost.text
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            changeText: textAction
        },
        dispatch
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(Text);