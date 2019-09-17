const express = require('express');
const server = express();
const port = 3000;

server.get('/', (req, res) => res.sendFile(`${__dirname}/page/index.html`));

server.listen(port, () => console.log(`listening on port ${port}!`));