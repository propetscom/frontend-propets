import * as React from "react";
import style from '../../../css/lost.modules.css'
class Navigation extends React.Component{
    render() {
        return(
            <div className={'lost-navigation'}>
                <input className={'lost-nav-input lost-nav-type'} name={'type'} type={'text'} placeholder={'Type'}/>
                <input className={'lost-nav-input lost-nav-type'} name={'breed'} type={'text'} placeholder={'Breed'}/>
                <input className={'lost-nav-additional lost-nav-input'} name={'additional'} type={'text'} placeholder={'Additional features'}/>
                <input className={'lost-nav-input lost-nav-location'} name={'location'} type={'text'} placeholder={'Location'}/>
            </div>
        )
    }

}
export default Navigation;