/*
/* Title: 404 not Found handler
/* Description: 404 not Found handler
/* Author: Md. Aminul Islam Emrul
/* Date: 10/4/21
*/

const handler = {};

handler.notFoundHandler = (requestPropertise, callback) => {
    callback(404, {
        message: 'Not Found',
    });
};

module.exports = handler;
