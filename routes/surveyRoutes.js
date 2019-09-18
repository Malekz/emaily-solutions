const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const requireCredits = require("../middlewares/requireCredits");
const Survey = mongoose.model("surveys");
module.exports = app => {
  // we are saying here is " if anyone makes a post request to api/surveys, then first make sure that the user is logged in and then if they have enough credit and only then you can finally create a campaign or do whatever logic you want to do."
  app.post("api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });
  });
};
