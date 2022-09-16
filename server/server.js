const express = require("express");
const dotenv = require("dotenv");
const taskRoute = require("./routes/Task");
const connectDb = require("./database/db");
const path = require("path");
const cors = require("cors");
const app = express();

dotenv.config({ path: "./config/config.env" });
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Connect DB
connectDb();

// routes
app.use(cors());
app.use("/api/v1/tasks", taskRoute);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is listening to port ${port}...`));
