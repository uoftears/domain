"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Models
const Course_1 = __importDefault(require("./models/Course"));
exports.Course = Course_1.default;
const University_1 = __importDefault(require("./models/University"));
exports.University = University_1.default;
// Connection Helpers
const connect = (host, options = {}) => (new Promise((resolve, reject) => {
    mongoose_1.default.connect(host, options);
    mongoose_1.default.connection.on('error', (err) => { reject(err); });
    mongoose_1.default.connection.once('open', () => { resolve(); });
}));
exports.connect = connect;
const disconnect = () => (new Promise((resolve) => {
    mongoose_1.default.connection.close(() => {
        console.log('Mongoose connection closed');
        resolve();
    });
}));
exports.disconnect = disconnect;
//# sourceMappingURL=index.js.map