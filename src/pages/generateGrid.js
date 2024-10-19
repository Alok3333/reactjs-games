const generateGrid = (words, size) => {
  const grid = Array.from({ length: size }, () => Array(size).fill(""));
  const directions = [
    [0, 1], // right
    [1, 0], // down
    [1, 1], // diagonal down right
    [-1, 1], // diagonal up right
  ];

  for (const word of words) {
    let placed = false;
    while (!placed) {
      const direction =
        directions[Math.floor(Math.random() * directions.length)];
      const row = Math.floor(Math.random() * size);
      const col = Math.floor(Math.random() * size);
      const wordLength = word.length;

      if (
        row + direction[0] * (wordLength - 1) < size &&
        col + direction[1] * (wordLength - 1) < size &&
        row + direction[0] * (wordLength - 1) >= 0 &&
        col + direction[1] * (wordLength - 1) >= 0
      ) {
        let canPlace = true;
        for (let i = 0; i < wordLength; i++) {
          if (grid[row + direction[0] * i][col + direction[1] * i] !== "") {
            canPlace = false;
            break;
          }
        }

        if (canPlace) {
          for (let i = 0; i < wordLength; i++) {
            grid[row + direction[0] * i][col + direction[1] * i] = word[i];
          }
          placed = true;
        }
      }
    }
  }

  // Fill remaining cells with random letters
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (grid[i][j] === "") {
        grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      }
    }
  }

  return grid;
};

export default generateGrid;
