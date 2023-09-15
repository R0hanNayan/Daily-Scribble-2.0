import express from "express";
import { getFeedPosts, getUserPosts, deletePost } from "../controllers/Post.js";

const router = express.Router();

//Read
router.get("/homepage", getFeedPosts);

export default router;