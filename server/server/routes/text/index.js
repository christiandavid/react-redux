const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { textService } = params;

  router.post('/', (req, res) => {
    try {
      const text = textService.processText(req.body.text.trim());
      return res.send({ text });
    } catch (err) {
      return res.status(400).send({ error: 'Empty request' });
    }
  });

  return router;
};
