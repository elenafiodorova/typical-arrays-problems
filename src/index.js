
exports.min = function min (array) {
    if ( Array.isArray(array) === false || array === undefined || array.length === 0)  {return 0;}
    else {
        let minNumber=array[0];
        for (let i=0; i<array.length; i++) {
            if (minNumber>array[i+1]) {
            minNumber = array[i+1];
            } 
        }
        return minNumber;
    }   
}

exports.max = function max (array) {
    if ( Array.isArray(array) === false || array === undefined || array.length === 0)  {return 0;}
    else {
        let maxNumber=array[0];
        for (let i=0; i<array.length; i++) {
            if (maxNumber<array[i+1]) {
            maxNumber = array[i+1];
            } 
        }
        return maxNumber;
    }    
}

exports.avg = function avg (array) {
    if ( Array.isArray(array) === false || array === undefined || array.length === 0)  {return 0;}
    else {
        let avgNumber = 0;
        for (let i=0; i<array.length; i++) {
            avgNumber = avgNumber + array[i];
        }
        avgNumber = avgNumber/array.length;
        return avgNumber;
    }    
}
