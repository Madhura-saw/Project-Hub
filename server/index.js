import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import Connection from './database/db.js';
import Router from './routes/routes.js';
const app = express();
dotenv.config();


app.use(cors({
    origin:"http://localhost:3000",
    exposedHeaders: ['content-type', 'accept']
    //headers: "content-type, accept"
}));
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router);

const port = 4000;
app.listen(port, ()=>console.log(`server is running on port number ${port}`));
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);