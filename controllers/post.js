const PostSchema = require('../models/post.js');

const createPost = async (req, res) => {
    try {
        const newPost = await PostSchema.create(req.body);
        res.status(201).json({
            newPost
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const getPosts = async (req, res) => {
    try {
        const getPost = await PostSchema.find();
        res.status(200).json({
            getPost
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const getDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const detailPost = await PostSchema.findById(id);
        res.status(200).json({
            detailPost
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const getUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const updatePost = await PostSchema.findByIdAndUpdate(id, req, body, { new: true });
        res.status(200).json({
            updatePost
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}



const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deletePost = await PostSchema.findByIdAndDelete(id);
        res.status(200).json({
            deletePost
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
const searchApi = async (req, res) => {
    const { search, desc, tag } = req.query;

    try {
        const titleRegex = new RegExp(search, "i"); // "i" seçeneği büyük-küçük harf uyumsuzluğu olmadan arama yapar

        let query = { title: titleRegex };

        if (desc) {
            const descRegex = new RegExp(desc, "i");
            query.desc = descRegex;
        }

        if (tag) {
            const tagArray = Array.isArray(tag) ? tag : [tag];
            query.tag = { $in: tagArray };
        }

        const posts = await PostSchema.find(query);

        res.status(200).json({
            posts
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};


module.exports = { createPost, getDetail, getPosts, getUpdate, deletePost, searchApi }