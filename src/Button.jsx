import React from "react";
 
export default function Button(props){
    const {color, title = 'Save'} = props;
    return(
        <button className={`btn btn-${color} rounded pill`}>
          {title}
        </button>
    )
}