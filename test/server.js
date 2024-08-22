import http from 'http';
import { URL } from 'url';

const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const path = parsedUrl.pathname;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Path: ${path}`);
});

server.listen(port, () => {
  console.log(`Server running`);
});