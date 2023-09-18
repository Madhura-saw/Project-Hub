import Register from '../models/register.js';

export const register = async (request, response) =>{
    try{
        const register = await new Register(request.body);
        register.save();
        return response.status(200).json({msg: ' registered succesfully'});
    }
    catch(error){
        return response.status(500).json({error: error.message});
    }
}

export const getReg = async (request, response) =>{
    try{
        const registers = await Register.find({postId: request.params.id}) ; 
        response.status(200).json(registers);
    }
    catch(error){
        return response.status(500).json({error: error.message});
    }
}