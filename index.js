/*
/* Title: Rest API Node Project
/* Description: Simple core node js project with Rest API
/* Author: Md. Aminul Islam Emrul
/* Date: 10/4/21
*/

// dependencis
const http = require('http');
const { config } = require('process');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');

// app object - module scaffolding
const app = {};

// testing file system - for create new file
// const writeData = {
//     name: 'Aminul Islam Emrul',
//     age: '25',
//     profession: 'Software Engineer',
// };

// data.create('test', 'newFile', writeData, (err) => {
//     console.log(err);
// });

// read file data
// data.read('test', 'newFile', (err, data) => {
//     console.log(`Error: ${err}`, `Data: ${data}`);
// });

// update data
// const updateData = {
//     name: 'Aminul Islam Emrul',
//     age: '25',
//     profession: 'Software Engineer',
//     background: 'Computer Science & Engineering (CSE)',
// };
// data.update('test', 'newFile', updateData, (err) => {
//     console.log(`Error: ${err}`);
// });

// delete file
// data.delete('test', 'newFile', (err) => {
//     console.log(`Error: ${err}`);
// });

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`Server start on - ${environment.envName}`);
        console.log(`Server start on port- ${environment.port}`);
    });
};

// handle request response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
