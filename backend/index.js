const express = require("express");
const moogoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

//middleware
app.use(express.json());

const mongoURL =
  "mongodb+srv://pasindu123:Pasindu123@restuarentbackend.rfy2smt.mongodb.net/?retryWrites=true&w=majority&appName=restuarentBackend";

app.get("/", (req, res) => {
  res.send("hello from api");
});

moogoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connect to database");
    app.listen(9900, () => {
      console.log(`Server is running on port 9900`);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
