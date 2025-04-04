const http = require('http');

const controller = require('./socketInit');
const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
controller.createConnection(server);
server.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`)
);
