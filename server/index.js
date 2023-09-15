import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/Auth.js";
import mongoose from 'mongoose';
import { register } from './controllers/Auth.js';
import { createPost, deletePost, getFeedPosts} from './controllers/Post.js';
import { getUserPosts } from './controllers/Post.js';
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
dotenv.config();

//Mongoose Setup:
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(console.log("Connected to DB!"));

//Register
app.post("/auth/register", register);

//Routes
app.use("/auth", authRoutes);
app.use("/compose", createPost);
app.get("/profile/:username", getUserPosts);
app.get("/homepage", getFeedPosts);
app.use("/profile/:id", deletePost);


app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})