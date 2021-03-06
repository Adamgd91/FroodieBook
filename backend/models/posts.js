const mongoose = require("mongoose");
const Joi = require("joi");

const postSchema = mongoose.Schema({
  body: { type: String, minLength: 2, maxLength: 255, required: true },
  userId: { type: String, required: true },
  name: { type: String, required: true },

  dateAdded: { type: Date, default: Date.now() },
  steps: { type: String, minLength: 2, maxLength: 255 },
  genre: { type: String, minLength: 2, maxLength: 255 },
  timeofday: { type: String, minLength: 2, maxLength: 255 },
  difficulty: { type: String, minLength: 2, maxLength: 255 },
  season: { type: String, minLength: 2, maxLength: 255 },
  timetocook: { type: String, minLength: 2, maxLength: 255 },
});

const validatePost = (post) => {
  const schema = Joi.object({
    body: Joi.string().min(2).max(255).required(),
    userId: Joi.string().required(),
    name: Joi.string().required(),
  });
  return schema.validate(post);
};

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
module.exports.Post = Post;
module.exports.postSchema = postSchema;
module.exports.validatePost = validatePost;
