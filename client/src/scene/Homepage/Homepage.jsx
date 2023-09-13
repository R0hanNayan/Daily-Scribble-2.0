import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Posts from "../../components/Posts/Posts";
import Compose from "../Compose/Compose";
import Home from "../../components/Home/Home";

function Homepage({setLoggedUser, user}){
    const [pageType, setPage] = useState("homepage");

    const handleClick = (e) =>{
        setPage(e);
    }

    return(
        <div>
            <Navbar handleClick = {handleClick} user={user}/>
            {pageType === "homepage" ? (
                <div>
                    <div className="Home-Component">
                        <Home />
                    </div>
                    {/* <div className="Post-Component">
                        <Posts />
                    </div> */}
                </div>
            ):(
                pageType === "compose" ? (
                    <div>
                        <Compose handleClick={handleClick}/>
                    </div>
                ) : (
                    null
                )
            )
        }
        
            {/* <p>Login Success!</p>
            <p>Welcome To HomePage!</p> */}
            {/* <button type="submit" onClick={()=>{setLoggedUser({})}}>Logout</button> */}
        </div>
    )
};

export default Homepage;