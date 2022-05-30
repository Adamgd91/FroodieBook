const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const favoriteSchema = mongoose.Schema({
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

const User = mongoose.model("Favorites", favoriteSchema);
module.exports.User = User;
module.exports.favoriteSchema = favoriteSchema;
module.exports.validateUser = validateUser;
module.exports.validateLogin = validateLogin;
