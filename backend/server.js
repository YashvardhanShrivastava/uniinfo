const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./configdb/db");
const authRoutes = require("./routes/auth");

dotenv.config(); // ✅ .env config load

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// ✅ Routes
app.use('/api/auth', require('./routes/auth'));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
