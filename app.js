const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const userRoute = require("./routes/userRoute");
const cors = require('cors');
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  cors({
    origin: [
      "https://syntaxseeker-auth.vercel.app",
      "https://syntaxseeker-auth-7snz-ehibf6gv3-deiu25s-projects.vercel.app" 
    ],
    credentials: true,
  })
);

// Routes
app.use("/api/users", userRoute);
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use(errorHandler);

module.exports = app;