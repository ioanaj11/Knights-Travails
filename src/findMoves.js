//generates the possible moves the knight can make
function findMoves(knight) {
    const moves = [
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
    ];
    return moves.map(([x, y]) => [knight[0] + x, knight[1] + y]).filter(isValidMove);
  }
  
  function isValidMove([x, y]) {
    return x >= 1 && x <= 8 && y >= 1 && y <= 8;
  }

export{findMoves};