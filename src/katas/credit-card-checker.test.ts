import { validCard } from './credit-card-checker';
describe('', () => {
    it('should validCard function be defined', () => {
        expect(validCard).toBeDefined()
    });
    it('should validCard function be defined', () => {
        expect(validCard('5457 6238 9823 4311')).toEqual(true)
    });
    it('should validCard function be defined', () => {
        expect(validCard('5457 6238 9323 4311')).toEqual(false)
    });
    it('should validCard function be defined', () => {
        expect(validCard('9999 9999 9999 9995')).toEqual(true)
    });
})