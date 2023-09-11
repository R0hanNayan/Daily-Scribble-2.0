import express from "express";
import { getFeedPosts, getUserPosts, deletePost } from "../controllers/Post.js";

const router = express.Router();

//Read
router.get("/homepage", getFeedPosts);
router.get("/:userName/posts", getUserPosts);

//Delete
router.patch("/:id", deletePost);

export default router;