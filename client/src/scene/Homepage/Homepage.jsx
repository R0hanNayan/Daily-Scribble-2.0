import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Posts from "../../components/Posts/Posts";
import Compose from "../Compose/Compose";

function Homepage({setLoggedUser}){
    const [pageType, setPage] = useState("homepage");

    const handleClick = (e) =>{
        setPage(e);
    }

    return(
        <div>
            
            {pageType === "homepage" ? (
                <div>
                    <Navbar handleClick = {handleClick}/>
                    <Posts />
                </div>
            ):(
                pageType === "compose" ? (
                    <div>
                        {/* <Navbar handleClick = {handleClick}/> */}
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