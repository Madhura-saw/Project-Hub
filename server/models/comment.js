import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
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
    comments:{
        type: String,
        require:true
    }
})

const comment = mongoose.model('comment', commentSchema);

export default comment;