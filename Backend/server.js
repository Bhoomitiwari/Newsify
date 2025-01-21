const express = require('express');
const authRoutes = require('./routes/auth');
const { connectDB } = require('./ConnectDb');
const  cors = require('cors');

// const todoRoutes = require('./routes/todo');

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://127.0.0.1:5500", credentials: true }));
app.use('/auth', authRoutes);

const PORT = 3000;
app.listen(PORT, async() => {
    await connectDB();
    console.log(`Server running on http://localhost:${PORT}`);
});
