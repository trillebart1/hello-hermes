const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.get('/', (_req, res) => {
  res.type('html').send(`<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello Hermes</title>
    <style>
      :root { color-scheme: light dark; }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: radial-gradient(circle at top, #eef2ff, #ffffff 45%, #dbeafe);
        color: #0f172a;
      }
      main {
        text-align: center;
        padding: 2.5rem;
        border-radius: 1.5rem;
        background: rgba(255, 255, 255, 0.78);
        box-shadow: 0 24px 80px rgba(15, 23, 42, 0.16);
        border: 1px solid rgba(148, 163, 184, 0.35);
      }
      h1 { margin: 0; font-size: clamp(2.5rem, 8vw, 5rem); }
      p { margin: 1rem 0 0; font-size: 1.15rem; color: #475569; }
    </style>
  </head>
  <body>
    <main>
      <h1>Merhaba Dünya</h1>
      <p>Hello from Hermes 👋</p>
    </main>
  </body>
</html>`);
});

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'hello-hermes' });
});

if (require.main === module) {
  app.listen(port, host, () => {
    console.log(`hello-hermes listening on http://${host}:${port}`);
  });
}

module.exports = app;
