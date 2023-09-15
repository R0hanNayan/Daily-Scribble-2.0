import React, {useState} from "react";
import axios from "axios";
import "./compose.css";

function Compose({handleClick}){

    const [ post, setPost ] = useState({
        userName: "",
        postTitle: "",
        postContent: "",
    });

    //Function to extract details from input
    const handleChange = (event)=>{
        const {name , value} = event.target;

        setPost({
            ...post,
            [name]: value
        })
    }

    const createPost = async() =>{
        const {userName, postTitle, postContent} = post;
        if(userName && postTitle && postContent){
            await axios.post(`${"https://dailyscribble.onrender.com"||"http://localhost:3000"}/compose`, post,{
                method: "POST",
                headers: {
                'Content-Type':'application/json'
                }
            })
            .then(res=>{
                if(res.data.userNotFound){
                    alert("UserName Not Found!");
                }else{
                    console.log(res.data.post);
                    alert("Posted!")
                    handleClick("homepage");
                }
            })
        }else{
            alert("Invalid Inputs");
        }
    }
    
    
    return (
        <div className="Compose-Page">
            <div className="Compose-Page-Title">
                <h1 id="composePage">Create New Post...</h1>
            </div>
            <div className="Compose-Page-Box">
                <input id="userName" autoComplete="off" type="userName" name="userName" value={post.userName} placeholder="UserName" onChange={handleChange}/>
                <input id="postTitle" autoComplete="off" type="title" name="postTitle" value={post.postTitle} placeholder="Title" onChange={handleChange}/>
                <textarea id="postContent" name="postContent" value={post.postContent}  onChange={handleChange}/>
                <button id="postBtn" type="submit" onClick={createPost}>Post</button>
            </div>
        </div>
    );
}

export default Compose;