export const countSquares = (cuts: number) => {
    if (cuts === 0) return 1;
    if (cuts === 1) return 8;
    const squaresInFacade = Math.pow(cuts + 1, 2);
    return  (squaresInFacade * 2) + (4 * cuts * (cuts - 1));
}