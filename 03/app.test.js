import randomNumber from './app';

describe('randomNumber', () => {

    describe('rangeTest', () => {
        it('should return 1 when range is from 1 to 1', () => {
            expect(randomNumber(1, 1)).toBe(1)
        })
    })

    describe('numberValidation', () => {
        it('should throw TypeError when arguments are not numbers', () => {
            expect(() => randomNumber('a', 4)).toThrow(TypeError)
            expect(() => randomNumber(3, 'b')).toThrow(TypeError)
            expect(() => randomNumber(undefined, 4)).toThrow(TypeError)
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