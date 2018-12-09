const express = require('express');
const app = require('./config/app');
const routes = require('./config/routes');
const post = require('./controllers/post');

const port = parseInt(process.env.PORT, 10) || 3000;
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get(routes.post, post);

  server.get(routes.universal, (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`http://localhost:${port}`);
  });
}).catch((err) => { console.error(err); });
