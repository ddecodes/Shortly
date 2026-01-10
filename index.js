const express = require("express");
const app = express();
const PORT = 8001;
const { connectDB } = require("./connect");
const urlRouter = require("./routes/url");

app.use(express.json());

connectDB("mongodb://localhost:27017/short-url").then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

app.use(express.json());
app.use("/url", urlRouter);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

