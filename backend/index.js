import express from 'express'
import router from './route/routes.js';
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const app = express();
app.use(cors())
app.use(express.json());

app.use(router)

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("connection established and server started")
}).then(() => {
    app.listen(3001, () => {
        console.log(`Server running on port 3001`);
    })
}).catch((err)=>{
    console.log("error occured in database",err )
})