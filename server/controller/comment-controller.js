
import Comment from '../models/comment.js';

export const newComment = async (request, response) =>{
    try{
        const comment = await new Comment(request.body);
        comment.save();
        return response.status(200).json({msg: 'comment saved succesfully'});
    }
    catch(error){
        return response.status(500).json({error: error.message});
    }
}

export const getComments = async (request, response) =>{
    try{
        const comments = await Comment.find({postId: request.params.id}) ;  // returns all comments of the given postid
        response.status(200).json(comments);
    }
    catch(error){
        return response.status(500).json({error: error.message});
    }
}

export const deleteComment = async (request, response) =>{
    try{
        const comment = await Comment.findById(request.params.id) ;  // returns all comments of the given postid
        
            comment.delete();
        
        response.status(200).json({msg: 'Comment deleted succesfully'});
    }
    catch(error){
        return response.status(500).json({error: error.message});
    }
}

