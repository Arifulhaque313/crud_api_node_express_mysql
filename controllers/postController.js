const { json } = require('body-parser');
const Post = require('../models/post');

// create
exports.create = async (req, res) => {
    try{
        const newPost = await Post.create(req.body);
        res.status(201).json(newPost);
    } catch(error) {
        res.status(500).json({
            error: error.message
        });
    }
};

//get all
exports.index = async (req, res) => {
    try{
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch(error) {
        res.status(500).json({
            error: error.message
        });
    }
};


//show post
exports.show = async (req, res) => {
    try{
        const post = await Post.findByPk(req.params.id);

        if(post){
            res.status(200).json(post);
        }else{
            res.status(404).json({message: "No such post"});
        }
    } catch(error) {
        res.status(500).json({
            error: error.message
        });
    }
};


//get all
exports.update = async (req, res) => {
    try{
        const[updated] =await Post.update(req.body,{
            where:{id:req.params.id}
        });
        if(updated){
            const updatePost = Post.findByPk(req.params.id);
            res.status(200).json(updatePost);
        }else{
            res.status(404).json({message: "Post Not Found"});
        }
    } catch(error) {
        res.status(500).json({
            error: error.message
        });
    }
};

//get all
exports.delete = async (req, res) => {
    try{
        const deleted = await Post.destroy({
            where: { id:req.params.id }
        });
        if(deleted){
            res.status(200).json({message: "Post Deleted"});
        }else{
            res.status(404).json({message: "Post Not Found"});
        }
    } catch(error) {
        res.status(500).json({
            error: error.message
        });
    }
};