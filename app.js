const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    _links: {
      self: {
        href: '/',
      },
    },
  });
});

exports.app = app;
