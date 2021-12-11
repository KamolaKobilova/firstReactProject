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
            <ul className="right">
                <li className="item">Explore</li>
                <li className="item">Log in</li>
                <li className="item">Join</li>
                <li className="item"><button>upload</button></li>
            </ul>
            </div>
            
            
        )
    }
}
export default Header;