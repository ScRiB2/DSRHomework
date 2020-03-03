export const checkWinner = (field: string[]): boolean => {
    const winnerCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winnerCombination.length; i++) {
        const [a, b, c] = winnerCombination[i];
        if (field[a] !== '' && field[b] === field[a] && field[c] === field[a]) {
            return true;
        }
    }
    return false;
};