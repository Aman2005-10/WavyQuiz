import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/Routes.js';
import cors from 'cors';

const app = new express();

app.use(express.json());

app.use(cors(
    {
        origin:["https://wavy-quiz-frontend.vercel.app"],
        methods:["POST" , "GET"],
        credentials:true
    }
));

mongoose.connect("mongodb+srv://sharpinnovation10:jVPwJY2euEiPZVud@cluster0.ng1my.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const db = mongoose.connection;

app.listen(5100 , () => {
    console.log('server is running on port 5100');
    });

app.get("/" , (req , res) => {
    res.json("HEllo");
})

    db.on("open" , () => {
        console.log('connected to database');
    })

    db.on("error" , () => {
        console.log('error connecting to database');
    })

    routes(app);

