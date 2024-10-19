// // import React, { useState, useEffect } from "react";
// // import { Container, Grid, Typography, Box, Button } from "@mui/material";
// // import global1 from "./global1";
// // import FinalGamePage from "./FinalGamePage";

// // const imgScreen =
// //   "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-18-1716-Halloween%20Word%20Search%20Worksheet%20in%20Black%20and%20White%20Cute%20Style.gif";

// // // Global data here
// // const name = global1.name;
// // const regno = global1.regno;
// // const avatarImg = global1.profileImage; // global1 profile pic here

// // const generateGrid = (words, size) => {
// //   try {
// //     const grid = Array.from({ length: size }, () => Array(size).fill(""));
// //     const directions = [
// //       [0, 1], // right
// //       [1, 0], // down
// //       [1, 1], // diagonal down right
// //       [-1, 1], // diagonal up right
// //     ];

// //     for (const word of words) {
// //       let placed = false;
// //       while (!placed) {
// //         const direction =
// //           directions[Math.floor(Math.random() * directions.length)];
// //         const row = Math.floor(Math.random() * size);
// //         const col = Math.floor(Math.random() * size);
// //         const wordLength = word.length;

// //         if (
// //           row + direction[0] * (wordLength - 1) < size &&
// //           col + direction[1] * (wordLength - 1) < size &&
// //           row + direction[0] * (wordLength - 1) >= 0 &&
// //           col + direction[1] * (wordLength - 1) >= 0
// //         ) {
// //           let canPlace = true;
// //           for (let i = 0; i < wordLength; i++) {
// //             if (grid[row + direction[0] * i][col + direction[1] * i] !== "") {
// //               canPlace = false;
// //               break;
// //             }
// //           }

// //           if (canPlace) {
// //             for (let i = 0; i < wordLength; i++) {
// //               grid[row + direction[0] * i][col + direction[1] * i] = word[i];
// //             }
// //             placed = true;
// //           }
// //         }
// //       }
// //     }

// //     // Fill remaining cells with random letters
// //     for (let i = 0; i < size; i++) {
// //       for (let j = 0; j < size; j++) {
// //         if (grid[i][j] === "") {
// //           grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
// //         }
// //       }
// //     }

// //     return grid;
// //   } catch (error) {
// //     console.error("Error generating grid:", error);
// //     return []; // Return an empty grid on error
// //   }
// // };

// // const WordSearchPuzzle2 = () => {
// //   const [level, setLevel] = useState(0);
// //   const [isFinished, setIsFinished] = useState(false);
// //   const [score, setScore] = useState(0);
// //   const [grid, setGrid] = useState([]);
// //   const [words, setWords] = useState([
// //     "ANALYZE",
// //     "CRITICAL",
// //     "ELEVATE",
// //     "INSIGHT",
// //     "CONCEPT",
// //     "RESOURCE",
// //     "STRATEGY",
// //     "DEFINE",
// //     "COMPREHEND",
// //     "EFFECTIVE",
// //   ]);
// //   const [highlighted, setHighlighted] = useState(
// //     Array(10)
// //       .fill()
// //       .map(() => Array(10).fill(false))
// //   );
// //   const [foundWords, setFoundWords] = useState(new Set());
// //   const [isSelecting, setIsSelecting] = useState(false);
// //   const [startCoord, setStartCoord] = useState(null);
// //   const [endCoord, setEndCoord] = useState(null);
// //   const [gridSize, setGridSize] = useState(10);
// //   const [showRules, setShowRules] = useState(false);

// //   useEffect(() => {
// //     const loadGrid = () => {
// //       const generatedGrid = generateGrid(words, gridSize);
// //       setGrid(generatedGrid);
// //     };

// //     loadGrid();
// //   }, [words, gridSize]);

// //   const handleMouseDown = (row, col) => {
// //     setIsSelecting(true);
// //     setStartCoord([row, col]);
// //     setEndCoord(null);
// //   };

// //   const handleMouseEnter = (row, col) => {
// //     if (isSelecting) {
// //       setEndCoord([row, col]);
// //     }
// //   };

// //   const handleMouseUp = () => {
// //     if (isSelecting && startCoord && endCoord) {
// //       const [startRow, startCol] = startCoord;
// //       const [endRow, endCol] = endCoord;

// //       const selectedWord = getSelectedWord(startRow, startCol, endRow, endCol);
// //       if (words.includes(selectedWord) && !foundWords.has(selectedWord)) {
// //         highlightWord(startRow, startCol, endRow, endCol);
// //         setFoundWords((prev) => new Set(prev).add(selectedWord));
// //         setScore((prevScore) => Math.min(prevScore + 10, 100));
// //       }
// //     }
// //     setIsSelecting(false);
// //     setStartCoord(null);
// //     setEndCoord(null);
// //   };

// //   const getSelectedWord = (startRow, startCol, endRow, endCol) => {
// //     let word = "";
// //     const directionRow =
// //       endRow - startRow === 0 ? 0 : endRow - startRow > 0 ? 1 : -1;
// //     const directionCol =
// //       endCol - startCol === 0 ? 0 : endCol - startCol > 0 ? 1 : -1;

// //     let row = startRow;
// //     let col = startCol;

// //     while (
// //       (row !== endRow + directionRow || col !== endCol + directionCol) &&
// //       row >= 0 &&
// //       row < gridSize &&
// //       col >= 0 &&
// //       col < gridSize
// //     ) {
// //       word += grid[row][col];
// //       row += directionRow;
// //       col += directionCol;
// //     }

// //     return word;
// //   };

// //   const highlightWord = (startRow, startCol, endRow, endCol) => {
// //     const newHighlighted = highlighted.map((row) => row.slice());
// //     const directionRow =
// //       endRow - startRow === 0 ? 0 : endRow - startRow > 0 ? 1 : -1;
// //     const directionCol =
// //       endCol - startCol === 0 ? 0 : endCol - startCol > 0 ? 1 : -1;

// //     let row = startRow;
// //     let col = startCol;

// //     while (row !== endRow + directionRow || col !== endCol + directionCol) {
// //       newHighlighted[row][col] = true;
// //       row += directionRow;
// //       col += directionCol;
// //     }

// //     setHighlighted(newHighlighted);

// //     if (new Set([...words]).size === foundWords.size + 1) {
// //       alert("🎉 Congratulations! You've found all the words! 🎉");
// //     }
// //   };

// //   const handleNext = () => {
// //     if (score > 40) {
// //       setIsFinished(true);
// //       setLevel((prev) => prev + 1);
// //     } else {
// //       alert("You should play the game first and get 50 score to go next.");
// //     }
// //   };

// //   return (
// //     <>
// //       {/* Header and Score */}
// //       {!isFinished && (
// //         <Typography
// //           component="div"
// //           sx={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //             mx: "15%",
// //             my: "20px",
// //             // backgroundColor: "red",
// //           }}
// //         >
// //           <Typography variant="h5" fontWeight="bold">
// //             Student: {name}
// //             <br />
// //             Register no: {regno}
// //           </Typography>
// //           <Typography variant="h5" fontWeight="bold">
// //             Score: {score}
// //           </Typography>
// //         </Typography>
// //       )}

// //       {/* Game Levels */}
// //       {level === 0 && <StartGame toggle={() => setLevel((pev) => pev + 1)} />}

// //       {!isFinished && level === 1 && (
// //         <Container>
// //           <Typography variant="h4" gutterBottom textAlign="center">
// //             Word Search Puzzle
// //           </Typography>
// //           <Grid container spacing={1}>
// //             <Grid item xs={12}>
// //               <Grid container spacing={1}>
// //                 {grid.map((row, rowIndex) => (
// //                   <Grid item xs={12} key={rowIndex}>
// //                     <Typography variant="body1" textAlign="center">
// //                       {row.map((cell, colIndex) => (
// //                         <Box
// //                           key={colIndex}
// //                           sx={{
// //                             display: "inline-block",
// //                             padding: "10px",
// //                             border: highlighted[rowIndex][colIndex]
// //                               ? "2px solid green"
// //                               : "1px solid #000",
// //                             margin: "2px",
// //                             cursor: "pointer",
// //                             borderRadius: "4px",
// //                             width: "30px",
// //                             textAlign: "center",
// //                             backgroundColor: highlighted[rowIndex][colIndex]
// //                               ? "lightgreen"
// //                               : "white",
// //                           }}
// //                           onMouseDown={() =>
// //                             handleMouseDown(rowIndex, colIndex)
// //                           }
// //                           onMouseEnter={() =>
// //                             handleMouseEnter(rowIndex, colIndex)
// //                           }
// //                           onMouseUp={handleMouseUp}
// //                         >
// //                           {cell}
// //                         </Box>
// //                       ))}
// //                     </Typography>
// //                   </Grid>
// //                 ))}
// //                 {/* <Grid item xs={12}>
// //                     Hello
// //                 </Grid> */}
// //               </Grid>
// //             </Grid>
// //             <Grid item xs={12}>
// //               <Typography variant="h6">Words to find:</Typography>
// //               <Typography variant="body1">
// //                 {words.filter((word) => !foundWords.has(word)).join(", ")}
// //               </Typography>
// //             </Grid>
// //           </Grid>
// //           <Box textAlign="end">
// //             <Button
// //               variant="contained"
// //               color="secondary"
// //               onClick={() => setShowRules((prev) => !prev)}
// //               sx={{ mx: 2 }}
// //             >
// //               {showRules ? "Hide" : "Show"} Rules
// //             </Button>
// //             <Button variant="outlined" onClick={handleNext}>
// //               Next
// //             </Button>
// //           </Box>
// //           <Box sx={{ margin: "20px" }}>{showRules && <Rules />}</Box>
// //         </Container>
// //       )}

// //       {/* Finish Screen */}
// //       {isFinished && (
// //         <FinalGamePage
// //           username={name}
// //           regno={regno}
// //           profileImg={avatarImg}
// //           objective="Engaging with a word search puzzle game offers a fun and stimulating way to enhance your cognitive skills 🧠. It boosts vocabulary 📚, improves pattern recognition 🔍, and sharpens concentration as you search for hidden words. Plus, it provides a relaxing break from daily routines 🌼 while challenging your brain, making it an excellent tool for both entertainment and mental exercise. Enjoy a sense of accomplishment as you uncover each word! 🎉"
// //           score={score}
// //           title="Halloween Word Search"
// //           rating=""
// //         />
// //       )}
// //     </>
// //   );
// // };

// // const StartGame = ({ toggle }) => (
// //   <Container>
// //     <div
// //       style={{
// //         maxWidth: "1180px",
// //         height: "700px",
// //         display: "flex",
// //         margin: "0 auto",
// //         alignItems: "center",
// //       }}
// //     >
// //       <img
// //         src={imgScreen}
// //         alt="dices"
// //         style={{ width: "550px", maxHeight: "630px" }}
// //       />
// //       <div style={{ marginLeft: "25px" }}>
// //         {" "}
// //         <h1 style={{ fontSize: "96px", whiteSpace: "nowrap" }}>Word Search</h1>
// //         <Button variant="outlined" onClick={toggle}>
// //           Play Now
// //         </Button>
// //       </div>
// //     </div>
// //   </Container>
// // );

// // const Rules = () => (
// //   <Box
// //     sx={{
// //       maxWidth: "800px",
// //       margin: "0 auto",
// //       backgroundColor: "#fbf1f1",
// //       padding: "20px",
// //       marginTop: "40px",
// //       borderRadius: "10px",
// //       paddingLeft: "40px",
// //     }}
// //   >
// //     <Typography variant="h5" gutterBottom>
// //       How to Play Word Search Puzzle
// //     </Typography>
// //     <Typography variant="h6">Objective:</Typography>
// //     <Typography>
// //       The goal is to find and highlight all the hidden words in the grid. Words
// //       can be arranged horizontally, vertically, or diagonally, and may be
// //       spelled forwards or backwards.
// //     </Typography>

// //     <Typography variant="h6" sx={{ marginTop: "20px" }}>
// //       Game Rules:
// //     </Typography>
// //     <ol>
// //       <li>
// //         <strong>Starting the Game:</strong> Click on a letter in the grid to
// //         begin selecting a word. Hold down the mouse button and drag to highlight
// //         the letters of the word you believe is hidden in the grid.
// //       </li>
// //       <li>
// //         <strong>Selecting Words:</strong> Words can be selected by clicking and
// //         dragging the mouse across the letters. You can select letters in any of
// //         the following directions:
// //         <ul>
// //           <li>Horizontally (left to right or right to left)</li>
// //           <li>Vertically (top to bottom or bottom to top)</li>
// //           <li>Diagonally (in both diagonal directions)</li>
// //         </ul>
// //       </li>
// //       <li>
// //         <strong>Completing a Selection:</strong> Release the mouse button to
// //         finalize your selection. If the selected letters form a valid word from
// //         the word list, it will be highlighted in the grid.
// //       </li>
// //       <li>
// //         <strong>Scoring:</strong> Each time you successfully find a word, your
// //         score will increase by 10 points. Your score is capped at a maximum of
// //         100 points.
// //       </li>
// //       <li>
// //         <strong>Words List:</strong> The words you need to find will be
// //         displayed on the screen. As you find words, they will be removed from
// //         the list.
// //       </li>
// //       <li>
// //         <strong>Winning the Game:</strong> Once you find all the words in the
// //         list, an alert will pop up congratulating you on your victory.
// //       </li>
// //       <li>
// //         <strong>Restarting the Game:</strong> If you wish to play again, you may
// //         need to reset the game, depending on your game’s design.
// //       </li>
// //     </ol>

// //     <Typography variant="h6" sx={{ marginTop: "20px" }}>
// //       Tips for Success:
// //     </Typography>
// //     <ul>
// //       <li>
// //         <strong>Take Your Time:</strong> Don’t rush! Carefully look through the
// //         grid to spot the words.
// //       </li>
// //       <li>
// //         <strong>Look for Unique Letters:</strong> Words with unique letters
// //         (like Q, Z, X) can help you identify their locations more easily.
// //       </li>
// //       <li>
// //         <strong>Use the Word List:</strong> Keep the list visible and cross off
// //         words as you find them to keep track of your progress.
// //       </li>
// //     </ul>

// //     <Typography variant="h6" sx={{ marginTop: "20px" }}>
// //       Enjoy the Challenge!
// //     </Typography>
// //     <Typography>
// //       Have fun searching for the hidden words and improving your word
// //       recognition skills!
// //     </Typography>
// //   </Box>
// // );

// // export default WordSearchPuzzle2;

// import React, { useState, useEffect } from "react";
// import { Container, Grid, Typography, Box, Button } from "@mui/material";
// import global1 from "./global1";
// import FinalGamePage from "./FinalGamePage";

// const imgScreen =
//   "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-18-1716-Halloween%20Word%20Search%20Worksheet%20in%20Black%20and%20White%20Cute%20Style.gif";

// // Global data here
// const name = global1.name;
// const regno = global1.regno;
// const avatarImg = global1.profileImage; // global1 profile pic here

// const generateGrid = (words, size) => {
//   const grid = Array.from({ length: size }, () => Array(size).fill(""));
//   const directions = [
//     [0, 1], // right
//     [1, 0], // down
//     [1, 1], // diagonal down right
//     [-1, 1], // diagonal up right
//   ];

//   for (const word of words) {
//     let placed = false;
//     while (!placed) {
//       const direction =
//         directions[Math.floor(Math.random() * directions.length)];
//       const row = Math.floor(Math.random() * size);
//       const col = Math.floor(Math.random() * size);
//       const wordLength = word.length;

//       if (
//         row + direction[0] * (wordLength - 1) < size &&
//         col + direction[1] * (wordLength - 1) < size &&
//         row + direction[0] * (wordLength - 1) >= 0 &&
//         col + direction[1] * (wordLength - 1) >= 0
//       ) {
//         let canPlace = true;
//         for (let i = 0; i < wordLength; i++) {
//           if (grid[row + direction[0] * i][col + direction[1] * i] !== "") {
//             canPlace = false;
//             break;
//           }
//         }

//         if (canPlace) {
//           for (let i = 0; i < wordLength; i++) {
//             grid[row + direction[0] * i][col + direction[1] * i] = word[i];
//           }
//           placed = true;
//         }
//       }
//     }
//   }

//   // Fill remaining cells with random letters
//   for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//       if (grid[i][j] === "") {
//         grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
//       }
//     }
//   }

//   return grid;
// };

// const WordSearchPuzzle2 = () => {
//   const [level, setLevel] = useState(0);
//   const [isFinished, setIsFinished] = useState(false);
//   const [score, setScore] = useState(0);
//   const [grid, setGrid] = useState([]);
//   const [words] = useState([
//     "ANALYZE",
//     "CRITICAL",
//     "ELEVATE",
//     "INSIGHT",
//     "CONCEPT",
//     "RESOURCE",
//     "STRATEGY",
//     "DEFINE",
//     "COMPREHEND",
//     "EFFECTIVE",
//   ]);
//   const [highlighted, setHighlighted] = useState(
//     Array(10)
//       .fill()
//       .map(() => Array(10).fill(false))
//   );
//   const [foundWords, setFoundWords] = useState(new Set());
//   const [isSelecting, setIsSelecting] = useState(false);
//   const [showRules, setShowRules] = useState(false);
//   const [startCoord, setStartCoord] = useState(null);
//   const [endCoord, setEndCoord] = useState(null);
//   const gridSize = 10;

//   useEffect(() => {
//     setGrid(generateGrid(words, gridSize));
//   }, [words, gridSize]);

//   const handleMouseDown = (row, col) => {
//     setIsSelecting(true);
//     setStartCoord([row, col]);
//     setEndCoord(null);
//   };

//   const handleMouseEnter = (row, col) => {
//     if (isSelecting) setEndCoord([row, col]);
//   };

//   const handleMouseUp = () => {
//     if (isSelecting && startCoord && endCoord) {
//       const selectedWord = getSelectedWord();
//       if (words.includes(selectedWord) && !foundWords.has(selectedWord)) {
//         highlightWord();
//         setFoundWords((prev) => new Set(prev).add(selectedWord));
//         setScore((prevScore) => Math.min(prevScore + 10, 100));
//       }
//     }
//     setIsSelecting(false);
//     setStartCoord(null);
//     setEndCoord(null);
//   };

//   const getSelectedWord = () => {
//     const [startRow, startCol] = startCoord;
//     const [endRow, endCol] = endCoord;

//     let word = "";
//     const directionRow = Math.sign(endRow - startRow);
//     const directionCol = Math.sign(endCol - startCol);

//     let row = startRow,
//       col = startCol;

//     while (row !== endRow + directionRow || col !== endCol + directionCol) {
//       word += grid[row][col];
//       row += directionRow;
//       col += directionCol;
//     }

//     return word;
//   };

//   const highlightWord = () => {
//     const [startRow, startCol] = startCoord;
//     const [endRow, endCol] = endCoord;
//     const newHighlighted = highlighted.map((row) => [...row]);

//     const directionRow = Math.sign(endRow - startRow);
//     const directionCol = Math.sign(endCol - startCol);

//     let row = startRow,
//       col = startCol;

//     while (row !== endRow + directionRow || col !== endCol + directionCol) {
//       newHighlighted[row][col] = true;
//       row += directionRow;
//       col += directionCol;
//     }

//     setHighlighted(newHighlighted);

//     if (new Set([...words]).size === foundWords.size + 1) {
//       alert("🎉 Congratulations! You've found all the words! 🎉");
//     }
//   };

//   const handleNext = () => {
//     if (score > 40) {
//       setIsFinished(true);
//       setLevel((prev) => prev + 1);
//     } else {
//       alert("You should play the game first and get 50 score to go next.");
//     }
//   };

//   return (
//     <>
//       {/* Header and Score */}
//       {!isFinished && (
//         <Typography
//           component="div"
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             mx: "15%",
//             my: "20px",
//           }}
//         >
//           <Typography variant="h5" fontWeight="bold">
//             Student: {name}
//             <br />
//             Register no: {regno}
//           </Typography>
//           <Typography variant="h5" fontWeight="bold">
//             Score: {score}
//           </Typography>
//         </Typography>
//       )}

//       {/* Game Levels */}
//       {level === 0 && <StartGame toggle={() => setLevel((prev) => prev + 1)} />}

//       {!isFinished && level === 1 && (
//         <Container>
//           <Typography variant="h4" gutterBottom textAlign="center">
//             Word Search Puzzle
//           </Typography>
//           <Grid container spacing={1}>
//             <Grid item xs={12}>
//               <Grid container spacing={1}>
//                 {grid.map((row, rowIndex) => (
//                   <Grid item xs={12} key={rowIndex}>
//                     <Typography variant="body1" textAlign="center">
//                       {row.map((cell, colIndex) => (
//                         <Box
//                           key={colIndex}
//                           sx={{
//                             display: "inline-block",
//                             padding: "10px",
//                             border: highlighted[rowIndex][colIndex]
//                               ? "2px solid green"
//                               : "1px solid #000",
//                             margin: "2px",
//                             cursor: "pointer",
//                             borderRadius: "4px",
//                             width: "30px",
//                             textAlign: "center",
//                             backgroundColor: highlighted[rowIndex][colIndex]
//                               ? "lightgreen"
//                               : "white",
//                           }}
//                           onMouseDown={() =>
//                             handleMouseDown(rowIndex, colIndex)
//                           }
//                           onMouseEnter={() =>
//                             handleMouseEnter(rowIndex, colIndex)
//                           }
//                           onMouseUp={handleMouseUp}
//                         >
//                           {cell}
//                         </Box>
//                       ))}
//                     </Typography>
//                   </Grid>
//                 ))}
//               </Grid>
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="h6">Words to find:</Typography>
//               <Typography variant="body1">
//                 {[...foundWords]
//                   .filter((word) => !foundWords.has(word))
//                   .join(", ")}
//               </Typography>
//             </Grid>
//           </Grid>
//           <Box textAlign="end">
//             <Button
//               variant="contained"
//               color="secondary"
//               onClick={() => setShowRules((prev) => !prev)}
//               sx={{ mx: 2 }}
//             >
//               {showRules ? "Hide" : "Show"} Rules
//             </Button>
//             <Button variant="outlined" onClick={handleNext}>
//               Next
//             </Button>
//           </Box>
//           {showRules && <Rules />}
//         </Container>
//       )}

//       {/* Finish Screen */}
//       {isFinished && (
//         <FinalGamePage
//           username={name}
//           regno={regno}
//           profileImg={avatarImg}
//           objective="Engaging with a word search puzzle game offers a fun and stimulating way to enhance your cognitive skills 🧠. It boosts vocabulary 📚, improves pattern recognition 🔍, and sharpens concentration as you search for hidden words. Plus, it provides a relaxing break from daily routines 🌼 while challenging your brain, making it an excellent tool for both entertainment and mental exercise. Enjoy a sense of accomplishment as you uncover each word! 🎉"
//           score={score}
//           title="Halloween Word Search"
//           rating=""
//         />
//       )}
//     </>
//   );
// };

// const StartGame = ({ toggle }) => (
//   <Container>
//     <div
//       style={{
//         maxWidth: "1180px",
//         height: "700px",
//         display: "flex",
//         margin: "0 auto",
//         alignItems: "center",
//       }}
//     >
//       <img
//         src={imgScreen}
//         alt="dices"
//         style={{ width: "550px", maxHeight: "630px" }}
//       />
//       <div style={{ marginLeft: "25px" }}>
//         <h1 style={{ fontSize: "96px", whiteSpace: "nowrap" }}>Word Search</h1>
//         <Button variant="outlined" onClick={toggle}>
//           Play Now
//         </Button>
//       </div>
//     </div>
//   </Container>
// );

// const Rules = () => (
//   <Box
//     sx={{
//       maxWidth: "800px",
//       margin: "0 auto",
//       backgroundColor: "#fbf1f1",
//       padding: "20px",
//       marginTop: "40px",
//       borderRadius: "10px",
//       paddingLeft: "40px",
//     }}
//   >
//     <Typography variant="h5" gutterBottom>
//       How to Play Word Search Puzzle
//     </Typography>
//     <Typography variant="h6">Objective:</Typography>
//     <Typography>
//       The goal is to find and highlight all the hidden words in the grid. Words
//       can be arranged horizontally, vertically, or diagonally, and may be
//       spelled forwards or backwards.
//     </Typography>

//     <Typography variant="h6" sx={{ marginTop: "20px" }}>
//       Game Rules:
//     </Typography>
//     <ol>
//       <li>
//         <strong>Starting the Game:</strong> Click on a letter in the grid to
//         begin selecting a word. Hold down the mouse button and drag to highlight
//         the letters of the word you believe is hidden in the grid.
//       </li>
//       <li>
//         <strong>Selecting Words:</strong> Words can be selected by clicking and
//         dragging the mouse across the letters. You can select letters in any of
//         the following directions:
//         <ul>
//           <li>Horizontally (left to right or right to left)</li>
//           <li>Vertically (top to bottom or bottom to top)</li>
//           <li>Diagonally (in both diagonal directions)</li>
//         </ul>
//       </li>
//       <li>
//         <strong>Completing a Selection:</strong> Release the mouse button to
//         finalize your selection. If the selected letters form a valid word from
//         the word list, it will be highlighted in the grid.
//       </li>
//       <li>
//         <strong>Scoring:</strong> Each time you successfully find a word, your
//         score will increase by 10 points. Your score is capped at a maximum of
//         100 points.
//       </li>
//       <li>
//         <strong>Words List:</strong> The words you need to find will be
//         displayed on the screen. As you find words, they will be removed from
//         the list.
//       </li>
//       <li>
//         <strong>Winning the Game:</strong> Once you find all the words in the
//         list, an alert will pop up congratulating you on your victory.
//       </li>
//       <li>
//         <strong>Restarting the Game:</strong> If you wish to play again, you may
//         need to reset the game, depending on your game’s design.
//       </li>
//     </ol>

//     <Typography variant="h6" sx={{ marginTop: "20px" }}>
//       Tips for Success:
//     </Typography>
//     <ul>
//       <li>
//         <strong>Take Your Time:</strong> Don’t rush! Carefully look through the
//         grid to spot the words.
//       </li>
//       <li>
//         <strong>Look for Unique Letters:</strong> Words with unique letters
//         (like Q, Z, X) can help you identify their locations more easily.
//       </li>
//       <li>
//         <strong>Use the Word List:</strong> Keep the list visible and cross off
//         words as you find them to keep track of your progress.
//       </li>
//     </ul>

//     <Typography variant="h6" sx={{ marginTop: "20px" }}>
//       Enjoy the Challenge!
//     </Typography>
//     <Typography>
//       Have fun searching for the hidden words and improving your word
//       recognition skills!
//     </Typography>
//   </Box>
// );

// export default WordSearchPuzzle2;

import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import generateGrid from "./generateGrid"; // Import the generateGrid function
import global1 from "./global1";
import FinalGamePage from "./FinalGamePage";

const imgScreen =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-18-1716-Halloween%20Word%20Search%20Worksheet%20in%20Black%20and%20White%20Cute%20Style.gif";

// Global data here
const name = global1.name;
const regno = global1.regno;
const avatarImg = global1.profileImage; // global1 profile pic here

const WordSearchPuzzle2 = () => {
  const [level, setLevel] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [grid, setGrid] = useState([]);
  const [words] = useState([
    "ANALYZE",
    "CRITICAL",
    "ELEVATE",
    "INSIGHT",
    "CONCEPT",
    "RESOURCE",
    "STRATEGY",
    "DEFINE",
    "COMPREHEND",
    "EFFECTIVE",
  ]);
  const [highlighted, setHighlighted] = useState(Array(10).fill().map(() => Array(10).fill(false)));
  const [foundWords, setFoundWords] = useState(new Set());
  const [isSelecting, setIsSelecting] = useState(false);
  const [startCoord, setStartCoord] = useState(null);
  const [endCoord, setEndCoord] = useState(null);
  const gridSize = 10;

  useEffect(() => {
    setGrid(generateGrid(words, gridSize));
  }, [words, gridSize]);

  const handleMouseDown = (row, col) => {
    setIsSelecting(true);
    setStartCoord([row, col]);
    setEndCoord(null);
  };

  const handleMouseEnter = (row, col) => {
    if (isSelecting) {
      setEndCoord([row, col]);
    }
  };

  const handleMouseUp = () => {
    if (isSelecting && startCoord && endCoord) {
      const [startRow, startCol] = startCoord;
      const [endRow, endCol] = endCoord;

      const selectedWord = getSelectedWord(startRow, startCol, endRow, endCol);
      if (words.includes(selectedWord) && !foundWords.has(selectedWord)) {
        highlightWord(startRow, startCol, endRow, endCol);
        setFoundWords((prev) => new Set(prev).add(selectedWord));
        setScore((prevScore) => Math.min(prevScore + 10, 100));
      }
    }
    setIsSelecting(false);
    setStartCoord(null);
    setEndCoord(null);
  };

  const getSelectedWord = (startRow, startCol, endRow, endCol) => {
    let word = "";
    const directionRow = endRow - startRow === 0 ? 0 : endRow - startRow > 0 ? 1 : -1;
    const directionCol = endCol - startCol === 0 ? 0 : endCol - startCol > 0 ? 1 : -1;

    let row = startRow;
    let col = startCol;

    while (
      (row !== endRow + directionRow || col !== endCol + directionCol) &&
      row >= 0 &&
      row < gridSize &&
      col >= 0 &&
      col < gridSize
    ) {
      word += grid[row][col];
      row += directionRow;
      col += directionCol;
    }

    return word;
  };

  const highlightWord = (startRow, startCol, endRow, endCol) => {
    const newHighlighted = highlighted.map((row) => row.slice());
    const directionRow = endRow - startRow === 0 ? 0 : endRow - startRow > 0 ? 1 : -1;
    const directionCol = endCol - startCol === 0 ? 0 : endCol - startCol > 0 ? 1 : -1;

    let row = startRow;
    let col = startCol;

    while (row !== endRow + directionRow || col !== endCol + directionCol) {
      newHighlighted[row][col] = true;
      row += directionRow;
      col += directionCol;
    }

    setHighlighted(newHighlighted);

    if (new Set([...words]).size === foundWords.size + 1) {
      alert("🎉 Congratulations! You've found all the words! 🎉");
    }
  };

  const handleNext = () => {
    if (score > 40) {
      setIsFinished(true);
      setLevel((prev) => prev + 1);
    } else {
      alert("You should play the game first and get 50 score to go next.");
    }
  };

  return (
    <>
      {/* Header and Score */}
      {!isFinished && (
        <Typography
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mx: "15%",
            my: "20px",
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Student: {name}
            <br />
            Register no: {regno}
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            Score: {score}
          </Typography>
        </Typography>
      )}

      {/* Game Levels */}
      {level === 0 && <StartGame toggle={() => setLevel((prev) => prev + 1)} />}

      {!isFinished && level === 1 && (
        <Container>
          <Typography variant="h4" gutterBottom textAlign="center">
            Word Search Puzzle
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                {grid.map((row, rowIndex) => (
                  <Grid item xs={12} key={rowIndex}>
                    <Typography variant="body1" textAlign="center">
                      {row.map((cell, colIndex) => (
                        <Box
                          key={colIndex}
                          sx={{
                            display: "inline-block",
                            padding: "10px",
                            border: highlighted[rowIndex][colIndex]
                              ? "2px solid green"
                              : "1px solid #000",
                            margin: "2px",
                            cursor: "pointer",
                            borderRadius: "4px",
                            width: "30px",
                            textAlign: "center",
                            backgroundColor: highlighted[rowIndex][colIndex]
                              ? "lightgreen"
                              : "white",
                          }}
                          onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
                          onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                          onMouseUp={handleMouseUp}
                        >
                          {cell}
                        </Box>
                      ))}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Button variant="contained" onClick={handleNext} sx={{ mt: 2 }}>
            Next Level
          </Button>
        </Container>
      )}

      {isFinished && (
        <FinalGamePage score={score} avatarImg={avatarImg} />
      )}
    </>
  );
};

const StartGame = ({ toggle }) => (
  <Container sx={{ textAlign: "center" }}>
    <Typography variant="h4">Welcome to the Word Search Game!</Typography>
    <Button variant="contained" onClick={toggle}>
      Start Game
    </Button>
  </Container>
);

export default WordSearchPuzzle2;

