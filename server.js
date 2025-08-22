const http = require('http');
const port = process.env.PORT || 3000;

// Log startup information
console.log('=== AGI Staffers Admin Server Starting ===');
console.log(`Environment: ${process.env.NODE_ENV}`);
console.log(`Port from ENV: ${process.env.PORT}`);
console.log(`Using port: ${port}`);
console.log(`Current time: ${new Date().toISOString()}`);

const server = http.createServer((req, res) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url} - Host: ${req.headers.host} - IP: ${req.socket.remoteAddress}`);
  
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  
  // Handle health check
  if (req.url === '/api/health' || req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
      status: 'ok', 
      timestamp: timestamp,
      uptime: process.uptime(),
      port: port,
      env: process.env.NODE_ENV
    }));
    console.log(`[${timestamp}] Health check OK`);
    return;
  }
  
  // Handle root and all other routes
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>AGI Staffers Admin</title>
      <meta charset="utf-8">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          background: #f5f5f5;
        }
        .container {
          background: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1 { color: #333; }
        .info { 
          background: #f0f0f0; 
          padding: 15px; 
          border-radius: 4px;
          margin: 20px 0;
          font-family: monospace;
        }
        .success { color: #22c55e; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>AGI Staffers Admin Dashboard</h1>
        <p class="success">✅ Server is running successfully!</p>
        <div class="info">
          <strong>Request Details:</strong><br>
          URL: ${req.url}<br>
          Host: ${req.headers.host}<br>
          Time: ${timestamp}<br>
          Server Port: ${port}<br>
          Uptime: ${Math.floor(process.uptime())} seconds<br>
          Environment: ${process.env.NODE_ENV || 'development'}<br>
          Remote IP: ${req.socket.remoteAddress}
        </div>
        <p>If you're seeing this page, the server is working correctly.</p>
      </div>
    </body>
    </html>
  `);
});

// Start server with error handling
server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`=== Server successfully started ===`);
  console.log(`Listening on: http://0.0.0.0:${port}`);
  console.log(`Health check available at: http://0.0.0.0:${port}/api/health`);
  console.log(`Ready to accept connections`);
});