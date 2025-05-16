import randomNumber from './app';

describe('randomNumber', () => {
    it('should return 1 when range is from 1 to 1', () => {
        expect(randomNumber(1, 1)).toBe(1)
    })
})