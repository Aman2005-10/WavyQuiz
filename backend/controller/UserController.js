
import User from "../model/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function UserSignUp(req, res) {

    try {
        const existingUser = await User.findOne({ username: req.body.username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }
        const hashedpasword  = await bcrypt.hash(req.body.password , 10);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedpasword,
           
        });
        await newUser.save();
        res.status(200).send( "User Create Successfully");
 
        
    } catch (error) {
        res.status(400).json({ message: error.message });

    }


}

export async function UserLogin(req, res) {
    try {
       
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        const isValidPassword = await bcrypt.compare(req.body.password , user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
          }
          const token = jwt.sign({ username: user.username }, 'secretkey');
          res.json({ token });



    } catch (error) {
        res.status(400).json({ message: error.message });


    }
}

export async function getUser(req , res) {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);

        
    } catch (error) {
        res.status(400).json({ message: error.message });


        
    }
    
}