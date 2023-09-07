import React from "react";
import ReactDOM from "react-dom";

function Homepage({setLoggedUser}){

    return(
        <div>
            <p>Login Success!</p>
            <p>Welcome To HomePage!</p>
            <button type="submit" onClick={()=>{setLoggedUser({})}}>Logout</button>
        </div>
    )
};

export default Homepage;