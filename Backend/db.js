const mongoose = require('mongoose');

// Connect to MongoDB
// Uncomment if you want to connect to MongoDB (adjust connection string if needed)
// const connectDB = async () => {
//     await mongoose.connect(
//         'mongodb+srv://vivpasingh:ielBXbmVKP18id56@cluster0.xew7a.mongodb.net/Newsify',
//         { useNewUrlParser: true, useUnifiedTopology: true }
//     );
// };

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

// Models
module.exports = mongoose.model('User', userSchema);  // Use CommonJS syntax for exports
