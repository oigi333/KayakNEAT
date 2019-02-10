const path = require('path');
const callsite = require('callsite');


const appPath = path.join(__dirname, "..", "dist") // /test/../dist ergo /dist

// Each test coresponds to a module in /dist subfolder, this function should return it
// For example: in /tests/module/module.js it should return /dist/module/module.js
// I think using global here is adequate because of narrow context of the tests
global.getModule = ()=>{
    // callsite(0) returns js call stack as array so callsite()[1] is previous function
    const testPath = callsite()[1].getFileName();
    //__dirname is directory path of /tests
    const relativePath = path.relative(__dirname, path.dirname(testPath));
    // For example: /dist/ + module/ + module.js
    const modulePath = path.join(appPath, relativePath, path.basename(testPath));
    return require(modulePath);
};