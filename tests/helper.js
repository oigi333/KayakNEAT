const fs = require('fs');
const path = require('path');
const callsite = require('callsite');


const appPath = path.join(__dirname, "..", "dist") // test/../dist

// Each test coresponds to a module in /dist subfolder, this function returns a tested module
// For example: in /tests/module/module.js it should return /dist/module/module.js
// I think using global here is adequate because of narrow context of the tests
global.getModule = ()=>{
    // Callsite is js call stack class so callsite()[1] is previous function
    const testPath = callsite()[1].getFileName();
    //__dirname is directory path of /tests
    const relativePath = path.relative(__dirname, path.dirname(testPath));
    // For example: dist/ + module/ + module.js
    const modulePath = path.join(appPath, relativePath, path.basename(testPath));
    return require(modulePath);
};