import express from 'express';
import http from 'http';

let app = express();
let server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server is listening on port 8080');
});