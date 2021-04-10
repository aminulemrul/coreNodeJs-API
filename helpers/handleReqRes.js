/*
/* Title: Request Handler page
/* Description: Simple core node js project with Rest API
/* Author: Md. Aminul Islam Emrul
/* Date: 10/4/21
*/

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // handling request
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const requestPropertise = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };

    const decoder = new StringDecoder('utf-8');
    let bodyData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    chosenHandler(requestPropertise, (statusCode, payload) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 500;

        payload = typeof payload === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        // Final response
        res.writeHead(statusCode);
        res.end(payloadString);
    });

    req.on('data', (buffer) => {
        bodyData += decoder.write(buffer);
    });

    req.on('end', () => {
        bodyData += decoder.end();

        console.log(bodyData);
        // response handle
        res.end();
    });
};

module.exports = handler;
