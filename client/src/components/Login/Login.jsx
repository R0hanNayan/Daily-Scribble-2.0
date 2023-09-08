import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  //To change route

function Login({setLoggedUser}){
    const navigate = useNavigate();

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
            const response =  await axios.post("https://dailyscribble.onrender.com/auth/login", user, {
                method: "POST",
                headers: {
                    'Content-Type':'application/json'
                }
            })     //Sending data to Backend
            .then(res =>{
                    if(res.data.userNotFound === true){
                        alert("User does not exists!");
                    }else if(res.data.invalidCredentials === true){
                        alert("Invalid Credentials!");
                    }else{
                        setLoggedUser(res.data.user)
                        navigate("/homepage")
                    }
                } 
            )
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
            <button type="button" onClick={()=>{navigate("/auth")}}>New Account?</button>
        </div>
    ) 
}

export default Login;