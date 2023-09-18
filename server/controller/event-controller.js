import Event from '../models/events.js';
import Register from '../models/register.js';

export const createEvent = async (request, response) => {
    try{
        const event =  await new Event(request.body);
        event.save();
        return response.status(200).json('event saved successfully');
    }
    catch(error){
        return response.status(500).json(error);
    }
}
export const getEvent = async (request, response) =>{
    try{
        const event = await Event.findById(request.params.id);

        return response.status(200).json(event);
    }
    catch(error){
        return response.status(500).json({msg: error.message});
    }
}
export const getAllReg = async (request, response) =>{
    try{
        const registers = await Register.find({postId: request.params.id}) ;  // returns all comments of the given postid
        response.status(200).json(registers);
    }
    catch(error){
        return response.status(500).json({error: error.message});
    }
}
export const getAllEvents = async(request, response) =>{
    let locations = request.query.locations;
    let events;
    try{
        
        if(locations){
            events = await Event.find({location: locations})
        }
        else{
            events = await Event.find({});
        }
        return response.status(200).json(events);
        
        // events = await Event.find({});
        
        // return response.status(200).json(events);
    }
    catch(error){
        return response.status(500).json({msg: error.message});
    }
}

export const searchEvents = async(request,response)=>{
    const queryLoctaion = new RegExp(request.params?.location, 'i');

    if(queryLocation !== ''){
        try{
            const search_results = await Event.find({location: queryLoctaion});
            response.status(200).json(search_results);
        }
        catch(error){
            response.status(404).json({message:'No match found'});

        }
        
        
    }
    else{
        response.status(404).json({message: 'no location query'});
    }
}

 