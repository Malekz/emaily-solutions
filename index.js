const express = require("express");
require("./services/passport");
require("./routes/authRoutes");

const app = express();

require("./routes/authRoutes")(app);
// https://sleepy-fortress-88962.herokuapp.com/

// ClientID
// ClientSecret

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//http://localhost:5000/
