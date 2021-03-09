const jwt = require('jsonwebtoken');

async function auth(req, res, next) {


  try {
    const bearerHeader = req.headers["authorization"];
    console.log("******", bearerHeader);
    if (typeof bearerHeader !== "undefined") {
      console.log("bearer header is not undefined");
      const token = bearerHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET, function (err, payload) {
        if (err) return res.status(500).json({ message: "Invalid token" });
        console.log(payload);
        req.currentUserId = payload.userId;
        console.log(req.currentUserId);
        next();
      });
    } else {
      res.sendStatus(403);
    };
  } catch (err) {
    console.log(err);
    return res.satus(500).json({ status: 500, error: 'Something went wrong. Please try again' });
  }
};

module.exports = auth;
