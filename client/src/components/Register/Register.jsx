import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

function Register(){
    const navigate = useNavigate();

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
            const response =  await axios.post(`${"https://dailyscribble.onrender.com" || "http://localhost:3000"}/auth/register`, user, {
                method: "POST",
                headers: {
                    'Content-Type':'application/json'
                }
            })     //Sending data to Backend
            .then(res => {
                    if(res.data.exists === true){
                        alert("Email Id Already Registered");   //Checking if user already registered
                        navigate("/")
                    }else{
                        alert("Registration Successful!");
                        navigate("/");
                    }
                }
            )
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
            <button type="submit" onClick={()=>{navigate("/")}}>Already Have an Account?</button>
        </div>
    ) 
}

export default Register;