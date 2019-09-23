const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { textService } = params;

  router.post('/', (req, res) => {
    try {
      return res.send({});
    } catch (err) {
      return res.status(421).send({ error: err.message });
    }
  });

  return router;
};
