import React, {useState} from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


function Menu({handleClick, user, setLoggedUser}){
    return (
        <>
            <p id="menuItems" onClick={() => handleClick("homepage")}>Home</p>
            <p id="menuItems" onClick={() => handleClick("compose")}>Compose</p>
            <p id="menuItems" onClick={() => handleClick("posts")}>Blogs</p>
            <button id="profile" onClick={() => handleClick("profile")}>{user.userName}</button>
            <button id="logout" onClick={()=>{setLoggedUser({})}}>Logout!</button>
        </>
    );
}

function Navbar({handleClick, user, setLoggedUser}) {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="Navbar">
            <div className="Navbar-title">
                <h1 id="navTitle">THE DAILY SCRIBBLE</h1>
                <h3 id="navSubtitle">Scribble On</h3>
            </div>
            <div className="Navbar-menu">
                <Menu handleClick={handleClick} user={user} setLoggedUser={setLoggedUser}/>
            </div>
            <div className="dropDownMenu">
                    {toggleMenu ?
                        <RiCloseLine color="black" size={30} onClick={()=>{setToggleMenu(false)}}/>:
                        <RiMenu3Line color="black" size={30} onClick={()=>{setToggleMenu(true)}}/>
                    }
                    {toggleMenu ?
                        <div className="dropDownMenuContainer">
                            <div className="dropDownMenuContainerLinks"> 
                                <Menu handleClick={handleClick} user={user} setLoggedUser={setLoggedUser}/>
                            </div>
                        </div>:
                        null
                    }
            </div>
        </div>
    )
};

export default Navbar;