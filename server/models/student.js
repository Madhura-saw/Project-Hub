import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  collegeid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College", // Reference to the college where the student is enrolled
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the user associated with the student
    required: true,
  },
  projectids: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }], // An array of project identifiers
  rating: Number,
});

const Student = mongoose.model("Student", studentSchema);

// module.exports = Student;


const student = mongoose.model('student', studentSchema);

export default student;