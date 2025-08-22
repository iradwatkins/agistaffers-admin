const http = require('http');
const port = 3000; // Force port 3000 to match container configuration

const server = http.createServer((req, res) => {
  console.log(`Received request: ${req.method} ${req.url} from ${req.headers.host}`);
  
  if (req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>AGI Staffers Admin</title>
      </head>
      <body>
        <h1>AGI Staffers Admin Dashboard</h1>
        <p>Server is running on port ${port}</p>
        <p>Host: ${req.headers.host}</p>
        <p>Time: ${new Date().toISOString()}</p>
      </body>
      </html>
    `);
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on 0.0.0.0:${port}`);
});