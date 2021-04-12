/*
/* Title: About handler
/* Description: About handler
/* Author: Md. Aminul Islam Emrul
/* Date: 10/4/21
*/

const handler = {};

handler.aboutHandler = (requestPropertise, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];

    if (acceptedMethods.indexOf(requestPropertise.method) > -1) {
        handler._about[requestPropertise.method](requestPropertise, callback);
    } else {
        callback(405);
    }
};

handler._about = {};

handler._about.get = (requestPropertise, callback) => {
    callback(200);
};

handler._about.post = (requestPropertise, callback) => {
    callback(200);
};

handler._about.put = (requestPropertise, callback) => {
    callback(200);
};

handler._about.delete = (requestPropertise, callback) => {
    callback(200);
};
module.exports = handler;
