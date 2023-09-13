import React, {useState} from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


function Menu({handleClick, user}){

    return (
        <>
            <p id="menuItems"><a style={{textDecoration: 'none', color: "inherit", cursor: "pointer"}} onClick={() => handleClick("homepage")}>Home</a></p>
            <p id="menuItems"><a style={{textDecoration: 'none', color: "inherit", cursor: "pointer"}} onClick={() => handleClick("compose")}>Compose</a></p>
            <p id="menuItems"><a style={{textDecoration: 'none', color: "inherit"}} href="/posts">Posts</a></p>
            <p id="menuItems"><a style={{textDecoration: 'none', color: "inherit"}} href="/contact">Contact</a></p>
            <button id="profile"><a style={{textDecoration: 'none', color: "inherit"}} href="/profile">{user.userName}</a></button>
        </>
    );
}

function Navbar({handleClick, user}) {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="Navbar">
            <div className="Navbar-title">
                <h1 id="navTitle">THE DAILY SCRIBBLE</h1>
                <h3 id="navSubtitle">Scribble On</h3>
            </div>
            <div className="Navbar-menu">
                <Menu handleClick={handleClick} user={user}/>
            </div>
            <div className="dropDownMenu">
                    {toggleMenu ?
                        <RiCloseLine color="black" size={30} onClick={()=>{setToggleMenu(false)}}/>:
                        <RiMenu3Line color="black" size={30} onClick={()=>{setToggleMenu(true)}}/>
                    }
                    {toggleMenu ?
                        <div className="dropDownMenuContainer">
                            <div className="dropDownMenuContainerLinks"> 
                                <Menu handleClick={handleClick} user={user}/>
                            </div>
                        </div>:
                        null
                    }
            </div>
        </div>
    )
};

export default Navbar;