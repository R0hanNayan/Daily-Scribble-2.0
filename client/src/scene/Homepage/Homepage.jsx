import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../../components/Navbar/Navbar";
import Posts from "../../components/Posts/Posts";

function Homepage({setLoggedUser}){

    return(
        <div>
            <Navbar />
            <Posts />
            {/* <p>Login Success!</p>
            <p>Welcome To HomePage!</p> */}
            {/* <button type="submit" onClick={()=>{setLoggedUser({})}}>Logout</button> */}
        </div>
    )
};

export default Homepage;