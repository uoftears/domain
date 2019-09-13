"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Models
const Course_1 = __importDefault(require("./models/Course"));
const University_1 = __importDefault(require("./models/University"));
// Connection Helpers
const connect = (host) => (new Promise((resolve, reject) => {
    mongoose_1.default.connect(host);
    mongoose_1.default.connection.on('error', (err) => { reject(err); });
    mongoose_1.default.connection.once('open', () => { resolve(); });
}));
const disconnect = () => (new Promise((resolve) => {
    mongoose_1.default.connection.close(() => {
        console.log('Mongoose connection closed');
        resolve();
    });
}));
exports.default = {
    Course: Course_1.default,
    University: University_1.default,
    connect,
    disconnect,
};
//# sourceMappingURL=index.js.map