import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css"; 
import URL from "../../URL";

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
            const response =  await axios.post(`${URL || "http://localhost:3000"}/auth/register`, user, {
                method: "POST",
                headers: {
                    'Content-Type':'application/json'
                }
            })     //Sending data to Backend
            .then(res => {
                    // console.log(res.data)
                    if(res.data.exists === true){
                        alert("User Already Registered");   //Checking if user already registered
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
        <div className="RegisterPage">
            <div className="leftHalf">
            </div>
            <div className="rightHalf">
                <h1 id="RegTitle">The Daily Scribble!</h1>
                    <div className="RegisterPage-inputs">
                        <h2 id="signUp">Sign Up</h2>
                        <input id="RegInputs" type="username" name="userName" value={user.userName} placeholder="Username" onChange={handleChange}/>
                        <input id="RegInputs" type="email" name="email" value={user.email} placeholder="Email Id" onChange={handleChange}/>
                        <input id="RegInputs" type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}/>
                        <button id="RegBtn" type="submit" onClick={registerUser}>Sign Up</button>
                        <p id="RegOr">Or</p>
                        <button id="RegBtn" type="submit" onClick={()=>{navigate("/")}}>Already Have an Account?</button>
                    </div>
            </div>
        </div>
    ) 
}

export default Register;