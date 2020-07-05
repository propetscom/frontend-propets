
import React from "react";
import Header from "./Header";
import Main from "./Main";
import {bindActionCreators} from "redux";
import {pageAction} from "../../reduxTools/actions/GeneralAction";
import {connect} from "react-redux";


class Propets extends React.Component {
    componentDidMount() {
        console.log('props: ' + this.props);
        this.props.changePage(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        console.log("component propets privet");
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.changePage(this.props.match.params.id)
        }
    }

    render() {
       console.log("propets privet");
        return (
            <div className={'wrapper'}>
                <Header/>
                <Main/>
            </div>

        )
    }

}
const mapStateToProps = (state) => {
    return {
        page: state.general.page
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            changePage: pageAction
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Propets);