const fiona = require('fiona')

module.exports = {
    /**
     * Generate OTP of specified digit
     * @param {number} digits Number of digits in OTP
     */
    generate: function(digits) {
        if (typeof (digits) != 'number') digits = 4;
        else if (digits <= 0) digits = 4;
        var seed = Math.floor(Math.random() * (999999999999 - 100000000000) + 100000000000).toString();
        console.log(seed);
        seed = leftPad(seed, 13);
        var min = Math.pow(10, (digits - 1));
        var max = Math.pow(10, digits) - 1;
        var result = generateRandom(seed, max, min);
        return result;
    },

    /**
     * Generate OTP of specified digit using a specified seed
     * @param {number} digits Number of digits in OTP
     * @param {number} seed Seed to generate OTP
     */
    generateWithSeed: function(digits, seed) {
        if (typeof (digits) != 'number') digits = 4;
        else if (digits <= 0) digits = 4;
        if (seed) {
            if (typeof (seed) == 'number') seed = seed.toString().trim();
            else seed = Math.floor(Math.random() * (999999999999 - 100000000000) + 100000000000).toString();
        }
        else {
            seed = Math.floor(Math.random() * (999999999999 - 100000000000) + 100000000000).toString();
        }
        seed = leftPad(seed, 13);
        var min = Math.pow(10, (digits - 1));
        var max = Math.pow(10, digits) - 1;
        var result = generateRandom(seed, max, min);
        return result;
    }
}

/**
 * Generate Random number
 * @param {number} aseed Variable seed
 * @param {number} max Max. value of random number
 * @param {number} min Min. value of random number
 */
function generateRandom(aseed, max, min) {
    if (typeof (max) != 'number') max = 9999;
    if (typeof (min) != 'number') min = 1000;
    
    var tseed = new Date().valueOf().toString();
    var seed = '';
    for (let index = 0; index < tseed.length; index++) {
        var result = parseInt(aseed[index]) * parseInt(tseed[index]);
        seed += result.toString();
    }
    const value = fiona(seed).number({ min: min, max: max });

    return value;
}

/**
 * Pad zero to the left of the numeric string
 * @param {string} padString String to be padded
 * @param {number} length Total length of padded string
 */
function leftPad (padString, length) {
    var str = padString.toString();
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}
