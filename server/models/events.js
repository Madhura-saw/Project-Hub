import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    categories:{
        type: String,
        
    },
    createdDate:{
        type: Date
    },
    eventDate:{
        type:Date
    },
    location:{
        type:String,
        required : true
    },
    address:{
        type:String,
        required:true
    }
    
});

const event = mongoose.model('event', eventSchema);

export default event;