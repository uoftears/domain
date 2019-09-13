
import mongoose from 'mongoose';
// Models
import Course from './models/Course';
import University from './models/University';
// Connection Helpers
const connect = (host: string) => (
  new Promise((resolve, reject) => {
    mongoose.connect(host);
    mongoose.connection.on('error', (err) => { reject(err); });
    mongoose.connection.once('open', () => { resolve(); });
  })
);

const disconnect = () => (
  new Promise((resolve) => {
    mongoose.connection.close(() => {
      console.log('Mongoose connection closed');
      resolve();
    });
  })
);

export default {
  Course,
  University,
  connect,
  disconnect,
};
