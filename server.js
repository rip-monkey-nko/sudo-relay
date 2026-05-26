const Gun = require('gun');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(Gun.serve);

const server = app.listen(port, () => {
  console.log(`Sudo relay running on port ${port}`);
});

Gun({ web: server });
