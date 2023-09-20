//import { response } from "express";
//import { response } from 'express';
import Post from "../models/post.js";
import Student from "../models/student.js";

// export const createPost = async (request, response) => {
//     try{
//         const post =  await new Post(request.body);
//         post.save();
//         return response.status(200).json('Post saved successfully');
//     }
//     catch(error){
//         return response.status(500).json(error);
//     }
// }

export const createPost = async (req, res) => {
  try {
    const user = req.user; // Get the authenticated user
    const data = req.body;

    if (!user) {
      return res.status(401).json({
        message: "User not authenticated.",
      });
    }
    console.log(data._id);
    // Create a new post object with dynamically generated 'userid'.
    const newPostData = {
      ...data,
      userid: user._id, // Set 'userid' dynamically to the current user's ID.
      
      //   projectid: data._id
    };

    // Assign the 'projectid' based on the value of the current _id.
    newPostData.projectid = newPostData._id;

    const post = await new Post(newPostData);
    await post.save();

    newPostData.projectid = post._id;

    // Update the post with the 'projectid' included
    await Post.findByIdAndUpdate(post._id, { $set: newPostData });

    // insert the projectid in student's profile
    const student = await Student.findOne({ userId: user._id });
    if (!student) {
      return res.status(404).json({
        message: "Student not found for this user.",
      });
    }
    student.projectids.push(post._id);
    await student.save();

    return res.status(201).json({ message: "Post saved successfully" });
  } catch (error) {
    console.error("Error adding the post:", error);
    res.status(400).json({ message: "Error adding the post.", error });
  }
};

export const getAllPosts = async (request, response) => {
  let category = request.query.category;
  let posts;
  try {
    if (category) {
      posts = await Post.find({ categories: category });
    } else {
      posts = await Post.find({});
    }
    return response.status(200).json(posts);
  } catch (error) {
    return response.status(500).json({ msg: error.message });
  }
};

export const getPost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);

    return response.status(200).json(post);
  } catch (error) {
    return response.status(500).json({ msg: error.message });
  }
};

export const updatePost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);

    if (!post) {
      return response.status(404).json({ msg: "post not found" });
    }

    await Post.findByIdAndUpdate(request.params.id, { $set: request.body }); ////  set and addToSet
    return response.status(200).json({ msg: "post updated succesfully" });
  } catch (error) {
    return response.status(500).json({ msg: error.message });
  }
};

export const deletePost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);

    if (!post) {
      return response.status(404).json({ msg: "post not found" });
    }

    await post.delete();
    return response.status(200).json({ msg: "post deleted succesfully" });
  } catch (error) {
    return response.status(500).json({ msg: error.message });
  }
};

// insert the projectid in student's profile
// const student = await Student.findOne({ userId: user._id });
// if (!student) {
//   return res.status(404).json({
//     message: "Student not found for this user.",
//   });
// }
// student.projectids.push(newPostData._id);
// await student.save();
