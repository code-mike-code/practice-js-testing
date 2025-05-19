export default function randomNumber(min, max) {
    randomNumberValidation(min, max)
    validateRange(min, max)

    if(isEqualRange(min, max)) {
        return min
    }

    return calcRandomNumber(min, max)
}

function randomNumberValidation(min, max){
    if(!isNumber(min) || !isNumber(max)) {
        throw new TypeError('Arguments must be numbers')
    }
}

function calcRandomNumber(min, max) {
    const range = calculateRange(min, max)
    return Math.floor(Math.random() * range) + min
}

function validateRange(min, max) {
    if(isInvalidRange(min, max)) {
        throw new Error('Minimum value cannot be bigger then maximum value')
    }
}

function calculateRange(min, max) {
    return max - min + 1
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