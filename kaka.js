const express = require("express");
const cors = require("cors");
require('dotenv').config();
const userRoutes = require("./routes/userroutes");

const app = express();

const port = process.env.PORT
app.use(cors());
app.use(express.json());
app.use('/user', userRoutes);

//test request/response
app.get("/", (req, res) => {
    res.json({
        message: "Hello ,welcom to our server kakalamand"
    });
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`); 
});