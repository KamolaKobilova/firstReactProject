import React, {Component} from "react";
import Button from "./Button";
import './style.css'


class Header extends Component {
    // const user = {name: "Kamola"}
    // const handleLogin = ()=>{
    //     alert(`${user.name} is  logged in`)
    //  }
    //  const handleLogOut = ()=>{
    //     alert(`${user.name}is logged out`)
    //  }
    render(){
       
        return(
            <div className="main">
                <ul>
                <li><h3>pixabay</h3></li>
                <li><p>Photos</p></li>
                <li><p>Illustrators</p></li>
                <li><p>Vectors</p></li>
                <li><p>Musics</p></li>
                <li><p>Sound effect</p></li>
            </ul>
            <ul className="right me-5">
                
                <Button status="primary" style={{marginRight: 30}} title="Explore"></Button>
                <Button status="warning" style={{marginRight: 30}} title="Log in" onClick={()=> alert('Please log in')}></Button>
                <Button status="primary" style={{marginRight: 30}} title="Sign up" onClick={()=> alert('Sign up')} />
                <Button status="danger"  title="Upload"  />
            </ul>
            </div>
            
            
        )
    }
}
export default Header;