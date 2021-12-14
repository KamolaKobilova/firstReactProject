import React  from "react";

import './style.css'

function Gallery(){
    // const user = {name: "Kamola"}
    // const handleLogin = ()=>{
    //     alert(`${user.name} is  logged in`)
    //  }
    //  const handleLogOut = ()=>{
    //     alert(`${user.name}is logged out`)
    //  }

    return(
        <div className="gallery">
            {/* <h1>Stunning free images $ royalty free stock</h1><br />
            <h5>Over 2.4 million+ high quality stock images, videos and music shared by our talented community.</h5> */}
            <input type="text" placeholder="Search images, vectors,videos,music" /><br />
            <Gallery status="primary" style={{marginRight: 40}} title="sign up" onClick={()=> alert('hello')} />
            <Gallery status="danger"  title="sign out"  />
        </div>
        
        
    )
}
export default Gallery;