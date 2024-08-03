import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import noteRoutes from './Route.js';
import cors from "cors"
const app = express();
const port = 3000;

app.use(cors({
    origin:"http://localhost:5173",
    
}))

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://sid:sid$112004@cluster0.ewhycdr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Use routes
app.use('/notes', noteRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
