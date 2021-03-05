// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);
const drumsList = ['kicks', 'snares', 'hiHats', 'rideCymbals'];

/* helper function to reference array */
function referenceArray(stringName) {
    switch(stringName) { 
        case 'kicks':
            return kicks;
        case 'snares':
            return snares
        case 'hiHats':
            return hiHats;
        case 'rideCymbals':
            return rideCymbals;
        default:
            return null; 
    }
}

/*  toggleDrum() - flip the boolean value in the correct array at the specified index. */ 
function toggleDrum(arrayName, arrayIndex) {
    // reference array 
    arrayName = referenceArray(arrayName);

    // input validation
    if(!arrayName) {
        return 'Error: missing or invalid arrayName.'
    } else if (arrayIndex === null || arrayIndex < 0 || arrayIndex > 15) {
        return 'Error: missing index or index OutOfBounds.';
    } 

    // switch boolean value at index
    if(arrayName[arrayIndex] === true) {
        arrayName[arrayIndex] = false;
    } else {
        arrayName[arrayIndex] = true;
    }
}

/*  clear() - takes an array name string and sets all values in the correct array to false. */
function clear(arrayName) {
    arrayName = referenceArray(arrayName);

    // input validation 
    if (!arrayName) {
        return 'Error: missing or invalid arrayName.';
    }

    // set all array values to false 
    for(let i = 0; i < arrayName.length; i++) {
        arrayName[i] = false;
    }
}

/* invert() - takes an array name string and flips the boolean value of all elements in the correct array. */
function invert(arrayName) {
    arrayName = referenceArray(arrayName);

    // input validation 
    if(!arrayName) {
        return 'Error: missing or invalid arrayName.';
    }

    // flip all boolean values in the array 
    for(let i = 0; i < arrayName.length; i++) {
        if(arrayName[i]) {
            arrayName[i] = false;
        } else {
            arrayName[i] = true;
        }
    }
}

/* Bonus: getNeighborPads() - return an array of neighbors, each in the form [xValue, yValue] */
// Neighbors are the squares immediately to the left, right, above, and below a grid position. 
function getNeighborPads(x, y, size) {
    let result = [];

    // return empty array when called with x or y arg outside the size range 
    if(x >= size || y >= size || x < 0 || y < 0 || size < 1) {
        return result;
    }

    // push neighboring squares into result array 
    result.push([x + 1, y]);
    result.push ([x - 1, y]);
    result.push([x, y + 1]);
    result.push([x, y - 1]);

    // filter out neighboring pads that go out of bounds 
    return result.filter((neighbor) => {
        return neighbor.every((value) => {
            return value >= 0 && value < size;
        })
    })
}