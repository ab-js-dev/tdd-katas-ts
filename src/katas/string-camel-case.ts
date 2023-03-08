export const convertToCamelCase = (stringChain: string): string => {
    if (!stringChain.includes('-') && !stringChain.includes('_')) return stringChain;
    const breakpoint = /[-_]/;
    const [firstWord, ...rest] = stringChain.split(breakpoint);
    return firstWord + [...rest].map(word => capitalizeWord(word)).join();
}

export const capitalizeWord = (word: string) => {
    if (!word) return '';
    const [firstLetter, ...rest] = word.split('')
    return firstLetter.toUpperCase() + [...rest].join('').toLowerCase();

}