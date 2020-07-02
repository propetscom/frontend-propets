import * as React from "react";

class PostLostFound extends React.Component {
    render() {
        return (
            <div className={'post-lost-found'}>
                <div className={'lost-img'}>

                </div>
                <div className={'lost-inform'}>
                    <span className={'lost-inform-title'}>Dog, Golden Retriever</span>
                    <div className={'lost-inform-items'}>
                        <div className={'lost-inform-item'}>
                            <div><span className={'span-item'}>Color:</span> golden</div>
                            <div><span className={'span-item'}>Sex:</span> male</div>
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
                        <span>Florentin, 27, Tel Aviv</span>

                    </div>
                    <div className={'lost-user-inform'}>
                        <div className={'lost-user-name'}>
                            <div className="page_header_img">
                                <img className="page_img_user" src={''} alt="user"/>
                            </div>
                            <div className="page_header_right">
                                <div className="page_header_name">John Goodboi</div>
                                <div className="page_header_time">Dec 12, 2019</div>
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