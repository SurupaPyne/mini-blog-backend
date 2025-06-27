const { nanoid } = require("nanoid");
const db = require("../config/db");

const getAllPosts = (req, res) => {
  try {
    const data = db.get("posts").value();
    res.status(200).json({ success: "posts are found", result: data });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts", details: err.message });
  }
};

const getPostById = (req, res) => {
  try {
    const post = db.get("posts").find({ id: req.params.id }).value();
    if (post) {
      res.status(200).json({ success: "post is found", result: post });
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch post", details: err.message });
  }
};

const createPost = (req, res) => {
  try {
    const post = { ...req.body, id: nanoid() };
    db.get("posts").push(post).write();
    res.status(200).json({ success: "post is inserted", result: post });
  } catch (err) {
    res.status(500).json({ error: "Failed to create post", details: err.message });
  }
};

const updatePost = (req, res) => {
  try {
    const updated = db.get("posts").find({ id: req.params.id }).assign(req.body).write();
    if (updated) {
      res.status(200).json({ success: "post is updated", result: updated });
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to update post", details: err.message });
  }
};

const deletePost = (req, res) => {
  try {
    const removed = db.get("posts").remove({ id: req.params.id }).write();
    if (removed.length > 0) {
      res.status(200).json({ success: "post is deleted" });
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to delete post", details: err.message });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
