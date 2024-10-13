import express from "express";
import cors from 'cors';
import { config } from "dotenv";
import session from "express-session";
import { fileURLToPath } from 'url';
import path,{ dirname } from 'path';
import db from "./config/dbConfig.js";
import methodOverride from 'method-override';



// import classRoute from "./routes/class.route.js";
// import userRoute from "./routes/user.route.js";
// import authRoute from "./routes/auth.route.js";
// import studentRoute from "./routes/student.route.js";
// import counsellingRoute from "./routes/counselling.route.js";
import dashboardRoute from './routes/dashboard.route.js';
import siswaRoute from "./routes/siswa.route.js";
import kelasRoute from './routes/kelas.route.js';
import jenisPelanggaranRoute from './routes/jenisPelanggaran.route.js';
import indexRoute from './routes/index.route.js';
import orangTuaRoute from "./routes/orangTua.route.js";
import pelanggaranSiswaRoute from './routes/pelanggaranSiswa.route.js'

db;
// localhost:4000/my/dashboard


config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(methodOverride('_method'));

(async()=>{
    await db.sync();
})();  



// Tentukan lokasi folder views
const viewsDirectories = [
    path.join(__dirname, 'views'),
    path.join(__dirname, 'views', 'jenisPelanggaran'),
    path.join(__dirname, 'views', 'guru'),
    path.join(__dirname, 'views', 'siswa'),
    path.join(__dirname, 'views', 'kelas'),
    path.join(__dirname, 'views', 'orangTua'),
    path.join(__dirname, 'views', 'user'),
    path.join(__dirname, 'views', 'pelanggaranSiswa'),
    path.join(__dirname, 'views', 'publikasi'),
];


app.set('views', viewsDirectories);
app.set('view engine', 'ejs')
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: process.env.APP_SESSION_SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        secure:'auto'
    }
}));


// app.use(cors({
//     credentials:true,
//     origin: 'http://localhost:3000'
// }))

app.use('/',indexRoute)
app.use('/adm',dashboardRoute);
app.use('/adm/data', siswaRoute, jenisPelanggaranRoute,kelasRoute, orangTuaRoute, pelanggaranSiswaRoute);
// app.use('/api',(req,res)=>{
//     res.send('aca');
// })



// app.use('/',authRoute)

app.listen(PORT,()=>{
    console.log(`app run on port `, PORT);
})
