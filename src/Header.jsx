import React, {Component} from "react";
import './style.css'


class Header extends Component {
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
                <button className="item mt-100">Explore</button>
                <button className="item">Log in</button>
                <button className="item">Join</button>
                <button className="item">upload</button>
            </ul>
            </div>
            
            
        )
    }
}
export default Header;