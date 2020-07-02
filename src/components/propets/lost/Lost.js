import * as React from "react";
import Navigation from "./Navigation";
import Map from "./Map";
import PostLostFound from "./PostLostFound";

class Lost extends React.Component{
    render() {
        return (
            <div className={'lost-content'}>
            <Navigation/>
            <div className={'content-lost'}>
                <div className={'page_content'}>
                    <PostLostFound/>
                </div>
                <Map/>
            </div>
            </div>
        )
    }

}

export default Lost;