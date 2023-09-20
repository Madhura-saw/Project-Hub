import mongoose from "mongoose";

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
  username: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  domain: String,
  tags: [String],
  report: String,
  // report: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "PDFFile", // Reference to the GridFS file
  // },
  startdate: Date,
  enddate: Date,
  rating: Number,
});

const project = mongoose.model("project", projectSchema);

export default project;
