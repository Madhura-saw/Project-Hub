
import Student from "../models/student.js";
import Project from "../models/post.js";

export const getProfile = async (request, response) => {
    // const {account} = useContext(DataContext);
    let u_name = request.query.username;
    try {
      // const user = req.user; // Get the authenticated user
      // const data = req.body;
      const profile = await Student.find({username: u_name });
  
      return response.status(200).json(profile);
    } catch (error) {
      return response.status(500).json({ msg: error.message });
    }
  };

  export const getAllProjects = async (request, response) => {
    let uname = request.query.username;
    let projects;
    try {
        projects = await Project.find({ username: uname });

      return response.status(200).json(projects);
    } catch (error) {
      return response.status(500).json({ msg: error.message });
    }
  };