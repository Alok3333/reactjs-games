import React, { useState } from "react";

const PathFinder = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const visited = new Array(rows).fill(0).map(() => new Array(cols).fill(false));

  const isValidMove = (row, col) => {
    return (
      row >= 0 &&
      row < rows &&
      col >= 0 &&
      col < cols &&
      matrix[row][col] === 1 &&
      !visited[row][col]
    );
  };

  const bfs = (startRow, startCol) => {
    const rowMoves = [-1, 1, 0, 0]; // Up and Down
    const colMoves = [0, 0, -1, 1]; // Left and Right
    const queue = [[startRow, startCol]];
    visited[startRow][startCol] = true;

    while (queue.length > 0) {
      const [row, col] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const newRow = row + rowMoves[i];
        const newCol = col + colMoves[i];
        if (isValidMove(newRow, newCol)) {
          queue.push([newRow, newCol]);
          visited[newRow][newCol] = true;
        }
      }
    }
  };

  const isPathValid = () => {
    // Check top and bottom edges
    for (let i = 0; i < cols; i++) {
      if (matrix[0][i] === 1 && visited[0][i]) {
        return true;
      }
      if (matrix[rows - 1][i] === 1 && visited[rows - 1][i]) {
        return true;
      }
    }

    // Check left and right edges
    for (let i = 0; i < rows; i++) {
      if (matrix[i][0] === 1 && visited[i][0]) {
        return true;
      }
      if (matrix[i][cols - 1] === 1 && visited[i][cols - 1]) {
        return true;
      }
    }

    return false;
  };

  const findPath = () => {
    // Check top and bottom edges
    for (let i = 0; i < cols; i++) {
      if (matrix[0][i] === 1) {
        bfs(0, i);
      }
      if (matrix[rows - 1][i] === 1) {
        bfs(rows - 1, i);
      }
    }

    // Check left and right edges
    for (let i = 0; i < rows; i++) {
      if (matrix[i][0] === 1) {
        bfs(i, 0);
      }
      if (matrix[i][cols - 1] === 1) {
        bfs(i, cols - 1);
      }
    }

    // Return the visited array to indicate which cells are part of the path
    return visited;
  };

  return { findPath, isPathValid, visited };
};

const PathFinderComponent = () => {
  const matrix = [
    [1, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1, 1],
  ];

  const { findPath } = PathFinder(matrix);
  const [visited, setVisited] = useState([]);
  const [pathFound, setPathFound] = useState(false);

  const handleFindPath = () => {
    const path = findPath();
    const isValidPath = path.some(row => row.some(cell => cell)); // Check if any path cells are visited
    setPathFound(isValidPath);
    setVisited(path);
    console.log(isValidPath ? "Path is found!" : "Path is not found!");
  };

  const styles = {
    app: {
      textAlign: "center",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 50px)",
      gridTemplateRows: "repeat(6, 50px)",
      gap: "2px",
    },
    cell: {
      width: "50px",
      height: "50px",
      border: "1px solid black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    path: {
      backgroundColor: "grey",
    },
    validPath: {
      backgroundColor: "rgb(20, 158, 55)",
    },
    invalidPath: {
      backgroundColor: "rgb(167, 13, 13)",
    },
    obstacle: {
      backgroundColor: "rgb(27, 27, 27)",
    },
    button: {
      backgroundColor: "rgb(19, 22, 26)",
      color: "rgb(66, 241, 12)",
      fontSize: "22px",
      padding: "12px 30px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginBottom: "20px",
    },
    pathInfo: {
      fontWeight: 600,
      fontSize: "large",
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.app}>
      <button style={styles.button} onClick={handleFindPath}>
        Find Path
      </button>

      <div style={styles.pathInfo}>
        {pathFound ? "Path found!" : "Path not found!"}
      </div>

      <div style={styles.grid}>
        {matrix.map((row, i) => (
          <div key={i} style={{ display: "flex" }}>
            {row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                style={{
                  ...styles.cell,
                  ...(cell === 1 ? styles.path : {}),
                  ...(pathFound && visited[i][j] ? styles.validPath : {}),
                  ...(pathFound && !visited[i][j] && cell === 1 ? styles.invalidPath : {}),
                }}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PathFinderComponent;
