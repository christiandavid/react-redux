const express = require("express");
const textRoute = require("./text");

const router = express.Router();

module.exports = params => {
  router.use("/", textRoute(params));

  return router;
};
