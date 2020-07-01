import * as React from "react";
import style from '../../../css/lost.modules.css'
class Navigation extends React.Component{
    render() {
        return(
            <div>
                <input className={'lost-nav-input'} name={'type'} type={'text'} placeholder={'Type'}/>
                <input name={'breed'} type={'text'} placeholder={'Breed'}/>
                <input name={'additional'} type={'text'} placeholder={'Additional features'}/>
                <input name={'location'} type={'text'} placeholder={'Location'}/>
            </div>
        )
    }

}
export default Navigation;