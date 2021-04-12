/*
/* Title: Utitlities
/* Description: Utitlities
/* Author: Md. Aminul Islam Emrul
/* Date: 11/4/21
*/

// module scaffolding
const utilities = {};

// parse JSON string to object
utilities.parseJSON = (JSONstring) => {
    let output;
    try {
        output = JSON.parse(JSONstring);
    } catch {
        output = {};
    }
    return output;
};

module.exports = utilities;
