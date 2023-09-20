import mongoose from "mongoose";

// const postSchema = mongoose.Schema({
//     title:{
//         type: String,
//         required: true
//     },
//     description:{
//         type: String,
//         required: true
//     },
//     username:{
//         type: String,
//         required: true
//     },
//     picture:{
//         type: String,
//         // required: true
//     },
//     categories:{
//         type: String,
//         required: true
//     },
//     createdDate:{
//         type: Date
//     },

// });

const projectSchema = new mongoose.Schema({
  projectid: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the user who created the project
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    
  },
  description: String,
  domain: String,
  tags: [String],
  report: String,
  startdate: Date,
  enddate: Date,
  rating: Number,
});

const project = mongoose.model("project", projectSchema);

export default project;
