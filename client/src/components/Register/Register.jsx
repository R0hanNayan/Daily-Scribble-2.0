import React, { useState } from "react";
import axios from "axios";

function Register(){

    const [ user, setUser ] = useState({
        userName: "",
        email: "",
        password: "",
    });

    //Function to extract details from input
    const handleChange = (event)=>{
        const {name , value} = event.target;

        setUser({
            ...user,
            [name]: value
        })
    }

    //To take user to register page
    const registerUser = async () =>{
        const { userName, email, password } = user;
        //Checking if input is valid or Not
        if(userName && email && password){
            const response =  await axios.post("http://localhost:3000/auth/register", user, {
                method: "POST",
                headers: {
                    'Content-Type':'application/json'
                }
            })     //Sending data to Backend

        }else{
            alert("Invalid Input");
        }
    }

    return(
        <div className="Register Page">
            <h1>Register</h1>
            <input type="username" name="userName" value={user.userName} placeholder="Username" onChange={handleChange}/>
            <input type="email" name="email" value={user.email} placeholder="Email Id" onChange={handleChange}/>
            <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}/>
            <button type="submit" onClick={registerUser}>Register</button>
            <p>Or</p>
            <button type="submit">Already Have an Account?</button>
        </div>
    ) 
}

export default Register;