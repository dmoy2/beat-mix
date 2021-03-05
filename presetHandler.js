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
    let result = [];

    // validate httpVerb 
    if(httpVerb !== 'GET' && httpVerb !== 'PUT') {
        result.push(400);
    } 

    // validate arrayIndex
    if(!isArrayIndexValid(arrayIndex)) {
        result.push(404);
    } else {
        result.push(200);
    }
    
    // handle GET requests 
    if (httpVerb === 'GET' && result[0] === 200) {
        // handle successful GET requests 
        result.push(presets[arrayIndex]);
    }

    // handle PUT requests 
    if(httpVerb === 'PUT' && result[0] === 200) {
        // handle successful PUT request 
        presets.splice(arrayIndex, 0, newPresetArray);
        result.push(newPresetArray);
    }  

    // returns array 
    // console.log(result);
    return result;
};

// validate array index 
function isArrayIndexValid(arrayIndex) {
    if(arrayIndex === null){
        return false;
    } else if(arrayIndex < 0 || arrayIndex > 15) {
        return false;
    } else {
        return true;
    }
}   

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
