import React, { useState, useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import global1 from "./global1";

const username = global1.name;
// const username = "alok"
const registerNo = global1.regno;

const pacmanImage =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-9-2550-Pacman_HD-removebg-preview.png";

const screenImg =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-9-290-pacmanScreenImg.png";

const PacManGame = () => {
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [pacman, setPacman] = useState({ x: 6, y: 4 });
  const [ghosts, setGhosts] = useState([
    { x: 1, y: 1 },
    { x: 1, y: 2 },
    { x: 1, y: 3 },
  ]);
  const [map, setMap] = useState([
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 2, 2, 1, 1, 5, 1, 1, 2, 2, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]);
  const [gameOver, setGameOver] = useState(false);
  const [alertShown, setAlertShown] = useState(false);

  const handleKeyDown = (event) => {
    if (gameOver) return;

    const directions = {
      37: { dx: -1, dy: 0 }, // left
      38: { dx: 0, dy: -1 }, // up
      39: { dx: 1, dy: 0 }, // right
      40: { dx: 0, dy: 1 }, // down
    };

    const move = directions[event.keyCode];
    if (move) {
      const newX = pacman.x + move.dx;
      const newY = pacman.y + move.dy;

      setScore((prev) => prev + 2);

      if (
        newX >= 0 &&
        newX < map[0].length &&
        newY >= 0 &&
        newY < map.length &&
        map[newY][newX] !== 1
      ) {
        setMap((prevMap) => {
          const newMap = [...prevMap];
          newMap[pacman.y][pacman.x] = 3; // ground
          setPacman({ x: newX, y: newY });
          newMap[newY][newX] = 5; // pacman
          return newMap;
        });
      }

      checkWinningCondition();
    }
  };

  const moveGhostsRandomly = () => {
    if (gameOver) return;

    const directions = [
      { dx: -1, dy: 0 }, // left
      { dx: 1, dy: 0 }, // right
      { dx: 0, dy: -1 }, // up
      { dx: 0, dy: 1 }, // down
    ];

    setGhosts((prevGhosts) => {
      return prevGhosts.map((ghost) => {
        let moved = false;
        let newX, newY;

        while (!moved) {
          const randomDirection =
            directions[Math.floor(Math.random() * directions.length)];
          newX = ghost.x + randomDirection.dx;
          newY = ghost.y + randomDirection.dy;

          if (
            newX >= 0 &&
            newX < map[0].length &&
            newY >= 0 &&
            newY < map.length &&
            map[newY][newX] !== 1 &&
            !(newX === pacman.x && newY === pacman.y)
          ) {
            moved = true;
          }
        }

        return { x: newX, y: newY };
      });
    });
  };

  const checkWinningCondition = () => {
    if (!map.some((row) => row.includes(2))) {
      if (!alertShown) {
        setGameOver(true);
        setAlertShown(true);
        alert("Congratulations! You collected all the coins. You win!");
        setIsFinished(true);
      }
    } else if (
      ghosts.some((ghost) => ghost.x === pacman.x && ghost.y === pacman.y)
    ) {
      if (!alertShown) {
        setGameOver(true);
        setAlertShown(true);
        alert("Game over !! You collided with a ghost");
        setIsFinished(true);
      }
    }
  };

  useEffect(() => {
    const handleKeyDownEvent = (event) => handleKeyDown(event);
    document.addEventListener("keydown", handleKeyDownEvent);

    const ghostInterval = setInterval(() => {
      moveGhostsRandomly();
      checkWinningCondition();
    }, 200); // Move ghosts every 200 ms for faster movement

    return () => {
      document.removeEventListener("keydown", handleKeyDownEvent);
      clearInterval(ghostInterval);
    };
  }, [handleKeyDown, gameOver]);

  const cellStyles = {
    width: "50px",
    height: "50px",
    display: "inline-block",
    position: "relative",
  };

  const renderSVG = (type) => {
    switch (type) {
      case 1: // Wall
        return (
          <svg width="50" height="50">
            <rect width="50" height="50" fill="#5e318c" />
          </svg>
        );
      case 2: // Coin
        return (
          <svg width="50" height="50">
            <circle cx="25" cy="25" r="6" fill="gold" />
          </svg>
        );
      case 3: // Ground
        return (
          <svg width="50" height="50">
            <rect width="50" height="50" fill="lightgrey" />
          </svg>
        );
      case 5: // Pacman
        return (
          <img
            src={pacmanImage}
            alt="Pacman"
            style={{ width: "50px", height: "50px" }}
          />
          //   <svg width="50" height="50">
          //     <path d="M 25,25 A 20,20 0 1,1 0,25 L 25,25 Z" fill="yellow" />
          //   </svg>
        );
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (isFinished) {
      setLevel((prev) => prev + 1);
    }
  };

  return (
    <>
      {/* Header and Score */}
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
          Score: {score} {level > 0}
        </Typography>
      </Container>

      {/* Game Levels */}
      {level === 0 && (
        <Container>
          <Box sx={{ width: "100%", position: "relative" }}>
            <img
              src={screenImg}
              className="hover-image"
              style={{ width: "100%", transition: "filter 0.3s ease" }}
              alt="screen-demo"
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
              }}
            >
              <Typography variant="h6">Pac-Man: The Coin Collector</Typography>
              <Button
                variant="contained"
                onClick={() => setLevel((prev) => prev + 1)}
                sx={{ left: "32%" }}
              >
                Play Game
              </Button>
            </Box>
          </Box>
        </Container>
      )}

      {level === 1 && (
        <Container>
          <Box
            id="world"
            sx={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {map.map((row, rowIndex) => (
              <Box key={rowIndex} sx={{ display: "flex" }}>
                {row.map((cell, colIndex) => (
                  <Box key={colIndex} sx={cellStyles}>
                    {renderSVG(cell)}
                    {ghosts.map((ghost, index) =>
                      ghost.x === colIndex && ghost.y === rowIndex ? (
                        <Box
                          key={index}
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 1,
                          }}
                        >
                          <svg width="50" height="50">
                            <circle cx="25" cy="25" r="10" fill="red" />
                            <rect
                              x="15"
                              y="25"
                              width="20"
                              height="10"
                              fill="red"
                            />
                          </svg>
                        </Box>
                      ) : null
                    )}
                  </Box>
                ))}
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Button onClick={handleNext}>Next</Button>
          </Box>
        </Container>
      )}

      {level > 1 && (
        <Container
          sx={{
            width: "100%",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h5"
            textAlign="center"
            fontFamily="Montserrat, sans-serif"
            fontWeight="400"
            mb={"30px"}
            textTransform="capitalize"
          >
            Pac-Man: The Coin Collector
          </Typography>
          <Box
            sx={{
              bgcolor: "lightblue",
              color: "#FFFFFF",
              padding: "20px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <Box
              sx={{
                width: "400px",
                overflow: "hidden",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "700" }}
              >
                Well Done {username} 🎉
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "2rem",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "400",
                }}
              >
                Your total score is <br />
                {score}
              </Typography>
            </Box>
          </Box>

          <Button
            onClick={() => window.location.reload()}
            color="secondary"
            sx={{ marginTop: "20px" }}
          >
            Restart
          </Button>
        </Container>
      )}

      <style>
        {`
        .hover-image {
          filter: brightness(100%);
        }
        .hover-image:hover {
          filter: brightness(50%);
        }
      `}
      </style>
    </>
  );
};

export default PacManGame;
