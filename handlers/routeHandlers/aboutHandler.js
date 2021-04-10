/*
/* Title: About handler
/* Description: About handler
/* Author: Md. Aminul Islam Emrul
/* Date: 10/4/21
*/

const handler = {};

handler.aboutHandler = (requestPropertise, callback) => {
    callback(200, {
        message: 'This is about page',
    });
};

module.exports = handler;
