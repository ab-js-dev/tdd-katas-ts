export const validCard = (cardNumber: string) => {
    const cleanNumbers = cardNumber.replace(/[^0-9]/g, '');
    let sum = 0;
    for(let i = 0; i < cleanNumbers.length; i++) {
        const numberInProcess = i % 2 === 0 ?  Number(cleanNumbers[i]) * 2 :  Number(cleanNumbers[i]);
        sum += (numberInProcess <= 9) ? numberInProcess : numberInProcess - 9;
    }
    return sum % 10 === 0;
}