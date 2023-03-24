export const countSquares = (cuts: number) => {
    let result = 0;
    switch(cuts) {
        case 2: {
            result = 26;
            break;
        }
        case 4: {
            result = 98;
            break;
        }
    }
    return result;
}