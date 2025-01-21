const mongoose = require('mongoose');  // Make sure mongoose is required
const connectDB = async () => {
    await mongoose.connect(
        'mongodb+srv://vivpasingh:ielBXbmVKP18id56@cluster0.xew7a.mongodb.net/Newsify'
    );
    console.log('MongoDB Connected...');
};

module.exports = {connectDB};  // Use CommonJS module export
