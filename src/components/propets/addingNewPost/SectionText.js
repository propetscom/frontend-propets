
import * as React from "react";
import Text from "./Text";

function SectionText() {

    return(
        <div className={'post-div'}>
            <label className={"post-text post-text-label"}>Text:
                <div className={'post-text-span'}>up to 1500 char</div>
            </label>
            <Text/>
        </div>
    )

}
export default SectionText;