import React from "react"
import cafeyes from './Pictures/Cup icon positive.svg';
import cafeno from './Pictures/Cup icon negative.svg';

function ProgressBar(props){
    function cups(count, total){
        let outputArray = [];
        for (let x = 0; x < count && x < total; x++) {
            outputArray.push(<img src={cafeyes} className="Progress-bar"/>)
        }
        for (let y = outputArray.length; y < total; y++) {
            outputArray.push(<img src={cafeno} className="Progress-bar"/>)
        }
        return outputArray
    }
    return(
        <div>
            {
                cups(props.count, props.total)
            }
        </div>  
        )
}

export default ProgressBar;