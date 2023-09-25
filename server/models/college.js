import mongoose from "mongoose";

const collegeSchema = mongoose.Schema({
    collegeName:{
        type: String,
        require:true
    },
    collegeId:{
        type: String,
        require:true
    },
    collegeState:{
        type: String,
        require:true
    },

})

const college = mongoose.model('college', collegeSchema);

export default college;
