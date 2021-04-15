import React from "react"
import cafe from './Pictures/ios-cafe.svg';

function ProgressBar(){
    return(
        <div>
            <img src={cafe} className="Progress-bar"/>
            <img src={cafe} className="Progress-bar"/>
            <img src={cafe} className="Progress-bar"/>
            <img src={cafe} className="Progress-bar"/>
            <img src={cafe} className="Progress-bar"/>
        </div>  
        )
}

export default ProgressBar;