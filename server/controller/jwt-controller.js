//import { request } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Token from '../models/token.js';

dotenv.config();

export const authenticateToken = (request,response, next)=>{
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token==null){
        return response.status(401).json({msg:'token is missing'});
    }

    jwt.verify(token, process.env.ACCESS_SECRET_KEY, (error,user)=>{
        if(error){
            return response.status(403).json({msg:'token invalid'})
        }
        request.user = user;
        next();  // pass middleware to api 
    } )
}