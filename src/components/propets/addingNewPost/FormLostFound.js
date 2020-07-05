import * as React from "react";
import {textFoundForDescription} from "../../../utils/Const";

class FormLostFound extends React.Component{
    render() {
        return(
            <div className={'lost-new-post-left'}>
                <div><label>Type:</label>
                    <select name={'type'}>
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Parrot</option>
                        <option>Other</option>
                    </select>
                </div>
                <div><label>Sex:</label>
                    <select name={'sex'}>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Unknown</option>
                    </select>
                </div>

                <div><label>Breed:</label>
                    <input type={'text'} placeholder={'Golden Retriever'}/>
                </div>

                <div><label>Color:</label>
                    <input type={'text'} placeholder={'Beige'}/>
                </div>

                <div><label>Height:</label>
                    <select name={'height'}>
                        <option>up to 45 cm</option>
                        <option>45-70 cm</option>
                        <option>more 70 cm</option>
                    </select>
                </div>
                <div>
                    <label className={'post-text post-text-label'}>Distinktive features::
                        <div className={'post-text-span'}>up to 60 char</div>
                    </label>
                    <textarea placeholder={'blue collar with stars, no left ear, damaged tail'}></textarea>
                </div>
                <div>
                    <label className={'post-text post-text-label'}>Description:
                        <div className={'post-text-span'}>up to 150 char</div>
                    </label>
                    <textarea placeholder={textFoundForDescription}></textarea>
                </div>
                <div>
                    <label className={'post-text post-text-label'}>Location:
                    </label>
                    <textarea></textarea>
                </div>

            </div>
        )
    }

}
export default FormLostFound;