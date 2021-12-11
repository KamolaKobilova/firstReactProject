import React  from "react";
import Button from "./Button";
import './style.css'

function Gallery(){
    return(
        <div className="gallery">
            <h1>Stunning free images $ royalty free stock</h1><br />
            <h5>Over 2.4 million+ high quality stock images, videos and music shared by our talented community.</h5>
            <input type="text" placeholder="Search images, vectors,videos,music" /><br />
        
            <Button color="primary" title="Login"/>
        </div>
        
        
    )
}
export default Gallery;