// // import React, { useState, useEffect } from "react";
// // import { Container, Grid, Button, Typography } from "@mui/material";
// // import { Chess } from "chess.js"; // Import chess logic

// // const boardSize = 8;

// // const initialBoard = Array(boardSize)
// //   .fill(null)
// //   .map(() => Array(boardSize).fill(null));

// // const ChessGame = () => {
// //   const [chess] = useState(new Chess());
// //   const [board, setBoard] = useState(initialBoard);
// //   const [selectedSquare, setSelectedSquare] = useState(null);
// //   const [turn, setTurn] = useState("w");
// //   const [validMoves, setValidMoves] = useState([]);

// //   useEffect(() => {
// //     setBoard(renderBoard());
// //   }, []);

// //   const renderBoard = () => {
// //     const newBoard = initialBoard.map((row, rowIndex) => {
// //       return row.map((_, colIndex) => {
// //         const square = chess.board()[rowIndex][colIndex];
// //         return square ? square.type + square.color : null;
// //       });
// //     });
// //     return newBoard;
// //   };

// //   const getSquareId = (square) => {
// //     const [row, col] = square;
// //     return String.fromCharCode(97 + col) + (boardSize - row);
// //   };

// //   const handleSquareClick = (rowIndex, colIndex) => {
// //     if (selectedSquare) {
// //       const fromSquareId = getSquareId(selectedSquare);
// //       const toSquareId = getSquareId([rowIndex, colIndex]);

// //       // Ensure the move is valid
// //       if (validMoves.includes(toSquareId)) {
// //         const move = chess.move({
// //           from: fromSquareId,
// //           to: toSquareId,
// //           promotion: "q", // promote to queen
// //         });

// //         if (move) {
// //           setTurn(turn === "w" ? "b" : "w");
// //           setValidMoves([]); // Clear valid moves after a successful move
// //         }
// //       }
// //       setSelectedSquare(null);
// //     } else {
// //       const piece = chess.board()[rowIndex][colIndex];
// //       if (piece && piece.color === turn) {
// //         setSelectedSquare([rowIndex, colIndex]);
// //         // Get valid moves for the selected piece
// //         const moves = chess
// //           .moves({
// //             square: getSquareId([rowIndex, colIndex]),
// //             verbose: true,
// //           })
// //           .map((move) => move.to);
// //         setValidMoves(moves);
// //       }
// //     }
// //     setBoard(renderBoard());
// //   };

// //   return (
// //     <Container>
// //       <Typography variant="h4" align="center" gutterBottom>
// //         Chess Game
// //       </Typography>
// //       <Grid container justifyContent="center">
// //         {board.map((row, rowIndex) => (
// //           <Grid container key={rowIndex} justifyContent="center">
// //             {row.map((square, colIndex) => {
// //               const squareId = getSquareId([rowIndex, colIndex]);
// //               const isValidMove = validMoves.includes(squareId);
// //               return (
// //                 <Button
// //                   key={colIndex}
// //                   onClick={() => handleSquareClick(rowIndex, colIndex)}
// //                   style={{
// //                     width: "60px",
// //                     height: "60px",
// //                     backgroundColor: isValidMove
// //                       ? "#90ee90" // Light green for valid moves
// //                       : (rowIndex + colIndex) % 2 === 0
// //                       ? "#eee"
// //                       : "#aaa",
// //                     color: square
// //                       ? square.endsWith("w")
// //                         ? "black"
// //                         : "white"
// //                       : "transparent",
// //                     fontSize: "24px",
// //                   }}
// //                 >
// //                   {square ? square.charAt(0).toUpperCase() : ""}
// //                 </Button>
// //               );
// //             })}
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Container>
// //   );
// // };

// // export default ChessGame;

// import React, { useState, useEffect } from "react";
// import { Container, Grid, Button, Typography } from "@mui/material";
// import { Chess } from "chess.js";
// import whitePawn from "../assets/pawn-white-chess.png";
// import blackPawn from "../assets/pawn-black-chess.png";
// // import whiteRook from "./assets/white_rook.png";
// // import blackRook from "./assets/black_rook.png";
// // import whiteKnight from "./assets/white_knight.png";
// // import blackKnight from "./assets/black_knight.png";
// // import whiteBishop from "./assets/white_bishop.png";
// // import blackBishop from "./assets/black_bishop.png";
// // import whiteQueen from "./assets/white_queen.png";
// // import blackQueen from "./assets/black_queen.png";
// // import whiteKing from "./assets/white_king.png";
// // import blackKing from "./assets/black_king.png";

// const boardSize = 8;

// const initialBoard = Array(boardSize)
//   .fill(null)
//   .map(() => Array(boardSize).fill(null));

// const pieceImages = {
//   p: whitePawn,
//   P: blackPawn,
// //   r: whiteRook,
// //   R: blackRook,
// //   n: whiteKnight,
// //   N: blackKnight,
// //   b: whiteBishop,
// //   B: blackBishop,
// //   q: whiteQueen,
// //   Q: blackQueen,
// //   k: whiteKing,
// //   K: blackKing,
// };

// const ChessGame = () => {
//   const [chess] = useState(new Chess());
//   const [board, setBoard] = useState(initialBoard);
//   const [selectedSquare, setSelectedSquare] = useState(null);
//   const [turn, setTurn] = useState("w");
//   const [validMoves, setValidMoves] = useState([]);

//   useEffect(() => {
//     setBoard(renderBoard());
//   }, []);

//   const renderBoard = () => {
//     const newBoard = initialBoard.map((row, rowIndex) => {
//       return row.map((_, colIndex) => {
//         const square = chess.board()[rowIndex][colIndex];
//         return square ? square.type + square.color : null;
//       });
//     });
//     return newBoard;
//   };

//   const getSquareId = (square) => {
//     const [row, col] = square;
//     return String.fromCharCode(97 + col) + (boardSize - row);
//   };

//   const handleSquareClick = (rowIndex, colIndex) => {
//     if (selectedSquare) {
//       const fromSquareId = getSquareId(selectedSquare);
//       const toSquareId = getSquareId([rowIndex, colIndex]);

//       // Ensure the move is valid
//       if (validMoves.includes(toSquareId)) {
//         const move = chess.move({
//           from: fromSquareId,
//           to: toSquareId,
//           promotion: "q", // promote to queen
//         });

//         if (move) {
//           setTurn(turn === "w" ? "b" : "w");
//           setValidMoves([]); // Clear valid moves after a successful move
//         }
//       }
//       setSelectedSquare(null);
//     } else {
//       const piece = chess.board()[rowIndex][colIndex];
//       if (piece && piece.color === turn) {
//         setSelectedSquare([rowIndex, colIndex]);
//         // Get valid moves for the selected piece
//         const moves = chess
//           .moves({
//             square: getSquareId([rowIndex, colIndex]),
//             verbose: true,
//           })
//           .map((move) => move.to);
//         setValidMoves(moves);
//       }
//     }
//     setBoard(renderBoard());
//   };

//   const renderPiece = (square) => {
//     if (!square) return null;
//     const pieceType = square.charAt(0);
//     console.log(pieceType, "---")
//     return (
//       <img
//         src={pieceImages[pieceType]}
//         alt={pieceType}
//         style={{ width: "100%", height: "100%" }}
//       />
//     );
//   };

//   return (
//     <Container>
//       <Typography variant="h4" align="center" gutterBottom>
//         Chess Game
//       </Typography>
//       <Grid container justifyContent="center">
//         {board.map((row, rowIndex) => (
//           <Grid container key={rowIndex} justifyContent="center">
//             {row.map((square, colIndex) => {
//               const squareId = getSquareId([rowIndex, colIndex]);
//               const isValidMove = validMoves.includes(squareId);
//               return (
//                 <Button
//                   key={colIndex}
//                   onClick={() => handleSquareClick(rowIndex, colIndex)}
//                   style={{
//                     width: "60px",
//                     height: "60px",
//                     backgroundColor: isValidMove
//                       ? "#90ee90" // Light green for valid moves
//                       : (rowIndex + colIndex) % 2 === 0
//                       ? "#eee"
//                       : "#aaa",
//                     padding: 0,
//                   }}
//                 >
//                   {renderPiece(square)}
//                 </Button>
//               );
//             })}
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default ChessGame;

import React, { useState, useEffect } from "react";
import { Container, Grid, Button, Typography } from "@mui/material";
import { Chess } from "chess.js";
import whitePawn from "../assets/pawn-white-chess.png";
import blackPawn from "../assets/pawn-black-chess.png";
// import whiteRook from "../assets/rook-white-chess.png";
// import blackRook from "../assets/rook-black-chess.png";
// import whiteKnight from "../assets/knight-white-chess.png";
// import blackKnight from "../assets/knight-black-chess.png";
// import whiteBishop from "../assets/bishop-white-chess.png";
// import blackBishop from "../assets/bishop-black-chess.png";
// import whiteQueen from "../assets/queen-white-chess.png";
// import blackQueen from "../assets/queen-black-chess.png";
// import whiteKing from "../assets/king-white-chess.png";
// import blackKing from "../assets/king-black-chess.png";

const boardSize = 8;

const initialBoard = Array(boardSize)
  .fill(null)
  .map(() => Array(boardSize).fill(null));

const pieceImages = {
  p: whitePawn,
  P: blackPawn,
//   r: whiteRook,
//   R: blackRook,
//   n: whiteKnight,
//   N: blackKnight,
//   b: whiteBishop,
//   B: blackBishop,
//   q: whiteQueen,
//   Q: blackQueen,
//   k: whiteKing,
//   K: blackKing,
};

const ChessGame = () => {
  const [chess] = useState(new Chess());
  const [board, setBoard] = useState(initialBoard);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [turn, setTurn] = useState("w");
  const [validMoves, setValidMoves] = useState([]);

  useEffect(() => {
    setBoard(renderBoard());
  }, []);

  const renderBoard = () => {
    const newBoard = initialBoard.map((row, rowIndex) => {
      return row.map((_, colIndex) => {
        const square = chess.board()[rowIndex][colIndex];
        return square ? square.type + square.color : null;
      });
    });
    return newBoard;
  };

  const getSquareId = (square) => {
    const [row, col] = square;
    return String.fromCharCode(97 + col) + (boardSize - row);
  };

  const handleSquareClick = (rowIndex, colIndex) => {
    if (selectedSquare) {
      const fromSquareId = getSquareId(selectedSquare);
      const toSquareId = getSquareId([rowIndex, colIndex]);

      // Ensure the move is valid
      if (validMoves.includes(toSquareId)) {
        const move = chess.move({
          from: fromSquareId,
          to: toSquareId,
          promotion: "q", // promote to queen
        });

        if (move) {
          setTurn(turn === "w" ? "b" : "w");
          setValidMoves([]); // Clear valid moves after a successful move
        }
      }
      setSelectedSquare(null);
    } else {
      const piece = chess.board()[rowIndex][colIndex];
      if (piece && piece.color === turn) {
        setSelectedSquare([rowIndex, colIndex]);
        // Get valid moves for the selected piece
        const moves = chess
          .moves({
            square: getSquareId([rowIndex, colIndex]),
            verbose: true,
          })
          .map((move) => move.to);
        setValidMoves(moves);
      }
    }
    setBoard(renderBoard());
  };

  const renderPiece = (square) => {
    if (!square) return null;
    const pieceType = square.charAt(0); // Get the piece type (e.g., 'p', 'P', etc.)
    
    // Determine which piece image to use based on the case
    const pieceImage = pieceType === pieceType.toLowerCase() ? pieceImages[pieceType] : pieceImages[pieceType.toLowerCase()];

    if (!pieceImage) return null; // If no image is found, return null

    return (
      <img
        src={pieceImage}
        alt={pieceType}
        style={{ width: "100%", height: "100%" }}
      />
    );
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Chess Game
      </Typography>
      <Grid container justifyContent="center">
        {board.map((row, rowIndex) => (
          <Grid container key={rowIndex} justifyContent="center">
            {row.map((square, colIndex) => {
              const squareId = getSquareId([rowIndex, colIndex]);
              const isValidMove = validMoves.includes(squareId);
              return (
                <Button
                  key={colIndex}
                  onClick={() => handleSquareClick(rowIndex, colIndex)}
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: isValidMove
                      ? "#90ee90" // Light green for valid moves
                      : (rowIndex + colIndex) % 2 === 0
                      ? "#eee"
                      : "#aaa",
                    padding: 0,
                  }}
                >
                  {renderPiece(square)}
                </Button>
              );
            })}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ChessGame;

