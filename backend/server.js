import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/Routes.js';
import cors from 'cors';

const app = express();  // ✅ Fixed: Removed "new"

app.use(express.json());

app.use(cors({
    origin: ["https://wavy-quiz-frontend.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}));

// ✅ MongoDB Connection with Error Handling
mongoose.connect("mongodb+srv://sharpinnovation10:cluster0.ng1my.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB Connection Error:", err));

app.listen(5100, () => {
    console.log('Server is running on port 5100');
});

app.get("/", (req, res) => {
    res.json("Hello from Server!");
});

// ✅ Ensure Routes are Loaded
routes(app);
