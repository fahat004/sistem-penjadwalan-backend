import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DosenRoute from "./routes/DosenRoute.js"
import MatakuliahRoute from "./routes/MatakuliahRoute.js"
import JadwalRoute from "./routes/JadwalRoute.js"
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(DosenRoute);
app.use(MatakuliahRoute);
app.use(JadwalRoute);

app.listen(process.env.APP_PORT, ()=>{
    console.log('Server up and running...')
});
