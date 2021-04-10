/*
/* Title: Route
/* Description: Route
/* Author: Md. Aminul Islam Emrul
/* Date: 10/4/21
*/

// dependencies
const { aboutHandler } = require('./handlers/routeHandlers/aboutHandler');

const routes = {
    about: aboutHandler,
};

module.exports = routes;
