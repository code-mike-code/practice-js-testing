export default function randomNumber(min, max) {
    randomNumberValidation(min, max)
    validateRange(min, max)


    if(isEqualRange(min, max)) {
        return min
    }

    return calcRandomNumber()
}

function randomNumberValidation(min, max){
    if(!isNumber(min) || !isNumber(max)) {
        throw new TypeError('arguments must be numbers')
    }
}

function calcRandomNumber() {
    const range = max - min + 1
    return Math.floor(Math.random() * range) + min
}

function validateRange(min, max) {
    if(isInvalidRange(min, max)) {
        throw new Error('min cant be bigger then max')
    }
}

function isNumber(value) {
    return typeof value === 'number'
}
function isEqualRange(min, max) {
    return min === max
}
function isInvalidRange(min, max) {
    return min > max
}