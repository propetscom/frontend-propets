import * as React from "react";
import Post from "./Post";
import {bindActionCreators} from "redux";
import {getFavorites} from "../../reduxTools/actions/FavoritesAction";
import {connect} from "react-redux";


class Favorites extends React.Component {

    componentDidUpdate(prevProps) {
        //  console.log("component update home privet");
        //   console.log(this.props.email);
        if (this.props.pagePosts !== prevProps.pagePosts || this.props.email !== prevProps.email) {
            this.props.getFavorites(this.props.email);

        }
    }

    componentDidMount() {

        if (this.props.email) {
            this.props.getFavorites(this.props.email);

        }
    }

    findPostById = () => {

    };

    render() {
        return (
            <div className={'content'}>
                <div className={'post-title'}>Your favorites. Find them here anytime.</div>
                <section className="page_content">
                    {this.props.arrayFavorites ? this.props.arrayFavorites.map((post, index) => <Post {...post}/>) : ''}
                </section>
            </div>)

    }
}

    const mapStateToProps = (state) => {
    return {
        email: state.login.user.email,
        arrayFavorites: state.favorites.arrayFavorites
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
    export default connect(mapStateToProps, mapDispatchToProps)(Favorites);