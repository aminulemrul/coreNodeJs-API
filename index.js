/*
/* Title: Rest API Node Project
/* Description: Simple core node js project with Rest API
/* Author: Md. Aminul Islam Emrul
/* Date: 10/4/21
*/

// dependencis
const http = require('http');
const { config } = require('process');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Server start on port- ${app.config.port}`);
    });
};

// handle request response
app.handleReqRes = (req, res) => {
    res.end('Request Accept');
};

// start the server
app.createServer();
