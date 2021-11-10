function validate(password) {

    const stringToArr = password.split('');

    let upperRes = false;
    let lowerRes = false;
    let numberRes = false;

    for (let i = 0; i < stringToArr.length; i++) {
        // -------------- check upperCase
        if (stringToArr[i] === stringToArr[i].toUpperCase() && isNaN(parseInt(stringToArr[i])) === true) {
            upperRes = true;
        }

        // -------------- check lowerCase
        if (stringToArr[i] === stringToArr[i].toLowerCase() && isNaN(parseInt(stringToArr[i])) === true) {
            lowerRes = true;
        }

        // -------------- check number
        if (isNaN(stringToArr[i]) === false) {
            numberRes = true;
        }
    }

    if (password.length >= 6 && upperRes === true && lowerRes === true && numberRes === true && isValid(password) === true) {
        return `${password} - Expected true`; // change to return false
    } else {
        return `${password} - Expected false`;// change to return false
    }
}

function isValid(password) {
    return /^[a-zA-Z0-9]+$/.test(password)
}

//  -------------- Tests -----------------

console.log(validate('aA412'))      //false
console.log(validate('djI38D55'))   //true
console.log(validate('a2.d412'))    //false
console.log(validate('JHD5FJ53'))   //false
console.log(validate('!fdjn345'))   //false
console.log(validate('a2.d412'))    //false
console.log(validate('123'))        //false
console.log(validate('abc'))        //false
console.log(validate('jfkdfj3j'))   //false
console.log(validate('Password123'))//true



// ----------------- Another short option
// function validate(password) {
//   return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
// }
