const requireLogin = require("../middlewares/requireLogin");

const requireCredits = require("../middlewares/requireCredits");
module.exports = app => {
  // we are saying here is " if anyone makes a post request to api/surveys, then first make sure that the user is logged in and then if they have enough credit and only then you can finally create a campaign or do whatever logic you want to do."
  app.post("api/surveys", requireLogin, requireCredits, (req, res) => {});
};
