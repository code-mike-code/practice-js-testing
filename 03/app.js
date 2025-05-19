export default function randomNumber(min, max) {
    randomNumberValidation(min, max)
    validateRange(min, max)


    if(min === max) {
        return min
    }

    return calcRandomNumber()
}

function randomNumberValidation(min, max){
    if(typeof min !== 'number' || typeof max !== 'number') {
        throw new TypeError('arguments must be numbers')
    }
}

function calcRandomNumber() {
    const range = max - min + 1
    return Math.floor(Math.random() * range) + min
}

function validateRange(min, max) {
    if(min > max) {
        throw new Error('min cant be bigger then max')
    }
}
