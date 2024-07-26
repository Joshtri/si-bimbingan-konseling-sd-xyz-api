import express from "express";
import { config } from "dotenv";


config();
const app = express();
const PORT = process.env.APP_PORT || 5000;


app.use(express.json());


app.listen(PORT,()=>{
    console.log(`app run on port `, PORT);
})
