const express = require('express');
const { parse } = require('url');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

app.prepare().then(() => {
  // All route handler
  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);

    return handle(req, res, parsedUrl);
  });

  // Default error response
  server.use((error, req, res, next) => {
    return res.status(500).json({ ok: false, error: error.toString() });
  });

  server.listen(port, (err) => {
    if (err) throw err;

    console.log(`\n ==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  });
})
  .catch((exception) => {
    console.error(exception.stack);
    process.exit(1);
  });