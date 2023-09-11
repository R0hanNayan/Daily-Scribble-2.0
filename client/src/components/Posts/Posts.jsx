import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./posts.css";
import PostWidget from "./PostWidget/PostWidget";

function Posts() {
    // const navigate = useNavigate();
    const [posts, setPost] = useState([]);
    const [postsAvailable, setPostsAvailable] = useState(false);

    const getPosts = async () => {
        await axios.get(`${"http://localhost:3000"}/homepage`)
            .then((res) => {
                if(res.data.noPostFound === true){
                    console.log("PostNotFound")
                    alert("No Posts!");
                }else{
                    setPostsAvailable(!postsAvailable);
                    setPost(res.data);
                    console.log("Posts Loaded");
                }
            })
    }
    
    console.log(posts);
    useEffect(() => {
        if (!postsAvailable) {
          getPosts();
        } 
      }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="posts">
            {posts.map(
                (post) => (
                    <PostWidget 
                        key={post.userName + post.postTitle}
                        user={post.userName} 
                        title={post.postTitle} 
                        content={post.postContent}
                    />
                )
            )}
        </div>
    );
}

export default Posts;