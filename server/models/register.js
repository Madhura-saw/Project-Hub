import mongoose from "mongoose";

const registerSchema = mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    postId:{
        type: String,
        require:true
    },
    date:{
        type: Date,
        require:true
    },
    contact:{
        type: String,
        require:true
    },
    email:{
        type: String,
        // require:true
    }
})

const register = mongoose.model('register', registerSchema);

export default register;