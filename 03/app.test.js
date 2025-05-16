import randomNumber from './app';

describe('randomNumber', () => {
    it('should return 1 when range is from 1 to 1', () => {
        expect(randomNumber(1, 1)).toBe(1)
    })
    it('should throw TypeError when arguments are not numbers', () => {
        expect(() => randomNumber('a', 5)).toThrow(TypeError)
        expect(() => randomNumber(1, 'b')).toThrow(TypeError)
        expect(() => randomNumber(undefined, 5)).toThrow(TypeError)
    })
})