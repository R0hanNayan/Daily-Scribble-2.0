import bcrypt from 'bcrypt';
import User from "../models/User.js"

//Register User:
export const register = async (req, res) => {
    try {
        // console.log(req.body);
        const {
            userName,
            email,
            password,
            posts
        } = req.body;   //extract data from User Input
        // console.log(req.body);
        const user = await User.findOne({ email: email });
        
        if (user) {
            // console.log(user);
            res.send({ exists: true });   //sending boolean value to frontend if user exists
            console.log("User exists!");
        } else {
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
            // res.send({exists:false});
            res.status(201).json(savedUser);
        }
    } catch (err) {
        console.log(err);
    }
};

//Login User:
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });    //Find the user in existing DB

        if (!user) {
            res.send({ userNotFound: true });
            console.log("User does not exist.")
            //return res.status(400).json({ msg: "User does not exist." });
        } else {
            const isMatch = await bcrypt.compare(password, user.password);  //Compare password with Bcrypt Hash
            if (!isMatch) {
                res.send({ invalidCredentials: true });
                console.log("Invalid credentials.")
            } else {
                res.send({ user: user });
                (console.log("login Success!"));
            }
        }
        // res.status(200).json({ user }); 
    } catch (err) {
        console.log(err);
        //res.status(500).json({ error: err.message });
    }
}