export default function randomNumber(min, max) {
    if(typeof min !== 'number' || typeof max !== 'number') {
        throw new TypeError('arguments must be numbers')
    }
    if(min === max) {
        return min
    }
    const range = max - min + 1
    return Math.floor(Math.random() * range) + min
}