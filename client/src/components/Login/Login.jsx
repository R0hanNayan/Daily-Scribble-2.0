import React, {useState} from "react";
import axios from "axios";

function Login(){

    const [ user, setUser ] = useState({
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

    const loginUser = async () =>{
        const { email, password } = user;
        
        //Checking if input is valid or Not
        if(email && password ){
            const response =  await axios.post("http://localhost:3000/auth/login", user, {
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
        <div className="LoginPage">
            <h1>Login</h1>
            <input type="email" name="email" value={user.email} placeholder="Email Id" onChange={handleChange}/>
            <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}/>
            <button type="submit" onClick={loginUser}>Login</button>
            <p>Or</p>
            <button type="button">New Account?</button>
        </div>
    ) 
}

export default Login;