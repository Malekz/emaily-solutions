const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");
require("./models/Users");
mongoose.connect(keys.mongoURI);

const app = express();

require("./routes/authRoutes")(app);
// https://sleepy-fortress-88962.herokuapp.com/

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//http://localhost:5000/
