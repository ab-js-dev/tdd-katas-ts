import * as CountModule from './count-cubes';

describe('count cubes', () => {
    it('should have a function called countSquares', () => {
        expect(CountModule.countSquares).toBeDefined();
    });
    it('should accept number of cuts', () => {
        const spyOn = jest.spyOn(CountModule, 'countSquares')
        CountModule.countSquares(1)
        expect(spyOn).toHaveBeenCalledWith(1);
    });
    it('should return 26 if cuts = 2', () => {
        expect(CountModule.countSquares(2)).toEqual(26);
    });
    it('should return 98 if cuts = 4', () => {
        expect(CountModule.countSquares(4)).toEqual(98);
    });
    it('should return 56 if cuts = 3', () => {
        expect(CountModule.countSquares(3)).toEqual(56);
    });
    it('should return 1 if cuts = 0', () => {
        expect(CountModule.countSquares(0)).toEqual(1);
    });
    it('should return 8 if cuts = 1', () => {
        expect(CountModule.countSquares(0)).toEqual(1);
    });
});