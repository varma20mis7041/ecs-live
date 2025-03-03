const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());


app.use(cors({ origin: 'https://ecs-frontend.onrender.com' }));


const productRoutes = require('./routes/productRoutes');


app.use('/products', productRoutes);

const port = process.env.PORT ||9000;

const initializeDBAndServer = async () => {
    const username = encodeURIComponent("******");
    const password = encodeURIComponent("********");
    const uri = `mongodb+srv://${username}:${password}@cluster0.ki5m4.mongodb.net/ecs?retryWrites=true&w=majority&tls=true&tlsInsecure=true&appName=Cluster0`;


    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB.....");
        app.listen(port, () => {
            console.log('Server running on port: 5000');
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

initializeDBAndServer()
