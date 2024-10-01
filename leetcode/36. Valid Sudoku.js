/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const row = new Array({length: 9}, () => new Set());
    const col = new Array({length: 9}, () => new Set());
    const subBoard = new Array({length: 9}, () => new Set());

    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            const value = board[r][c];
            if(value === '.'){
                continue;
            }
            
            const subBoardIndex = Math.floor(r/3) * 3 + Math.floor(c/3);

            if(row[r].has(value) || 
                col[c].has(value) || 
                subBoard[subBoardR][subBoardC].has(value)
            ){
                return false;
            }
            row[r].add(value);
            col[c].add(value);
            subBoard[subBoardIndex].add(value);
        }
    }

    return true;
};
