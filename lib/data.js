/*
/* Title: Data Handleing with file
/* Description: all related data operations
/* Author: Md. Aminul Islam Emrul
/* Date: 10/4/21
*/

// dependencies
const fs = require('fs');
const path = require('path');

// module scaffolding
const lib = {};

// Base directory of the data folder
lib.basedir = path.join(__dirname, '/../.data/');

// write data to file
lib.create = (dir, file, data, callback) => {
    // open file to write
    fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            // Convert data to string
            const stringData = JSON.stringify(data);

            // write data to file and then close it
            fs.writeFile(fileDescriptor, stringData, (er) => {
                if (!er) {
                    fs.close(fileDescriptor, (error) => {
                        if (!error) {
                            callback(false);
                        } else {
                            callback('Error closing the file!');
                        }
                    });
                } else {
                    callback('Error writing to new file!');
                }
            });
        } else {
            callback('Could not create new file, it may already exists!');
        }
    });
};

// read data from file
lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf8', (err, data) => {
        callback(err, data);
    });
};

// update file data
lib.update = (dir, file, data, callback) => {
    // open file to write
    fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            // convert the data to string
            const stringData = JSON.stringify(data);

            // turncate data file
            fs.ftruncate(fileDescriptor, (er) => {
                if (!er) {
                    // write to the file and close it
                    fs.writeFile(fileDescriptor, stringData, (errOccur) => {
                        if (!errOccur) {
                            // close the file
                            fs.close(fileDescriptor, (errOccur2) => {
                                if (!errOccur2) {
                                    callback(false);
                                } else {
                                    callback('Error close the file!');
                                }
                            });
                        } else {
                            callback('Error to write file');
                        }
                    });
                } else {
                    callback('Error truncate the file!');
                }
            });
        } else {
            callback('Error opening the file!');
        }
    });
};

// unlink file
lib.delete = (dir, file, callback) => {
    fs.unlink(`${lib.basedir + dir}/${file}.json`, (error) => {
        if (!error) {
            callback(false);
        } else {
            callback('Error unlink file!');
        }
    });
};

// export
module.exports = lib;
