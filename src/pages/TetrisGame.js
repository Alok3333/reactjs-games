// // import React, { useState, useEffect, useRef } from "react";

// // const COLS = 10;
// // const ROWS = 20;

// // const SHAPES = [
// //   {
// //     shape: [
// //       [1, 1, 1],
// //       [0, 1, 0],
// //     ],
// //     color: "blue",
// //   },
// //   {
// //     shape: [
// //       [1, 1, 0],
// //       [0, 1, 1],
// //     ],
// //     color: "green",
// //   },
// //   {
// //     shape: [
// //       [0, 1, 1],
// //       [1, 1, 0],
// //     ],
// //     color: "red",
// //   },
// //   {
// //     shape: [
// //       [1, 1],
// //       [1, 1],
// //     ],
// //     color: "yellow",
// //   },
// //   { shape: [[1, 1, 1, 1]], color: "cyan" },
// // ];

// // const createEmptyScene = () =>
// //   Array.from({ length: ROWS }, () => Array(COLS).fill(null));

// // const useInterval = (callback, delay) => {
// //   const callbackRef = useRef();

// //   useEffect(() => {
// //     callbackRef.current = callback;
// //   }, [callback]);

// //   useEffect(() => {
// //     const interval = setInterval(() => callbackRef.current(), delay);
// //     return () => clearInterval(interval);
// //   }, [delay]);
// // };

// // // Random shape function
// // const randomShape = () => SHAPES[Math.floor(Math.random() * SHAPES.length)];

// // const TetrisGame = () => {
// //   const [scene, setScene] = useState(createEmptyScene());
// //   const [shape, setShape] = useState(randomShape());
// //   const [position, setPosition] = useState({ x: 0, y: 0 });
// //   const [gameOver, setGameOver] = useState(true);
// //   const [gameComplete, setGameComplete] = useState(false); // New state for game completion

// //   const startGame = () => {
// //     setScene(createEmptyScene());
// //     setGameOver(false);
// //     setGameComplete(false); // Reset game complete state
// //     spawnNewShape();
// //   };

// //   const spawnNewShape = () => {
// //     const newShape = randomShape();
// //     setShape(newShape);
// //     setPosition({ x: Math.floor(COLS / 2) - 1, y: 0 });
// //   };

// //   const mergeIntoScene = (scene, shape, position) => {
// //     shape.shape.forEach((row, y) => {
// //       row.forEach((value, x) => {
// //         if (value) {
// //           scene[position.y + y][position.x + x] = shape.color;
// //         }
// //       });
// //     });
// //     return scene;
// //   };

// //   const checkGameComplete = (scene) => {
// //     return scene[0].some(cell => cell !== null); // Check if the top row is filled
// //   };

// //   const moveShape = (dx, dy) => {
// //     const newPosition = { x: position.x + dx, y: position.y + dy };
// //     if (!collides(newPosition)) {
// //       setPosition(newPosition);
// //     } else if (dy > 0) {
// //       // Fix the piece in place
// //       const updatedScene = mergeIntoScene(scene, shape, position);
// //       setScene(updatedScene);
// //       spawnNewShape();
// //       if (checkGameComplete(updatedScene)) {
// //         alert("Game Complete!");
// //         setGameComplete(true); // Set game complete state
// //         setGameOver(true);
// //       }
// //     }
// //   };

// //   const rotateShape = () => {
// //     const rotatedShape = {
// //       ...shape,
// //       shape: shape.shape[0].map((val, index) =>
// //         shape.shape.map((row) => row[index]).reverse()
// //       ),
// //     };
// //     if (!collides(position, rotatedShape)) {
// //       setShape(rotatedShape);
// //     }
// //   };

// //   const collides = (newPosition, newShape = shape) => {
// //     return newShape.shape.some((row, y) =>
// //       row.some((value, x) => {
// //         if (value) {
// //           const newX = newPosition.x + x;
// //           const newY = newPosition.y + y;
// //           return (
// //             newX < 0 ||
// //             newX >= COLS ||
// //             newY >= ROWS ||
// //             (newY >= 0 && scene[newY][newX])
// //           );
// //         }
// //         return false;
// //       })
// //     );
// //   };

// //   useEffect(() => {
// //     const handleKeyPress = (e) => {
// //       switch (e.key) {
// //         case "ArrowLeft":
// //           moveShape(-1, 0);
// //           break;
// //         case "ArrowRight":
// //           moveShape(1, 0);
// //           break;
// //         case "ArrowDown":
// //           moveShape(0, 1);
// //           break;
// //         case "ArrowUp":
// //           rotateShape();
// //           break;
// //         default:
// //           break;
// //       }
// //     };

// //     window.addEventListener("keydown", handleKeyPress);
// //     return () => {
// //       window.removeEventListener("keydown", handleKeyPress);
// //     };
// //   }, [scene, shape, position]);

// //   useInterval(() => {
// //     if (!gameOver) {
// //       moveShape(0, 1); // Move shape down
// //     }
// //   }, 600);

// //   return (
// //     <div className="tetris-container">
// //       <style>
// //         {`
// //           .tetris-container {
// //             position: relative;
// //             width: 300px;
// //             height: 600px;
// //             border: 2px solid #333;
// //             margin: 0 auto;
// //             background-color: #f0f0f0;
// //             box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
// //             font-family: 'Arial', sans-serif;
// //           }

// //           .tetris-row {
// //             display: flex;
// //           }

// //           .tetris-cell {
// //             width: 30px;
// //             height: 30px;
// //             border: 1px solid #ddd;
// //             transition: background-color 0.2s;
// //           }

// //           .tetris-cell:hover {
// //             background-color: #e0e0e0;
// //           }

// //           .current-shape {
// //             position: absolute;
// //             width: 30px;
// //             height: 30px;
// //             border: 1px solid #333;
// //             transition: background-color 0.2s;
// //           }

// //           .start-button {
// //             position: absolute;
// //             bottom: 10px;
// //             left: 50%;
// //             transform: translateX(-50%);
// //             padding: 10px 20px;
// //             font-size: 16px;
// //             background-color: #28a745;
// //             color: white;
// //             border: none;
// //             border-radius: 5px;
// //             cursor: pointer;
// //             transition: background-color 0.3s;
// //           }

// //           .start-button:disabled {
// //             background-color: #ccc;
// //             cursor: not-allowed;
// //           }

// //           .start-button:hover:not(:disabled) {
// //             background-color: #218838;
// //           }

// //           .game-over {
// //             position: absolute;
// //             top: 10px;
// //             left: 50%;
// //             transform: translateX(-50%);
// //             font-size: 24px;
// //             color: red;
// //             font-weight: bold;
// //           }
// //         `}
// //       </style>
// //       {/* Render the scene */}
// //       {scene.map((row, rowIndex) => (
// //         <div key={rowIndex} className="tetris-row">
// //           {row.map((cell, colIndex) => (
// //             <div
// //               key={colIndex}
// //               className="tetris-cell"
// //               style={{
// //                 backgroundColor: cell ? cell : "white",
// //               }}
// //             />
// //           ))}
// //         </div>
// //       ))}
// //       {/* Render the current falling shape */}
// //       {shape.shape.map((row, y) =>
// //         row.map((value, x) => {
// //           if (value) {
// //             const shapeX = position.x + x;
// //             const shapeY = position.y + y;
// //             return (
// //               <div
// //                 key={`${shapeX}-${shapeY}`}
// //                 className="current-shape"
// //                 style={{
// //                   left: shapeX * 30,
// //                   top: shapeY * 30,
// //                   backgroundColor: shape.color,
// //                 }}
// //               />
// //             );
// //           }
// //           return null;
// //         })
// //       )}
// //       <button
// //         onClick={startGame}
// //         disabled={!gameOver}
// //         className="start-button"
// //       >
// //         Start Game
// //       </button>
// //       {/* Display Game Over message when the game is complete */}
// //       {gameOver && !gameComplete && (
// //         <div className="game-over">
// //           Game Over!
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default TetrisGame;

// import React, { useState, useEffect, useRef } from "react";

// const COLS = 10;
// const ROWS = 20;

// const SHAPES = [
//   {
//     shape: [
//       [1, 1, 1],
//       [0, 1, 0],
//     ],
//     color: "blue",
//   },
//   {
//     shape: [
//       [1, 1, 0],
//       [0, 1, 1],
//     ],
//     color: "green",
//   },
//   {
//     shape: [
//       [0, 1, 1],
//       [1, 1, 0],
//     ],
//     color: "red",
//   },
//   {
//     shape: [
//       [1, 1],
//       [1, 1],
//     ],
//     color: "yellow",
//   },
//   { shape: [[1, 1, 1, 1]], color: "cyan" },
// ];

// const createEmptyScene = () =>
//   Array.from({ length: ROWS }, () => Array(COLS).fill(null));

// const useInterval = (callback, delay) => {
//   const callbackRef = useRef();

//   useEffect(() => {
//     callbackRef.current = callback;
//   }, [callback]);

//   useEffect(() => {
//     const interval = setInterval(() => callbackRef.current(), delay);
//     return () => clearInterval(interval);
//   }, [delay]);
// };

// // Random shape function
// const randomShape = () => SHAPES[Math.floor(Math.random() * SHAPES.length)];

// const TetrisGame = () => {
//   const [scene, setScene] = useState(createEmptyScene());
//   const [shape, setShape] = useState(randomShape());
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [gameOver, setGameOver] = useState(true);
//   const [gameComplete, setGameComplete] = useState(false);
//   const [clearedRowsCount, setClearedRowsCount] = useState(0);

//   const startGame = () => {
//     setScene(createEmptyScene());
//     setGameOver(false);
//     setGameComplete(false);
//     setClearedRowsCount(0);
//     spawnNewShape();
//   };

//   const spawnNewShape = () => {
//     const newShape = randomShape();
//     setShape(newShape);
//     setPosition({ x: Math.floor(COLS / 2) - 1, y: 0 });
//   };

//   const mergeIntoScene = (scene, shape, position) => {
//     shape.shape.forEach((row, y) => {
//       row.forEach((value, x) => {
//         if (value) {
//           scene[position.y + y][position.x + x] = shape.color;
//         }
//       });
//     });
//     return scene;
//   };

//   const clearFullRows = (scene) => {
//     const newScene = scene.filter(row => row.some(cell => cell === null));
//     const clearedRows = ROWS - newScene.length;
    
//     // Add empty rows at the top
//     for (let i = 0; i < clearedRows; i++) {
//       newScene.unshift(Array(COLS).fill(null));
//     }

//     if (clearedRows > 0) {
//       setClearedRowsCount(prevCount => prevCount + clearedRows);
//     }

//     return newScene;
//   };

//   const checkGameComplete = (scene) => {
//     return scene[0].some(cell => cell !== null);
//   };

//   const moveShape = (dx, dy) => {
//     const newPosition = { x: position.x + dx, y: position.y + dy };
//     if (!collides(newPosition)) {
//       setPosition(newPosition);
//     } else if (dy > 0) {
//       // Fix the piece in place
//       const updatedScene = mergeIntoScene(scene, shape, position);
//       const clearedScene = clearFullRows(updatedScene);
//       setScene(clearedScene);
//       spawnNewShape();
//       if (checkGameComplete(clearedScene)) {
//         alert("Game Over! You hit the top!");
//         setGameOver(true);
//       }
//       if (clearedRowsCount + clearedScene.filter(row => row.every(cell => cell !== null)).length >= 10) {
//         alert("You Win!");
//         setGameComplete(true);
//         setGameOver(true);
//       }
//     }
//   };

//   const rotateShape = () => {
//     const rotatedShape = {
//       ...shape,
//       shape: shape.shape[0].map((val, index) =>
//         shape.shape.map((row) => row[index]).reverse()
//       ),
//     };
//     if (!collides(position, rotatedShape)) {
//       setShape(rotatedShape);
//     }
//   };

//   const collides = (newPosition, newShape = shape) => {
//     return newShape.shape.some((row, y) =>
//       row.some((value, x) => {
//         if (value) {
//           const newX = newPosition.x + x;
//           const newY = newPosition.y + y;
//           return (
//             newX < 0 ||
//             newX >= COLS ||
//             newY >= ROWS ||
//             (newY >= 0 && scene[newY][newX])
//           );
//         }
//         return false;
//       })
//     );
//   };

//   useEffect(() => {
//     const handleKeyPress = (e) => {
//       switch (e.key) {
//         case "ArrowLeft":
//           moveShape(-1, 0);
//           break;
//         case "ArrowRight":
//           moveShape(1, 0);
//           break;
//         case "ArrowDown":
//           moveShape(0, 1);
//           break;
//         case "ArrowUp":
//           rotateShape();
//           break;
//         default:
//           break;
//       }
//     };

//     window.addEventListener("keydown", handleKeyPress);
//     return () => {
//       window.removeEventListener("keydown", handleKeyPress);
//     };
//   }, [scene, shape, position]);

//   useInterval(() => {
//     if (!gameOver) {
//       moveShape(0, 1); // Move shape down
//     }
//   }, 600);

//   return (
//     <div className="tetris-container">
//       <style>
//         {`
//           .tetris-container {
//             position: relative;
//             width: 300px;
//             height: 600px;
//             border: 2px solid #333;
//             margin: 0 auto;
//             background-color: #f0f0f0;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
//             font-family: 'Arial', sans-serif;
//           }

//           .tetris-row {
//             display: flex;
//           }

//           .tetris-cell {
//             width: 30px;
//             height: 30px;
//             border: 1px solid #ddd;
//             transition: background-color 0.2s;
//           }

//           .tetris-cell:hover {
//             background-color: #e0e0e0;
//           }

//           .current-shape {
//             position: absolute;
//             width: 30px;
//             height: 30px;
//             border: 1px solid #333;
//             transition: background-color 0.2s;
//           }

//           .start-button {
//             position: absolute;
//             bottom: 10px;
//             left: 50%;
//             transform: translateX(-50%);
//             padding: 10px 20px;
//             font-size: 16px;
//             background-color: #28a745;
//             color: white;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//             transition: background-color 0.3s;
//           }

//           .start-button:disabled {
//             background-color: #ccc;
//             cursor: not-allowed;
//           }

//           .start-button:hover:not(:disabled) {
//             background-color: #218838;
//           }

//           .game-over {
//             position: absolute;
//             top: 10px;
//             left: 50%;
//             transform: translateX(-50%);
//             font-size: 24px;
//             color: red;
//             font-weight: bold;
//           }
//         `}
//       </style>
//       {/* Render the scene */}
//       {scene.map((row, rowIndex) => (
//         <div key={rowIndex} className="tetris-row">
//           {row.map((cell, colIndex) => (
//             <div
//               key={colIndex}
//               className="tetris-cell"
//               style={{
//                 backgroundColor: cell ? cell : "white",
//               }}
//             />
//           ))}
//         </div>
//       ))}
//       {/* Render the current falling shape */}
//       {shape.shape.map((row, y) =>
//         row.map((value, x) => {
//           if (value) {
//             const shapeX = position.x + x;
//             const shapeY = position.y + y;
//             return (
//               <div
//                 key={`${shapeX}-${shapeY}`}
//                 className="current-shape"
//                 style={{
//                   left: shapeX * 30,
//                   top: shapeY * 30,
//                   backgroundColor: shape.color,
//                 }}
//               />
//             );
//           }
//           return null;
//         })
//       )}
//       <button
//         onClick={startGame}
//         disabled={!gameOver}
//         className="start-button"
//       >
//         Start Game
//       </button>
//       {/* Display Game Over message when the game is complete */}
//       {gameOver && !gameComplete && (
//         <div className="game-over">
//           Game Over!
//         </div>
//       )}
//     </div>
//   );
// };

// export default TetrisGame;


import React, { useState, useEffect, useRef } from "react";

const COLS = 10;
const ROWS = 20;

const SHAPES = [
  {
    shape: [
      [1, 1, 1],
      [0, 1, 0],
    ],
    color: "blue",
  },
  {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
    ],
    color: "green",
  },
  {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    color: "red",
  },
  {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: "yellow",
  },
  { shape: [[1, 1, 1, 1]], color: "cyan" },
];

const createEmptyScene = () =>
  Array.from({ length: ROWS }, () => Array(COLS).fill(null));

const useInterval = (callback, delay) => {
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const interval = setInterval(() => callbackRef.current(), delay);
    return () => clearInterval(interval);
  }, [delay]);
};

// Random shape function
const randomShape = () => SHAPES[Math.floor(Math.random() * SHAPES.length)];

const TetrisGame = () => {
  const [scene, setScene] = useState(createEmptyScene());
  const [shape, setShape] = useState(randomShape());
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(true);
  const [gameComplete, setGameComplete] = useState(false);
  const [rowsToClear, setRowsToClear] = useState(10);

  const startGame = () => {
    setScene(createEmptyScene());
    setGameOver(false);
    setGameComplete(false);
    setRowsToClear(10);
    spawnNewShape();
  };

  const spawnNewShape = () => {
    const newShape = randomShape();
    setShape(newShape);
    setPosition({ x: Math.floor(COLS / 2) - 1, y: 0 });
  };

  const mergeIntoScene = (scene, shape, position) => {
    shape.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          scene[position.y + y][position.x + x] = shape.color;
        }
      });
    });
    return scene;
  };

  const clearFullRows = (scene) => {
    const newScene = scene.filter(row => row.some(cell => cell === null));
    const clearedRows = ROWS - newScene.length;
    
    // Add empty rows at the top
    for (let i = 0; i < clearedRows; i++) {
      newScene.unshift(Array(COLS).fill(null));
    }

    if (clearedRows > 0) {
      setRowsToClear(prevCount => Math.max(0, prevCount - clearedRows));
    }

    return newScene;
  };

  const checkGameComplete = (scene) => {
    return scene[0].some(cell => cell !== null);
  };

  const moveShape = (dx, dy) => {
    const newPosition = { x: position.x + dx, y: position.y + dy };
    if (!collides(newPosition)) {
      setPosition(newPosition);
    } else if (dy > 0) {
      // Fix the piece in place
      const updatedScene = mergeIntoScene(scene, shape, position);
      const clearedScene = clearFullRows(updatedScene);
      setScene(clearedScene);
      spawnNewShape();
      if (checkGameComplete(clearedScene)) {
        alert("Game Over! You hit the top!");
        setGameOver(true);
      }
      if (rowsToClear <= 0) {
        alert("You Win!");
        setGameComplete(true);
        setGameOver(true);
      }
    }
  };

  const rotateShape = () => {
    const rotatedShape = {
      ...shape,
      shape: shape.shape[0].map((val, index) =>
        shape.shape.map((row) => row[index]).reverse()
      ),
    };
    if (!collides(position, rotatedShape)) {
      setShape(rotatedShape);
    }
  };

  const collides = (newPosition, newShape = shape) => {
    return newShape.shape.some((row, y) =>
      row.some((value, x) => {
        if (value) {
          const newX = newPosition.x + x;
          const newY = newPosition.y + y;
          return (
            newX < 0 ||
            newX >= COLS ||
            newY >= ROWS ||
            (newY >= 0 && scene[newY][newX])
          );
        }
        return false;
      })
    );
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          moveShape(-1, 0);
          break;
        case "ArrowRight":
          moveShape(1, 0);
          break;
        case "ArrowDown":
          moveShape(0, 1);
          break;
        case "ArrowUp":
          rotateShape();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [scene, shape, position]);

  useInterval(() => {
    if (!gameOver) {
      moveShape(0, 1); // Move shape down
    }
  }, 600);

  return (
    <div className="tetris-container">
      <style>
        {`
          .tetris-container {
            position: relative;
            width: 300px;
            height: 600px;
            border: 2px solid #333;
            margin: 0 auto;
            background-color: #f0f0f0;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            font-family: 'Arial', sans-serif;
          }

          .tetris-row {
            display: flex;
          }

          .tetris-cell {
            width: 30px;
            height: 30px;
            border: 1px solid #ddd;
            transition: background-color 0.2s;
          }

          .tetris-cell:hover {
            background-color: #e0e0e0;
          }

          .current-shape {
            position: absolute;
            width: 30px;
            height: 30px;
            border: 1px solid #333;
            transition: background-color 0.2s;
          }

          .start-button {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            padding: 10px 20px;
            font-size: 16px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .start-button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
          }

          .start-button:hover:not(:disabled) {
            background-color: #218838;
          }

          .game-over {
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 24px;
            color: red;
            font-weight: bold;
          }

          .rows-to-clear {
            position: absolute;
            top: 50px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 18px;
            color: #333;
            font-weight: bold;
          }
        `}
      </style>
      {/* Render the scene */}
      {scene.map((row, rowIndex) => (
        <div key={rowIndex} className="tetris-row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className="tetris-cell"
              style={{
                backgroundColor: cell ? cell : "white",
              }}
            />
          ))}
        </div>
      ))}
      {/* Render the current falling shape */}
      {shape.shape.map((row, y) =>
        row.map((value, x) => {
          if (value) {
            const shapeX = position.x + x;
            const shapeY = position.y + y;
            return (
              <div
                key={`${shapeX}-${shapeY}`}
                className="current-shape"
                style={{
                  left: shapeX * 30,
                  top: shapeY * 30,
                  backgroundColor: shape.color,
                }}
              />
            );
          }
          return null;
        })
      )}
      <button
        onClick={startGame}
        disabled={!gameOver}
        className="start-button"
      >
        Start Game
      </button>
      {/* Display Game Over message when the game is complete */}
      {gameOver && (
        <div className="game-over">
          Game Over!
        </div>
      )}
      {/* Display rows left to clear */}
      {!gameOver && (
        <div className="rows-to-clear">
          Rows to Clear: {rowsToClear}
        </div>
      )}
    </div>
  );
};

export default TetrisGame;

