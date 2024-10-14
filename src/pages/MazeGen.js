// src/App.js
import React, { useState } from 'react';
import { Container, Box, Button } from '@mui/material';

// Maze generation logic
const generateMaze = (width, height) => {
  const maze = Array.from({ length: height }, () => Array(width).fill(1));

  const carve = (x, y) => {
    maze[y][x] = 0;

    const directions = [
      { dx: 2, dy: 0 },  // East
      { dx: -2, dy: 0 }, // West
      { dx: 0, dy: 2 },  // South
      { dx: 0, dy: -2 }  // North
    ];

    for (let i = directions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [directions[i], directions[j]] = [directions[j], directions[i]];
    }

    directions.forEach(({ dx, dy }) => {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && ny >= 0 && nx < width && ny < height && maze[ny][nx] === 1) {
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
  const [maze, setMaze] = useState([]);
  const [width, setWidth] = useState(21);
  const [height, setHeight] = useState(21);

  const createMaze = () => {
    const newMaze = generateMaze(width, height);
    setMaze(newMaze);
  };

  return (
    <Container>
      <h1>Maze Generation Game</h1>
      <Button variant="contained" onClick={createMaze}>
        Generate Maze
      </Button>
      <Box
        display="grid"
        gridTemplateColumns={`repeat(${width}, 20px)`}
        marginTop={2}
      >
        {maze.map((row, y) =>
          row.map((cell, x) => (
            <Box
              key={`${x}-${y}`}
              width="20px"
              height="20px"
              bgcolor={cell === 1 ? 'black' : 'white'}
              border={1}
              borderColor="grey.500"
            />
          ))
        )}
      </Box>
    </Container>
  );
};

export default MazeGen;
