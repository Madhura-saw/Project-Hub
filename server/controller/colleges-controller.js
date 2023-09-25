// import fs from "fs"; 
// import { parse } from 'csv-parse';
import College from "../models/college.js";

export const getCollegesbyState = async (request, response) =>{
    try{
        const colleges = await College.find({collegeState: request.params.state}) ;  // returns all comments of the given postid
        response.status(200).json(colleges);
    }
    catch(error){
        return response.status(500).json({error: error.message});
    }
}
		

			

// 		}
// 	}

// 	res.send(JSON.stringify(result));

// })