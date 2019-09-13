import mongoose from 'mongoose';
const { Schema, model } = mongoose;

// University Schema
const universitySchema = new Schema({
  name: String,
  description: String,
  year: Number,
  country: String,
  studentCount: Number,
  link: String,
});
// Course Mongoose Model
const University = model('University', universitySchema);

export default University;