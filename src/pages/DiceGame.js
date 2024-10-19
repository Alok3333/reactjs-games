import React, { useState } from "react";
import global1 from "./global1";
import FinalGamePage from "./FinalGamePage";
import { Typography } from "@mui/material";

const dices =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-548-dices.png";

const diceImages = [
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-919-dice_1.png",
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-938-dice_2.png",
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-954-dice_3.png",
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-1030-dice_4.png",
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-1057-dice_5.png",
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-1131-dice_6.png",
];

const DiceGame = () => {
  // Global file access here
  const name = global1.name;
  const regno = global1.regno;
  const avatarImg = global1.profileImage;

  // State start here
  const [level, setLevel] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const objective =
    "Playing this dice game offers a blend of fun and mental engagement! 🎲 It sharpens your decision-making skills as you choose numbers and strategize based on the dice rolls. The thrill of rolling the dice keeps the excitement alive, making it a great way to unwind and challenge yourself. 🌟 Plus, it's a perfect activity to enjoy with friends or family, promoting social interaction and friendly competition! 🤝🎉";

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
    setLevel((prev) => prev + 1);
  };

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => Math.min(prev + randomNumber, 100));
    } else {
      setScore((prev) => Math.max(prev - 2, 0));
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  const handleNext = () => {
    if (score >= 25) {
      setIsFinished(true);
      setLevel((prev) => prev + 1);
    } else {
      alert("You should get 25 score to go next level");
    }
  };

  return (
    <>
      <style>{`
        .start-game {
          max-width: 1180px;
          height: 100vh;
          display: flex;
          margin: 0 auto;
          align-items: center;
        }
        
        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .game-title {
          font-size: 96px;
          white-space: nowrap;
        }
        
        .game-container {
          padding-top: 70px;
        }
        
        .game-header {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
        }
        
        .total-score {
          max-width: 200px;
          text-align: center;
        }
        
        .score-value {
          font-size: 100px;
          line-height: 100px;
        }
        
        .score-label {
          font-size: 24px;
          font-weight: 500;
        }
        
        .button-container {
          margin-top: 40px;
          gap: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .rules {
          max-width: 800px;
          margin: 0 auto;
          background-color: #fbf1f1;
          padding: 20px;
          margin-top: 40px;
          margin-bottom: 40px;
          border-radius: 10px;
        }
        
        .rules-title {
          font-size: 24px;
        }
        
        .rules-content {
          margin-top: 24px;
        }
        
        .role-dice {
          margin-top: 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .dice {
          cursor: pointer;
        }
        
        .dice-instruction {
          font-size: 24px;
        }
        
        .number-selector {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        
        .error-message {
          color: #ff0000;
          font-size: 24px;
          font-weight: 700;
        }
        
        .number-buttons {
          display: flex;
          gap: 24px;
        }
        
        .box {
          height: 72px;
          width: 72px;
          border: 1px solid black;
          border-radius: 8px;
          display: grid;
          place-items: center;
          font-size: 24px;
          font-weight: 700;
          background-color: white;
          color: black;
          cursor: pointer;
        }
        
        .box.selected {
          background-color: black;
          color: white;
        }
        
        .button,
        .outline-button {
          padding: 10px 18px;
          border-radius: 5px;
          min-width: 220px;
          border: none;
          font-size: 16px;
          cursor: pointer;
          transition: 0.4s background ease-in;
        }
        
        .button {
          background: #000000;
          color: white;
        }
        
        .button:hover {
          background-color: white;
          border: 1px solid black;
          color: black;
        }
        
        .outline-button {
          background-color: white;
          border: 1px solid black;
          color: black;
        }
        
        .outline-button:hover {
          background-color: black;
          border: 1px solid transparent;
          color: white;
        }
      `}</style>

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
      {level === 0 && <StartGame toggle={toggleGamePlay} />}

      {!isFinished && level === 1 && (
        <>
          {isGameStarted ? (
            <div className="game-container">
              <div className="game-header">
                <TotalScore score={score} />
                <NumberSelector
                  error={error}
                  setError={setError}
                  selectedNumber={selectedNumber}
                  setSelectedNumber={setSelectedNumber}
                />
              </div>
              <RoleDice currentDice={currentDice} roleDice={roleDice} />
              <div className="button-container">
                <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
                <Button onClick={() => setShowRules((prev) => !prev)}>
                  {showRules ? "Hide" : "Show"} Rules
                </Button>
                <Button onClick={handleNext}>Next</Button>
              </div>
              {showRules && <Rules />}
            </div>
          ) : (
            <StartGame toggle={toggleGamePlay} />
          )}
        </>
      )}

      {/* Finish Screen */}
      {isFinished && (
        <FinalGamePage
          username={name}
          regno={regno}
          profileImg={avatarImg}
          objective={objective}
          score={score}
          title="Dicey Decisions"
          rating=""
        />
      )}
    </>
  );
};

const TotalScore = ({ score }) => (
  <div className="total-score">
    <h1 className="score-value">{score}</h1>
    <p className="score-label">Total Score</p>
  </div>
);

const StartGame = ({ toggle }) => (
  <div className="start-game">
    <div>
      <img src={dices} alt="dices" />
    </div>
    <div className="content">
      <h1 className="game-title">Dicey Decisions</h1>
      <Button onClick={toggle}>Play Now</Button>
    </div>
  </div>
);

const Rules = () => (
  <div className="rules">
    <h2 className="rules-title">How to play the dice game</h2>
    <div className="rules-content">
      <p>Select any number</p>
      <p>Click on the dice image</p>
      <p>
        If the selected number equals the dice number, you will get the same
        points as the dice.
      </p>
      <p>If you guess wrong, then 2 points will be deducted.</p>
    </div>
  </div>
);

const RoleDice = ({ roleDice, currentDice }) => (
  <div className="role-dice">
    <div className="dice" onClick={roleDice}>
      <img src={diceImages[currentDice - 1]} alt={`dice ${currentDice}`} />
    </div>
    <p className="dice-instruction">Click on Dice to roll</p>
  </div>
);

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <div className="number-selector">
      <p className="error-message">{error}</p>
      <div className="number-buttons">
        {arrNumber.map((value, i) => (
          <div
            className={`box ${value === selectedNumber ? "selected" : ""}`}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </div>
        ))}
      </div>
      <p>Select Number</p>
    </div>
  );
};

const Button = (props) => <button className="button" {...props} />;

const OutlineButton = (props) => (
  <button className="outline-button" {...props} />
);

export default DiceGame;
