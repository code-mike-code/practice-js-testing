export default function randomNumber(min, max) {
    if(typeof min !== 'number' || typeof max !== 'number') {
        throw new TypeError('arguments must be numbers')
    }
    if(min === max) {
        return min
    }
    return Math.floor(Math.random() * (max - min + 1)) + min
}