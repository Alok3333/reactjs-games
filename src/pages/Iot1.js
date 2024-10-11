import React, { useState, useEffect } from "react";
import HangmanCanvas from "./HangmanCanvas";
import global1 from "./global1";
import FinalGamePage from "./FinalGamePageNew";
import { Box, Button, Container, Typography } from "@mui/material";

// Global data here
const username = global1.name;
const registerNo = global1.regno;
const avatarImg = global1.profileImage; // global1 profile pic here

const words = [
  "REACT",
  "EDUCATION",
  "COLLEGE",
  "MAGIC",
  "HAVEFUN",
  "FEEDBACK",
  "SCHOOL",
  "LEARNING",
  "STUDENT",
  "TEACHER",
  "BOOKS",
  "HOMEWORK",
  "CLASSROOM",
  "UNIVERSITY",
  "GRADUATE",
  "KNOWLEDGE",
  "LECTURE",
  "ASSIGNMENT",
  "EXAMINATION",
  "RESEARCH",
  "DISCIPLINE",
  "CURRICULUM",
  "EDUCATION",
  "TUTORIAL",
  "SCHOLARSHIP",
  "LIBRARY",
  "STUDY",
  "LECTURER",
  "DEGREE",
  "ACADEMIC",
  "PROJECT",
  "PAPER",
  "COACHING",
  "WORKSHOP",
  "SCHOOLMATE",
  "FACULTY",
  "CLASSMATES",
  "CERTIFICATE",
  "ELECTIVE",
  "PROFESSOR",
  "MATH",
  "SCIENCE",
  "HISTORY",
  "LANGUAGE",
  "ENGLISH",
  "GEOGRAPHY",
  "ART",
  "MUSIC",
  "SPORTS",
  "CLUB",
  "FIELDTRIP",
  "PRACTICE",
  "VOLUNTEER",
  "TRIP",
  "FUN",
  "LIKE",
  "SHARE",
  "EVERYONE",
  "MANY",
  "MORE",
  "LIVE",
];

const Iot1 = () => {
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const lettersToReveal = 2; // Number of letters to reveal at the start

  // Game Objective
  const objective = "";

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    if (isGameWon() || isGameLost()) {
      const timer = setTimeout(() => {
        window.location.reload(); // Reload the page when the game is won or lost
      }, 1000); // Optionally add a delay before reloading

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [mistakes, guessedLetters, word]);

  const chooseRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].toUpperCase();
  };

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setMistakes(mistakes + 1);
      }
    }
  };

  const isGameWon = () => {
    return word.split("").every((letter) => guessedLetters.includes(letter));
  };

  const isGameLost = () => {
    return mistakes >= 6;
  };

  const resetGame = () => {
    const newWord = chooseRandomWord();
    setWord(newWord);
    setGuessedLetters(revealRandomLetters(newWord, lettersToReveal));
    setMistakes(0);
  };

  const revealRandomLetters = (word, count) => {
    const letters = new Set();
    while (letters.size < count) {
      const randomIndex = Math.floor(Math.random() * word.length);
      letters.add(word[randomIndex]);
    }
    return Array.from(letters);
  };

  return (
    <>
      {!isFinished && (
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
        </>
      )}

      {/* Game Levels */}
      {level === 0 && (
        <Container>
          <Box sx={{ width: "100%", position: "relative" }}>
            {/* <img
              src={screenImg}
              className="hover-image"
              style={{ width: "100%", transition: "filter 0.3s ease" }}
              alt="screen-demo"
            /> */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
              }}
            >
              <Typography variant="h6">Word Guessing</Typography>
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

      {!isFinished && level === 1 && (
        <div className="hangman-container">
          <h1 style={{ color: "#40513B" }}>Word-Guessing Game</h1>
          <h5 style={{ color: "#40513B" }}>
            Start a new game, guess letters to reveal the word, and avoid
            drawing the word-guessing by making incorrect guesses. Win by
            guessing the word is complete. Have fun!
          </h5>
          <h5 style={{ color: "#40513B" }}>
            We have over 50 words related to education. Guess the letters and
            have fun playing!
          </h5>

          <HangmanCanvas mistakes={mistakes} />
          <div className="word-display">
            {word.split("").map((letter, index) => (
              <span key={index} className="letter">
                {guessedLetters.includes(letter) ? letter : "*"}
              </span>
            ))}
          </div>
          <div className="keyboard">
            {Array.from(Array(26)).map((_, index) => (
              <button
                key={index}
                onClick={() => handleGuess(String.fromCharCode(65 + index))}
                disabled={guessedLetters.includes(
                  String.fromCharCode(65 + index)
                )}
              >
                {String.fromCharCode(65 + index)}
              </button>
            ))}
          </div>
          {isGameWon() && <p className="result-message">You won!</p>}
          {isGameLost() && (
            <p className="result-message">You lost! The word was: {word}</p>
          )}
          <button className="new-game-button" onClick={resetGame}>
            Change word
          </button>
          <button className="new-game-button" onClick={resetGame}>
            Next Level
          </button>

          <style>
            {`
            .hangman-canvas {
                display: flex;
                justify-content: center;
                margin: 20px;
            }

            .hangman-canvas > div {
                width: 20px;
                height: 20px;
                background-color: #FF0000;
                margin: 0 5px;
                border-radius: 50%;
            }

            .word-display {
                margin: 20px;
                font-size: 24px;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
            }

            .letter {
                margin: 0 5px;
                font-size: 24px;
                display: inline-block;
                border-bottom: 2px solid #40513B;
                padding-bottom: 5px;
                transition: all 0.3s ease;
                color: #40513B;
            }

            .letter.guessed {
                color: rgb(106, 192, 238);
                border-bottom: 2px solid rgb(22, 96, 118);
            }

            .result-message {
                font-size: 24px;
                font-weight: bold;
                margin: 20px 0;
                color: #40513B;
            }

            .keyboard {
                margin: 20px;
                display: grid;
                grid-template-columns: repeat(7, 1fr);
                gap: 10px;
            }

            .keyboard button {
                font-size: 18px;
                padding: 10px 15px;
                background-color: #609966;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .keyboard button:disabled {
                background-color: #ccc;
                cursor: not-allowed;
            }

            .keyboard button:hover {
                background-color: #9DC08B;
            }

            p {
                font-size: 24px;
                font-weight: bold;
                color: #002c4f;
                margin-top: 20px;
            }

            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                    transform: translateY(0);
                }
                40% {
                    transform: translateY(-20px);
                }
                60% {
                    transform: translateY(-10px);
                }
            }

            .bounce {
                animation: bounce 1s infinite;
            }

            .hangman-container {
                text-align: center;
                padding: 20px;
                margin-top: 5%;
                margin-left: 10%;
                margin-right: 10%;
                background-color: #EDF1D6;
                border-radius: 10px;
                box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
            }

            h1 {
                color: #333;
            }

            .new-game-button {
                font-size: 18px;
                padding: 10px 15px;
                background-color: #40513B;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
                margin-left: 5px;
                margin-right: 5px;
                transition: all 0.3s ease;
            }

            .new-game-button:hover {
                background-color: #609966;
            }

        `}
          </style>
        </div>
      )}

      {/* Finish Screen */}
      {isFinished && (
        <FinalGamePage
          username={username}
          regno={registerNo}
          profileImg={avatarImg}
          objective={objective}
          score={score}
          title="Pac-Man: The Coin Collector"
        />
      )}
    </>
  );
};

export default Iot1;
