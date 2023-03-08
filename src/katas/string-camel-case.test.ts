import { capitalizeWord, convertToCamelCase } from "./string-camel-case";

describe('String camel case', () => {
    it('should call the method converToCamelCase', () => {
        expect(convertToCamelCase).toBeDefined()
    });
    it('should return the same string if doesnt contain _ or - ', () => {
        expect(convertToCamelCase('test')).toEqual('test')
    });
    it('should return the same string if doesnt contain _ or - ', () => {
        expect(convertToCamelCase('test')).toEqual('test')
    });
    it('should return the same camel case in case of - separator', () => {
        expect(convertToCamelCase('test-wild')).toEqual('testWild')
    });
    it('should return the camel case in case of _ separator', () => {
        expect(convertToCamelCase('test_wild')).toEqual('testWild')
    });
    it('should return the pascal case in case of _ separator', () => {
        expect(convertToCamelCase('Test_wild')).toEqual('TestWild')
    });
    it('should return the camel case - _ separators', () => {
        expect(convertToCamelCase('Test_wild-joke')).toEqual('TestWildJoke')
    });
    it('should return the pascal case in case of _ separator', () => {
        expect(convertToCamelCase('Test_wild')).toEqual('TestWild')
    });


});
describe('capitalize word', () => {
    it('should call the method capitalizeWord', () => {
        expect(capitalizeWord).toBeDefined()
    });
    it('should return an empty string if word is empty string', () => {
        expect(capitalizeWord('')).toEqual('')
    });
    it('should return a word with first Letter Capitalised ', () => {
        expect(capitalizeWord('word')).toEqual('Word')
    });

});