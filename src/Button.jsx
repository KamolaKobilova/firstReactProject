import React from "react";
import Gallery from "./Gallery";


 
export default function Button(props){
 

    const {status, title = 'Save', outline = false} = props;
    const className =`btn btn-${status}${outline ? 'outline-': ''} rounded-pill px-3`;
    return(
        <button {...props}className={className}>
           {title} 
        </button>
    )
}

// outline === true? 'btn-outline' : ""