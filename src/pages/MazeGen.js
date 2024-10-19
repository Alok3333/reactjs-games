import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Button,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import global1 from "./global1";
import FinalGamePage from "./FinalGamePage";

// Maze generation logic
const generateMaze = (width, height) => {
  const maze = Array.from({ length: height }, () => Array(width).fill(1));

  const carve = (x, y) => {
    maze[y][x] = 0;

    const directions = [
      { dx: 2, dy: 0 }, // East
      { dx: -2, dy: 0 }, // West
      { dx: 0, dy: 2 }, // South
      { dx: 0, dy: -2 }, // North
    ];

    for (let i = directions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [directions[i], directions[j]] = [directions[j], directions[i]];
    }

    directions.forEach(({ dx, dy }) => {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < width &&
        ny < height &&
        maze[ny][nx] === 1
      ) {
        maze[y + dy / 2][x + dx / 2] = 0; // Carve a path
        carve(nx, ny);
      }
    });
  };

  carve(0, 0);
  return maze;
};

// Main component
const MazeGen = () => {
  // Global data here
  const username = global1.name;
  const registerNo = global1.regno;
  const avatarImg = global1.profileImage; // global1 profile pic here

  // State start here
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isReached, setIsReached] = useState(false);
  const [maze, setMaze] = useState([]);
  const [difficulty, setDifficulty] = useState("easy");
  const [yellowSquare, setYellowSquare] = useState({ x: 0, y: 0 });
  const [timer, setTimer] = useState(70); // Default timer set to easy level
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // New state for play mode

  // Game Objective
  const objective =
    "This maze generation game offers a fun and engaging way to enhance problem-solving skills and spatial awareness. It challenges players to navigate through randomly generated mazes, fostering critical thinking and strategy development. Additionally, the game provides a sense of accomplishment when reaching the red dot, making it an enjoyable experience for users of all ages. Whether you play solo or compete with friends, it’s a great way to unwind while stimulating your mind!";

  const mazeSettings = {
    easy: { width: 11, height: 11 },
    medium: { width: 21, height: 21 },
    hard: { width: 31, height: 31 },
  };

  const timerSettings = {
    easy: 70,
    medium: 320,
    hard: 500,
  };

  const redDot = { x: 0, y: 0 }; // Red dot position

  const createMaze = () => {
    const { width, height } = mazeSettings[difficulty];
    const newMaze = generateMaze(width, height);
    setMaze(newMaze);
    setYellowSquare({ x: 0, y: height - 1 }); // Reset yellow square position when maze is generated
    setTimer(timerSettings[difficulty]); // Set the timer based on difficulty
    setIsPlaying(false); // Reset play state
    setIsTimerActive(false); // Ensure timer is not active when maze is created
  };

  const moveSquare = (dx, dy) => {
    if (!isPlaying) return; // Prevent movement if not in play mode

    const newX = yellowSquare.x + dx;
    const newY = yellowSquare.y + dy;

    // Check if the new position is within bounds and on a white cell
    if (
      newX >= 0 &&
      newX < maze[0].length &&
      newY >= 0 &&
      newY < maze.length &&
      maze[newY][newX] === 0
    ) {
      setYellowSquare({ x: newX, y: newY });

      // Check if the yellow square reaches the red dot
      if (newX === redDot.x && newY === redDot.y) {
        alert("Congratulations! You reached the target red dot!");
        setIsReached(true);
      }
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case "ArrowUp":
          moveSquare(0, -1);
          break;
        case "ArrowDown":
          moveSquare(0, 1);
          break;
        case "ArrowLeft":
          moveSquare(-1, 0);
          break;
        case "ArrowRight":
          moveSquare(1, 0);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [yellowSquare, maze, isPlaying]);

  useEffect(() => {
    let interval;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
      setIsPlaying(false); // Stop the game if time runs out
      alert("Time's up! You can now proceed to the next level.");
      setIsReached(false); // Disable further moves
    }

    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  const handleFinished = () => {
    let calculatedScore = 0;
    if (isReached) {
      calculatedScore = 100; // Full score for completion within time
    } else {
      calculatedScore = Math.floor(Math.random() * 11) + 10; // Random score between 30 and 50
    }
    setScore(calculatedScore);
    setLevel((prev) => prev + 1);
    setIsFinished(true);
  };

  const handlePlay = () => {
    setIsPlaying(true); // Set play state to true
    setIsTimerActive(true); // Start the timer
  };

  return (
    <>
      {/* Header and Score */}
      {!isFinished && (
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            my: "20px",
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Username: {username}
            <br />
            Register no: {registerNo}
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            Score: {score}
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            Time Left: {Math.floor(timer / 60)}:{("0" + (timer % 60)).slice(-2)}
          </Typography>
        </Container>
      )}

      {/* Game Levels */}
      {level === 0 && (
        <Container>
          <Box sx={{ width: "100%", position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "30%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Typography variant="h4" sx={{ mb: "20px" }}>
                Maze Generation Game
              </Typography>
              <Button
                variant="contained"
                onClick={() => setLevel((prev) => prev + 1)}
                sx={{ left: "40%" }}
              >
                Play Game
              </Button>
            </Box>
          </Box>
        </Container>
      )}

      {!isFinished && level === 1 && (
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            textAlign: "center",
          }}
        >
          <h1>Maze Generation Game</h1>
          <Select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            style={{ marginBottom: "20px" }}
          >
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </Select>
          <Button variant="contained" onClick={createMaze}>
            Generate Maze
          </Button>
          <Box
            display="grid"
            gridTemplateColumns={`repeat(${maze[0]?.length || 1}, 20px)`}
            marginTop={2}
            marginBottom={2}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {maze.map((row, y) =>
              row.map((cell, x) => (
                <Box
                  key={`${x}-${y}`}
                  width="20px"
                  height="20px"
                  bgcolor={cell === 1 ? "black" : "white"}
                  border={1}
                  borderColor="grey.500"
                >
                  {/* Render red dot and yellow square */}
                  {x === redDot.x && y === redDot.y && (
                    <Box
                      width="100%"
                      height="100%"
                      bgcolor="red"
                      borderRadius="50%"
                    />
                  )}
                  {x === yellowSquare.x && y === yellowSquare.y && (
                    <Box
                      width="100%"
                      height="100%"
                      bgcolor="yellow"
                      borderRadius={0}
                    />
                  )}
                </Box>
              ))
            )}
          </Box>

          <Box>
            <Button
              variant="outlined"
              color="success"
              onClick={handlePlay}
              sx={{ mx: 2 }}
            >
              {isPlaying ? "Pause" : "Play"}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleFinished}
              disabled={timer > 0 && !isReached}
            >
              Next
            </Button>
          </Box>
        </Container>
      )}

      {/* Finish Screen */}
      {isFinished && (
        <FinalGamePage
          username={username}
          regno={registerNo}
          profileImg={avatarImg}
          objective={objective}
          score={score}
          title="Maze Generation Game"
          rating=""
        />
      )}
    </>
  );
};

export default MazeGen;
