import express from "express";
import cors from 'cors';
import { config } from "dotenv";
import session from "express-session";
import db from "./config/dbConfig.js";
import bodyParser from "body-parser";

import classRoute from "./routes/class.route.js";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import studentRoute from "./routes/student.route.js";
import counsellingRoute from "./routes/counselling.route.js";

// import userRoute from "./routes/user.route.js";
// import authRoute from "./routes/auth.route.js";

db;

config();

const app = express();
const PORT = process.env.APP_PORT || 4000;
app.use(express.json());

(async()=>{
    await db.sync();
})();  

app.use(session({
    secret: process.env.APP_SESSION_SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        secure:'auto'
    }
}));


app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000'
}))
// app.use(bodyParser.json()); // Parse JSON request bodies


app.use('/api',classRoute, userRoute,studentRoute,counsellingRoute)
// app.use('/api',classRoute, userRoute,authRoute)
app.use('/',authRoute)

app.listen(PORT,()=>{
    console.log(`app run on port `, PORT);
})
