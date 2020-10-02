///////////////////////////////////
// IMPORT SCHEMA AND MODEL
///////////////////////////////////
const { Schema, model } = require("mongoose");

////////////////////////////////////
// CREATE SCHEMA
////////////////////////////////////

const artSchema = new Schema({
  username: { type: String, required: true },
  title:{ type: String }, 
  artist: { type: String },
  year: { type: Number },
  technique: { type: String },
  size: { type: String },
  info: { type: String },
  img: { type: String },
  value: { type: String }
});

////////////////////////////////////
// CREATE MODEL
////////////////////////////////////
const Art = model("art", artSchema);

////////////////////////////////////
// EXPORT MODEL
////////////////////////////////////
module.exports = Art;
