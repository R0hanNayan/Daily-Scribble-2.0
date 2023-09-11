import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        min: 6,
        max: 50,
        unique: true
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    }, 
    password: {
        type: String,
        required: true,
        min: 6,
    },
    }, {timestamps: true}
);

const User = mongoose.model("User", UserSchema);

export default User;