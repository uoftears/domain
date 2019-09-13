import mongoose from 'mongoose';
const { Schema, model } = mongoose;

// Course Schema
const courseSchema = new Schema({
  code: String,
  name: String,
  description: String,
  department: String,
  prerequisite: [String],
  exclusion: [String],
  level: Number,
  campus: String,
  term: String,
  meetings: [{
    name: String,
    day: Number,
    time: String,
    instructor: String,
    location: String,
    size: Number,
    enrolment: Number,
    hasWaitlist: Boolean,
    mode: String,
  }],
  university: { type: Schema.Types.ObjectId, ref: 'University' },
});
// Course Mongoose Model
const Course = model('Course', courseSchema);

export default Course;
