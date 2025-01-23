const mongoose = require('mongoose');


// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

// Models
module.exports = mongoose.model('User', userSchema);  // Use CommonJS syntax for exports
