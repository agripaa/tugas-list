import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import DataTugasRoute from './routes/DataTugasRoute'
const app = express();

dotenv.config()

app.use(cors());
app.use(express.json())
app.use(DataTugasRoute)

app.listen(process.env.PORT, () => {
    console.log(`listening on http://localhost:${process.env.PORT}`);
})