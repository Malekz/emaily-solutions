const express = require("express");
const mongoose = require("mongoose");
//const cookieSession = require("cookie-session");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI, { userNewUrlParser: true });

const app = express();

require("./routes/authRoutes")(app);
// https://sleepy-fortress-88962.herokuapp.com/

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//http://localhost:5000/
