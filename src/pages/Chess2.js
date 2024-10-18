// // // // import React, { useState, useEffect } from 'react';
// // // // import { Chessboard } from 'react-chessboard';
// // // // import { Chess } from 'chess.js';
// // // // import { Container, Typography, Box, Button } from '@mui/material';


// // // // function Chess2() {
// // // //   const [game, setGame] = useState(new Chess());
// // // //   const [winner, setWinner] = useState(null);
// // // //   const [gameOver, setGameOver] = useState(false);

// // // //   // Function to safely mutate the game state
// // // //   function safeGameMutate(modify) {
// // // //     setGame((g) => {
// // // //       const update = { ...g };
// // // //       modify(update);
// // // //       return update;
// // // //     });
// // // //   }

// // // //   // Movement of the computer
// // // //   function makeRandomMove() {
// // // //     const possibleMove = game.moves();

// // // //     // Exit if the game is over
// // // //     if (game.game_over() || game.in_draw() || possibleMove.length === 0) {
// // // //       setGameOver(true);
// // // //       const winner = game.turn() === 'w' ? 'Black' : 'White';
// // // //       setWinner(winner);
// // // //       return;
// // // //     }

// // // //     // Select a random move
// // // //     const randomIndex = Math.floor(Math.random() * possibleMove.length);
// // // //     // Play random move
// // // //     safeGameMutate((game) => {
// // // //       game.move(possibleMove[randomIndex]);
// // // //     });
// // // //   }

// // // //   // Perform an action when a piece is dropped by a user
// // // //   function onDrop(source, target) {
// // // //     if (gameOver) return false;

// // // //     let move = null;
// // // //     safeGameMutate((game) => {
// // // //       move = game.move({
// // // //         from: source,
// // // //         to: target,
// // // //         promotion: 'q',
// // // //       });
// // // //     });
// // // //     // Illegal move
// // // //     if (move === null) return false;
// // // //     // Valid move
// // // //     setTimeout(makeRandomMove, 200);
// // // //     return true;
// // // //   }

// // // //   // Reset the game
// // // //   function restartGame() {
// // // //     setGame(new Chess());
// // // //     setGameOver(false);
// // // //     setWinner(null);
// // // //   }

// // // //   // Listen for Enter key press to restart the game
// // // //   useEffect(() => {
// // // //     function handleKeyPress(event) {
// // // //       if (event.key === 'Enter') {
// // // //         restartGame();
// // // //       }
// // // //     }
// // // //     window.addEventListener('keydown', handleKeyPress);
// // // //     return () => {
// // // //       window.removeEventListener('keydown', handleKeyPress);
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <Container maxWidth="md" sx={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
// // // //       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2 }}>
// // // //         <img 
// // // //           src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png" 
// // // //           alt="Game Image" 
// // // //           style={{ width: '150px', marginRight: '20px' }} 
// // // //         />
// // // //         <Typography variant="h4" component="h1">GeeksforGeeks Chess Game</Typography>
// // // //       </Box>
// // // //       <Box sx={{ position: 'relative' }}>
// // // //         <Chessboard position={game.fen()} onPieceDrop={onDrop} />
// // // //         {gameOver && (
// // // //           <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: 2, borderRadius: 1, textAlign: 'center' }}>
// // // //             <Typography variant="h5">Game Over</Typography>
// // // //             <Typography variant="h6">Winner: {winner}</Typography>
// // // //             <Typography variant="body1">Press Enter to restart</Typography>
// // // //           </Box>
// // // //         )}
// // // //       </Box>
// // // //       <Button variant="contained" color="primary" onClick={restartGame} sx={{ marginTop: 2 }}>
// // // //         Restart Game
// // // //       </Button>
// // // //     </Container>
// // // //   );
// // // // }

// // // // export default Chess2;


// // // import React, { useState, useEffect } from 'react';
// // // import { Chessboard } from 'react-chessboard';
// // // import { Chess } from 'chess.js';
// // // import { Container, Typography, Box, Button } from '@mui/material';
// // // // import 'react-chessboard/dist/index.css'; // Import styles for chessboard
// // // // import 'react-chessboard/dist/react-chessboard.css';


// // // function Chess2() {
// // //   const [game, setGame] = useState(new Chess());
// // //   const [winner, setWinner] = useState(null);
// // //   const [gameOver, setGameOver] = useState(false);

// // //   function safeGameMutate(modify) {
// // //     setGame((g) => {
// // //       const update = { ...g };
// // //       modify(update);
// // //       return update;
// // //     });
// // //   }

// // //   function makeRandomMove() {
// // //     const possibleMove = game.moves();
// // //     if (game.game_over() || game.in_draw() || possibleMove.length === 0) {
// // //       setGameOver(true);
// // //       const winner = game.turn() === 'w' ? 'Black' : 'White';
// // //       setWinner(winner);
// // //       return;
// // //     }
// // //     const randomIndex = Math.floor(Math.random() * possibleMove.length);
// // //     safeGameMutate((game) => {
// // //       game.move(possibleMove[randomIndex]);
// // //     });
// // //   }

// // //   function onDrop(source, target) {
// // //     if (gameOver) return false;
// // //     let move = null;
// // //     safeGameMutate((game) => {
// // //       move = game.move({
// // //         from: source,
// // //         to: target,
// // //         promotion: 'q',
// // //       });
// // //     });
// // //     if (move === null) return false;
// // //     setTimeout(makeRandomMove, 200);
// // //     return true;
// // //   }

// // //   function restartGame() {
// // //     setGame(new Chess());
// // //     setGameOver(false);
// // //     setWinner(null);
// // //   }

// // //   useEffect(() => {
// // //     function handleKeyPress(event) {
// // //       if (event.key === 'Enter') {
// // //         restartGame();
// // //       }
// // //     }
// // //     window.addEventListener('keydown', handleKeyPress);
// // //     return () => {
// // //       window.removeEventListener('keydown', handleKeyPress);
// // //     };
// // //   }, []);

// // //   return (
// // //     <Container maxWidth="md" sx={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
// // //       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2 }}>
// // //         <img 
// // //           src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png" 
// // //           alt="Game Image" 
// // //           style={{ width: '150px', marginRight: '20px' }} 
// // //         />
// // //         <Typography variant="h4" component="h1">GeeksforGeeks Chess Game</Typography>
// // //       </Box>
// // //       <Box sx={{ position: 'relative' }}>
// // //         <Chessboard position={game.fen()} onPieceDrop={onDrop} />
// // //         {gameOver && (
// // //           <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: 2, borderRadius: 1, textAlign: 'center' }}>
// // //             <Typography variant="h5">Game Over</Typography>
// // //             <Typography variant="h6">Winner: {winner}</Typography>
// // //             <Typography variant="body1">Press Enter to restart</Typography>
// // //           </Box>
// // //         )}
// // //       </Box>
// // //       <Button variant="contained" color="primary" onClick={restartGame} sx={{ marginTop: 2 }}>
// // //         Restart Game
// // //       </Button>
// // //     </Container>
// // //   );
// // // }

// // // export default Chess2;

// // // src/ChessGame.js

// // import React, { useState, useEffect } from 'react';
// // import { Chessboard } from 'react-chessboard';
// // import { Chess } from 'chess.js';
// // import { Container, Typography, Box, Button } from '@mui/material';
// // // import 'react-chessboard/dist/index.css';
// // // import 'react-chessboard/dist/react-chessboard.css';


// // const ChessGame = () => {
// //   const [game, setGame] = useState(new Chess());
// //   const [winner, setWinner] = useState(null);
// //   const [gameOver, setGameOver] = useState(false);

// //   // Perform an action when a piece is dropped by a user
// //   const onDrop = (source, target) => {
// //     if (gameOver) return false;

// //     const move = game.move({
// //       from: source,
// //       to: target,
// //       promotion: 'q', // promote to a queen
// //     });

// //     if (move === null) return false; // illegal move

// //     if (game.game_over()) {
// //       setGameOver(true);
// //       setWinner(game.turn() === 'w' ? 'Black' : 'White');
// //     }

// //     return true;
// //   };

// //   const restartGame = () => {
// //     setGame(new Chess());
// //     setGameOver(false);
// //     setWinner(null);
// //   };

// //   return (
// //     <Container maxWidth="md" sx={{ marginTop: 4 }}>
// //       <Typography variant="h4" align="center" gutterBottom>
// //         Chess Game
// //       </Typography>
// //       <Chessboard position={game.fen()} onPieceDrop={onDrop} />
// //       {gameOver && (
// //         <Box mt={4} textAlign="center">
// //           <Typography variant="h6">Game Over</Typography>
// //           <Typography variant="h6">Winner: {winner}</Typography>
// //           <Button variant="contained" color="primary" onClick={restartGame}>
// //             Restart Game
// //           </Button>
// //         </Box>
// //       )}
// //     </Container>
// //   );
// // };

// // export default ChessGame;

// // src/ChessGame.js

// import React, { useState } from 'react';
// import { Chessboard } from 'react-chessboard';
// import { Chess } from 'chess.js';
// import { Container, Typography, Box, Button } from '@mui/material';
// // import 'react-chessboard/dist/react-chessboard.css';

// const ChessGame = () => {
//   const [game, setGame] = useState(new Chess());
//   const [winner, setWinner] = useState(null);
//   const [gameOver, setGameOver] = useState(false);

//   const onDrop = (source, target) => {
//     if (gameOver) return false;

//     const move = game.move({
//       from: source,
//       to: target,
//       promotion: 'q',
//     });

//     if (move === null) return false;

//     if (game.game_over()) {
//       setGameOver(true);
//       setWinner(game.turn() === 'w' ? 'Black' : 'White');
//     }

//     return true;
//   };

//   const restartGame = () => {
//     setGame(new Chess());
//     setGameOver(false);
//     setWinner(null);
//   };

//   return (
//     <Container maxWidth="md" sx={{ marginTop: 4 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Chess Game
//       </Typography>
//       <Chessboard position={game.fen()} onPieceDrop={onDrop} />
//       {gameOver && (
//         <Box mt={4} textAlign="center">
//           <Typography variant="h6">Game Over</Typography>
//           <Typography variant="h6">Winner: {winner}</Typography>
//           <Button variant="contained" color="primary" onClick={restartGame}>
//             Restart Game
//           </Button>
//         </Box>
//       )}
//     </Container>
//   );
// };

// export default ChessGame;

// src/ChessGame.js

import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { Container, Typography, Box, Button } from '@mui/material';
// import 'react-chessboard/dist/react-chessboard.css';

const ChessGame = () => {
  const [game, setGame] = useState(new Chess());
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const onDrop = (source, target) => {
    if (gameOver) return false;

    const move = game.move({
      from: source,
      to: target,
      promotion: 'q', // promote to queen
    });

    if (move === null) return false; // illegal move

    // Check for game over after player's move
    if (game.game_over()) {
      setGameOver(true);
      setWinner(game.turn() === 'w' ? 'Black' : 'White');
      return true;
    }

    // Make a computer move
    setTimeout(makeComputerMove, 500); // Delay for better UX
    return true;
  };

  const makeComputerMove = () => {
    const possibleMoves = game.moves();

    // Exit if the game is over
    if (game.game_over() || game.in_draw() || possibleMoves.length === 0) {
      setGameOver(true);
      const winner = game.turn() === 'w' ? 'Black' : 'White';
      setWinner(winner);
      return;
    }

    // Select a random move
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    const move = possibleMoves[randomIndex];

    // Make the move
    game.move(move);
    
    // Check for game over after computer's move
    if (game.game_over()) {
      setGameOver(true);
      const winner = game.turn() === 'w' ? 'Black' : 'White';
      setWinner(winner);
    }

    // Update the game state
    setGame(new Chess(game.fen())); // Update game state to reflect the new position
  };

  const restartGame = () => {
    setGame(new Chess());
    setGameOver(false);
    setWinner(null);
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Chess Game
      </Typography>
      <Chessboard position={game.fen()} onPieceDrop={onDrop} />
      {gameOver && (
        <Box mt={4} textAlign="center">
          <Typography variant="h6">Game Over</Typography>
          <Typography variant="h6">Winner: {winner}</Typography>
          <Button variant="contained" color="primary" onClick={restartGame}>
            Restart Game
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default ChessGame;

