// src/RockPaperScissors.js
import React, { useState } from 'react';
import { Button, Typography, Container, Grid } from '@mui/material';

const choices = ['Rock', 'Paper', 'Scissors'];

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return 'It\'s a Tie!';
  if (
    (userChoice === 'Rock' && computerChoice === 'Scissors') ||
    (userChoice === 'Paper' && computerChoice === 'Rock') ||
    (userChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    return 'You Win!';
  }
  return 'You Lose!';
};

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const handleUserChoice = (choice) => {
    const computerChoice = getComputerChoice();
    setUserChoice(choice);
    setComputerChoice(computerChoice);
    const winner = determineWinner(choice, computerChoice);
    setResult(winner);
  };

  const handleReset = () => {
    setUserChoice('');
    setComputerChoice('');
    setResult('');
  };

  return (
    <Container style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Rock Paper Scissors
      </Typography>
      <Typography variant="h6">Choose your weapon:</Typography>
      <Grid container spacing={2} justifyContent="center" style={{ marginBottom: '20px' }}>
        {choices.map((choice) => (
          <Grid item key={choice}>
            <Button
              variant="contained"
              onClick={() => handleUserChoice(choice)}
              style={{ margin: '10px' }}
            >
              {choice}
            </Button>
          </Grid>
        ))}
      </Grid>

      {userChoice && (
        <div>
          <Typography variant="h6">You chose: {userChoice}</Typography>
          <Typography variant="h6">Computer chose: {computerChoice}</Typography>
          <Typography variant="h5" style={{ marginTop: '20px' }}>{result}</Typography>
        </div>
      )}

      <Button variant="outlined" onClick={handleReset} style={{ marginTop: '20px' }}>
        Play Again
      </Button>
    </Container>
  );
};

export default RockPaperScissors;
