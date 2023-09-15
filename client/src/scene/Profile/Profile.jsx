import React, {useState, useEffect} from "react";
import axios, * as others from 'axios';
import "./profile.css";
import PostWidget from "../../components/PostWidget/PostWidget";


function Profile({user, handleClick}){
    const [posts, setPost] = useState([]);
    const [postsAvailable, setPostsAvailable] = useState(false);
    // console.log(posts[0]._id);
    const getPosts = async () => {
        await axios.get(`${"https://dailyscribble.onrender.com"||"http://localhost:3000"}/profile/${user.userName}`)
            .then((res) => {
                if (res.data.noPostFound === true) {
                    console.log("PostNotFound")
                    alert("No Posts!");
                } else {
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
    
    const deletePosts = async (_id) => {
        await axios.post(`${"https://dailyscribble.onrender.com"||"http://localhost:3000"}/profile/${_id}`)
            .then((res) => {
                if (res.data.deleted === true) {
                    alert("Post Deleted!");
                    handleClick("homepage")
                } else {
                    alert("error");
                }
            });
    }
    
    return(
            <div className="Profile-Container">
                <div className="Profile-Blogs">
                    <div className="User-Tag">
                        <h1 id="userTag">{(user.userName).slice(0,1)}</h1>
                    </div>
                    <h1 id="blogTitle">My Blogs...</h1>
                </div>  
                <div className="Profile-Posts">
                    {
                        posts.map(
                            (post) => (
                                <div>
                                    <PostWidget
                                        key={post._id+post.postTitle}
                                        user={post.userName}
                                        title={post.postTitle}
                                        content={post.postContent}
                                    />
                                    <div className="Post-Delete">
                                        <button id="deleteBtn" type="submit" onClick={()=>{deletePosts(post._id)}}>Delete Post!</button>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
    )
}

export default Profile;