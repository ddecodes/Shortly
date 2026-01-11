const express = require("express");
const app = express();
const path = require("path");
const PORT = 8001;
const { connectDB } = require("./connect");
const urlRouter = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
app.use(express.json());

connectDB("mongodb://localhost:27017/short-url").then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use("/url", urlRouter);
app.use("/", staticRouter);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

