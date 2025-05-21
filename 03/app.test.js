import randomNumber from './app';

describe('randomNumber', () => {

    describe('rangeTest', () => {
        it('should return 1 when range is from 1 to 1', () => {
            expect(randomNumber(1, 1)).toBe(1)
        })
    })

    describe('numberValidation', () => {
        it('should throw TypeError when first argument is not a number', () => {
            expect(() => randomNumber('a', 4)).toThrow('First argument should be a number')
            expect(() => randomNumber(undefined, 4)).toThrow('First argument should be a number')
            expect(() => randomNumber(null, 4)).toThrow('First argument should be a number')
        })
        it('should throw TypeError when second argument is not a number', () => {
            expect(() => randomNumber(3, 'b')).toThrow('Second argument should be a number')
            expect(() => randomNumber(3, undefined)).toThrow('Second argument should be a number')
            expect(() => randomNumber(3, null)).toThrow('Second argument should be a number')
        })
    })

    describe('rangeValidation', () => {
        it('should throw Error when min is bigger than max', () => {
            expect(() => randomNumber(4, 3)).toThrow('Minimum value cannot be bigger then maximum value')
        })
    })

    describe('correctRangeNumber', () => {
        it('should return number between min and max', () => {
            const min = 3
            const max = 4
            const result = randomNumber(min, max)

            expect(result).toBeGreaterThanOrEqual(min)
            expect(result).toBeLessThanOrEqual(max)
        })
    })
})