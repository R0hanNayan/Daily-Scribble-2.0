import React, {useState} from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

function Menu(){
    return (
        <>
            <p id="menuItems"><a style={{textDecoration: 'none', color: "inherit"}} href="/homepage">Home</a></p>
            <p id="menuItems"><a style={{textDecoration: 'none', color: "inherit"}} href="/compose">Compose</a></p>
            <p id="menuItems"><a style={{textDecoration: 'none', color: "inherit"}} href="#posts">Posts</a></p>
            <p id="menuItems"><a style={{textDecoration: 'none', color: "inherit"}} href="/contact">Contact</a></p>
            <button id="profile"><a style={{textDecoration: 'none', color: "inherit"}} href="/profile">Profile Name</a></button>
        </>
    );
}

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="Navbar">
            <div className="Navbar-title">
                <h1 id="navTitle">THE DAILY SCRIBBLE</h1>
                <h3 id="navSubtitle">Scribble On</h3>
            </div>
            <div className="Navbar-menu">
                <Menu />
            </div>
            <div className="dropDownMenu">
                    {toggleMenu ?
                        <RiCloseLine color="black" size={30} onClick={()=>{setToggleMenu(false)}}/>:
                        <RiMenu3Line color="black" size={30} onClick={()=>{setToggleMenu(true)}}/>
                    }
                    {toggleMenu ?
                        <div className="dropDownMenuContainer">
                            <div className="dropDownMenuContainerLinks"> 
                                <Menu />
                            </div>
                        </div>:
                        null
                    }
            </div>
        </div>
    )
};

export default Navbar;