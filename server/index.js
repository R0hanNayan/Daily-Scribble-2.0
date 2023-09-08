import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/Auth.js";
import mongoose from 'mongoose';
import { register } from './controllers/Auth.js';
import path from "path";
import { fileURLToPath } from 'url';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
dotenv.config();

//To serve the frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "../client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});


//Mongoose Setup:
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(console.log("Connected to DB!"));

//Register
app.post("/auth/register", register);

//Routes
app.use("/auth", authRoutes);


app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})