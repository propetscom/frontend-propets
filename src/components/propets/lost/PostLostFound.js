import * as React from "react";
import {bindActionCreators} from "redux";
import {getPosts, pagePostsAction} from "../../../reduxTools/actions/PostAction";
import {getFavorites} from "../../../reduxTools/actions/FavoritesAction";
import {connect} from "react-redux";
import {getLostPosts} from "../../../reduxTools/actions/LostPostAction";
import ImagesPost from "../ImagesPost";

class PostLostFound extends React.Component {


    render() {
        return (
            <div className={'post-lost-found'}>

                <div className={'lost-img'}> <ImagesPost images={this.props.photos}/></div>
                <div className={'lost-inform'}>
                    <span className={'lost-inform-title'}>{this.props.type}, {this.props.breed}</span>
                    <div className={'lost-inform-items'}>
                        <div className={'lost-inform-item'}>
                            <div><span className={'span-item'}>Color:</span> golden</div>
                            <div><span className={'span-item'}>Sex:</span> {this.props.sex}</div>
                            <div><span className={'span-item'}>Height:</span> 45 cm</div>
                        </div>
                        <div className={'lost-inform-item'}>
                            <span className={'span-item'}>Distinctive features:</span> blue collar with stars, no left
                            ear, damaged tail.
                        </div>
                    </div>
                    <div className={'lost-inform-descr'}>
                        <span className={'span-item'}>Description:</span> brown fox jumps over a lazy dog.
                        DJs flock by when MTV ax quiz prog.
                        Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.
                    </div>
                    <div className={'lost-inform-location'}>
                        <span className={'icon-location'}> </span>
                        <span>{this.props.address.country || ''}, {this.props.address.street || ''} {this.props.address.building || ''}, {this.props.address.city || ''}</span>

                    </div>
                    <div className={'lost-user-inform'}>
                        <div className={'lost-user-name'}>
                            <div className="page_header_img">
                                <img className="page_img_user" src={this.props.avatar || ''} alt="user"/>
                            </div>
                            <div className="page_header_right lost-padding">
                                <div className="page_header_name ">{this.props.username || ''}</div>
                                <div className="page_header_time">{this.props.datePost}</div>
                            </div>
                        </div>
                        <div className={'lost-user-icons'}>
                            <div className={'icon-phone'}>
                            </div>
                            <div className={'icon-email'}></div>
                        </div>

                    </div>


                </div>
            </div>
        )
    }
}
export default PostLostFound;