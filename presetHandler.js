// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
/*  returns 404 as first array element if invalid index 
    400 as first array element if httpVerb is not GET or PUT 
    200 as first array element if index is valid 
    if index valid for GET - second element in array should be preset array 
    if index valid for PUT - save newPresetArray to index and return it as second element of array 
*/
const presetHandler = (httpVerb, arrayIndex, newPresetArray) => {
    // returns array 
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
