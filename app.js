const http = require('http');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = "";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(`<h1>Node.js APP running at http://${hostname}:${port}/</h1>`);
  res.end('<h2>Hello World</h2>\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${ip}:${port}/`);
});