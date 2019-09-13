"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
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
exports.default = Course;
//# sourceMappingURL=Course.js.map