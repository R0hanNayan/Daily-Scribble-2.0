import Post from "../models/Post.js";
import User from "../models/User.js";

//Create Post

export const createPost =  async(req, res) => {
    try{
        const { userName, postTitle, postContent } = req.body;
        const user = await User.findOne({userName: userName});
        if(user){
            console.log(user);
            const newPost = new Post({
                userName,
                postTitle,
                postContent
            });
            await newPost.save();
            // const post = await Post.find(); //Finding all the posts
            res.send({newPost});
        }else{
            res.send({userNotFound: true}); //Sending boolean value to frontend if user Not Found
        }
    }catch(err){
        console.log(err);
    }
};

//Read Posts

export const getUserPosts = async(req, res) => {
    try{
        // console.log(req.params);
        const {userName} = req.params;
        const post = await Post.find({userName : userName});
        // console.log(post);
        if(post){
            res.send(post);
        }else{
            res.send({noPosts: true});  //Sending Boolean value to frontend if no posts found 
        }
    }catch(err){
        console.log(err);
    }
}

export const getFeedPosts = async(req, res) => {
    try{
        const post = await Post.find();
        if(post){
            res.status(201).json(post);
        }else{
            res.send({noPostFound: true});
        }
    }catch(err){
        console.log(err);
    }
}

//Delete Posts

export const deletePost = async(req, res) =>{
    try{
        const {id} = req.params;
        
        const post = await Post.findById(id);
        // console.log(post);
        if(post){
            await Post.deleteOne({_id : id});
            res.send({deleted : true});
        }else{
            res.send({deleted : false});
        }
    }catch(err){
        console.log(err);
    }
}
