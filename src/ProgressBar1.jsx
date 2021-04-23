import React from "react"
import cafeyes from './Pictures/Cup icon positive.svg';
import cafeno from './Pictures/Cup icon negative.svg';

function ProgressBar(){
    return(
        <div>
            <img src={cafeyes} className="Progress-bar"/>
            <img src={cafeno} className="Progress-bar"/>
            <img src={cafeno} className="Progress-bar"/>
            <img src={cafeno} className="Progress-bar"/>
            <img src={cafeno} className="Progress-bar"/>
        </div>  
        )
}

export default ProgressBar;