require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// ✅ MongoDB connection and Server start
mongoose.connect("mongodb://127.0.0.1:27017/yashdb")
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));
