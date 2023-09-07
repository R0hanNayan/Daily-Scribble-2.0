import bcrypt from 'bcrypt';
import User from "../models/User.js"

//Register User:
export const register = async(req, res) =>{
    try{
        console.log(req.body);
        const {
            userName,
            email, 
            password,
            posts
        } = req.body;   //extract data from User Input

        const salt = await bcrypt.genSalt(10);    //Generate Salt
        const passwordHash = await bcrypt.hash(password, salt); //Generate Password Hash

        //Create new User
        const newUser = new User(
            {
                userName,
                email, 
                password: passwordHash,
                posts
            }
        ); 
        const savedUser = await newUser.save(); //Save the new User
        res.status(201).json(savedUser);
    }catch(err){
        console.log(err);
    }
};

//Login User:
export const login = async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email: email}).then(console.log("login Success!"));    //Find the user in existing DB
        
        if (!user) return res.status(400).json({ msg: "User does not exist. " });
        const isMatch = await bcrypt.compare(password, user.password);  //Compare password with Bcrypt Hash
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
        
        res.status(200).json({ user });
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}