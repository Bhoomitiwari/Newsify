const mongoose = require('mongoose');  // Make sure mongoose is required
const connectDB = async () => {
    await mongoose.connect(
        'Your_URL'
    );
    console.log('MongoDB Connected...');
};

module.exports = {connectDB};  // Use CommonJS module export
