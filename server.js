const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/database");
const registrationRoutes = require("./routes/registration");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());

connectDB();

app.use("/api", registrationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
