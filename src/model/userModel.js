const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
      name : { type: String, trim: true },
      age  : { type: String, trim: true },
      email: { type: String, required: true, lowercase: true, unique: true },
      date : { type: Date, required: true, default: Date.now() },
    }
)

module.exports = mongoose.model('User', userSchema);