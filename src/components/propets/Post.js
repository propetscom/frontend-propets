import React from "react";
import ImagesPost from "./ImagesPost";
import {bindActionCreators} from "redux";
import {getPosts, pagePostsAction} from "../../reduxTools/actions/PostAction";
import {changeFavoritesPost, getFavorites} from "../../reduxTools/actions/FavoritesAction";
import {connect} from "react-redux";

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            allText: false,
            favorite: false,
            favoriteArray: [],
            menu: false
        };
    }

    handleText = () => {
        if (!this.state.allText) {
            this.setState({
                allText: true
            })
        } else {
            this.setState({
                allText: false
            })
        }
    };

    handleFavorite = () => {

        if (!this.state.favorite) {
            this.setState({
                favorite: true
            });
            this.props.changeFavorites(this.props.token,this.props.emailUser,this.props.id, 'put');
        }
        if (this.state.favorite) {
            this.setState({
                favorite: false
            });
            this.props.changeFavorites(this.props.token, this.props.emailUser, this.props.id, 'delete');
        }

    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.emailUser !== prevProps.emailUser) {
            this.props.getFavorites(this.props.emailUser);
        }
    }


    componentDidMount(){
        //    console.log('post getfavorites');
      //     this.props.getFavorites(this.props.emailUser);
           console.log('home arrayFavorites : '+ this.props.arrayFavorites);
            if(this.props.arrayFavorites) {
               this.props.arrayFavorites.forEach((post) => {
                    console.log(post.id);
                    let array = this.state.favoriteArray;
                    array.push(post.id);
                    this.setState({
                        favoriteArray: array
                    })
                });
               //console.log('index: ' + index);
               let index = this.state.favoriteArray.indexOf(this.props.id);
                if (index !== -1) {
                    this.setState({
                            favorite: true
                        }
                    )
                } else {
                    this.setState({
                        favorite: false
                    })
                }
            }
            const monthNames = [
                "January", "February", "March",
                "April", "May", "June",
                "July", "August", "September",
                "October", "November", "December"
            ];
            let dateNew = new Date(this.props.datePost);
            let minutes = dateNew.getMinutes();
            let datePost;
            if (minutes < 10) {
                datePost = `${dateNew.getDate()} ${monthNames[dateNew.getMonth()]} at ${dateNew.getHours()}:0${minutes}`;
            } else {
                datePost = `${dateNew.getDate()} ${monthNames[dateNew.getMonth()]} at ${dateNew.getHours()}:${minutes}`;
            }
            this.setState({
                date: datePost
            });
        }

        render(){
    //        console.log('favorite'+ this.state.favorite);
            console.log('post privet');
            return (
                <div className="post">
                    <div className="page_header_img">
                        <img className="page_img_user" src={this.props.avatar} alt="user"/>
                    </div>
                    <div className="page_main">
                        <div className="page_header">
                            <div className="page_header_right">
                                <div className="page_header_name">{this.props.username}</div>
                                <div className="page_header_time">{this.state.date}</div>
                            </div>
                        </div>
                        <ImagesPost images={this.props.images}/>
                        <div className={this.state.allText ? 'page-text page-text-height' : 'page-text'}>
                            {this.props.text}
                        </div>
                        <div className={(!this.props.text) || (this.props.text.length < 180) ? 'hidden' : ''}>
                            <a onClick={this.handleText}
                               className={this.state.allText ? 'hidden' : 'page-text-link'}>...more</a>
                            <a onClick={this.handleText}
                               className={this.state.allText ? 'page-text-link' : 'hidden'}>hidden</a>
                        </div>
                    </div>
                    <div className={'div-icon-star'}>
                        <div className={'icon-menu'}></div>
                        <div className={this.state.menu ? 'div-menu' : 'hidden'}>
                            <p>Hide from feed</p>
                            <p>Unfollow</p>
                        </div>
                        <div className={this.state.favorite ? 'icon-star-favorite':'icon-star'} onClick={this.handleFavorite}></div>
                    </div>
                </div>
            )
        }
    }
const mapStateToProps = (state) => {
    return {
        emailUser: state.login.user.email,
        arrayFavorites: state.favorites.arrayFavorites,
        token: state.login.idToken
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            changePagePost: pagePostsAction,
            favorites: getFavorites,
            getPost: getPosts,
            getFavorites: getFavorites,
            changeFavorites: changeFavoritesPost
        },
        dispatch
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);