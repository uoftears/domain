"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
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
exports.default = University;
//# sourceMappingURL=University.js.map