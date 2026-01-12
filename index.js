const express = require("express");
const cookieParser = require("cookie-parser");

const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth");

const urlRouter = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const userRouter = require("./routes/user");


const app = express();

const path = require("path");
const PORT = 8001;

const { connectDB } = require("./connect");

app.use(express.json());
app.use(cookieParser());

connectDB("mongodb://localhost:27017/short-url").then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", restrictToLoggedinUserOnly, urlRouter);
app.use("/", checkAuth, staticRouter);
app.use("/user", userRouter);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

