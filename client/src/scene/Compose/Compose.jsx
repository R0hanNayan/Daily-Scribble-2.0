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
        <div>
            <input autocomplete="off" type="userName" name="userName" value={post.userName} placeholder="UserName" onChange={handleChange}/>
            <input autocomplete="off" type="title" name="postTitle" value={post.postTitle} placeholder="Title" onChange={handleChange}/>
            <input autocomplete="off" type="text" name="postContent" value={post.postContent} placeholder="Content" onChange={handleChange}/>
            <button type="submit" onClick={createPost}>Post</button>
        </div>
    );
}

export default Compose;