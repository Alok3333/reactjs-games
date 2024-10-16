// import styled from "styled-components";
// // import NumberSelector from "./NumberSelector";
// // import TotalScore from "./TotalScore";
// // import RoleDice from "./RoleDice";
// import { useState } from "react";
// import { Button, OutlineButton } from "../styled/Button";
// // import Rules from "./Rules";
// // import { Button } from "../styled/Button";
// import dices from "../assets/dices.png";

// export const TotalScore = ({ score }) => {
//   return (
//     <ScoreContainer>
//       <h1>{score}</h1>
//       <p>Total Score</p>
//     </ScoreContainer>
//   );
// };

// export const StartGame = ({ toggle }) => {
//   return (
//     <Container>
//       <div>
//         <img src={dices} alt="dices" />
//       </div>
//       <div className="content">
//         <h1>Dice Game</h1>
//         <Button onClick={toggle}>Play Now</Button>
//       </div>
//     </Container>
//   );
// };

// export const Rules = () => {
//   return (
//     <RulesContainer>
//       <h2>How to play dice game</h2>
//       <div className="text">
//         <p>Select any number</p>
//         <p>Click on dice image</p>
//         <p>
//           after click on dice if selected number is equal to dice number you
//           will get same point as dice{" "}
//         </p>
//         <p>if you get wrong guess then 2 point will be dedcuted </p>
//       </div>
//     </RulesContainer>
//   );
// };

// export const RoleDice = ({ roleDice, currentDice }) => {
//   return (
//     <DiceContainer>
//       <div className="dice" onClick={roleDice}>
//         <img
//           src={require(`../assets/dice_${currentDice}.png`)}
//           alt={`dice ${currentDice}`}
//         />
//       </div>
//       <p>Click on Dice to roll</p>
//     </DiceContainer>
//   );
// };

// export const NumberSelector = ({
//   setError,
//   error,
//   selectedNumber,
//   setSelectedNumber,
// }) => {
//   const arrNumber = [1, 2, 3, 4, 5, 6];

//   const numberSelectorHandler = (value) => {
//     setSelectedNumber(value);
//     setError("");
//   };

//   return (
//     <NumberSelectorContainer>
//       <p className="error">{error}</p>
//       <div className="flex">
//         {arrNumber.map((value, i) => (
//           <Box
//             isSelected={value === selectedNumber}
//             key={i}
//             onClick={() => numberSelectorHandler(value)}
//           >
//             {value}
//           </Box>
//         ))}
//       </div>
//       <p>Select Number</p>
//     </NumberSelectorContainer>
//   );
// };

// //   export default NumberSelector;

// const DiceGame = () => {
//   const [score, setScore] = useState(0);
//   const [selectedNumber, setSelectedNumber] = useState();
//   const [currentDice, setCurrentDice] = useState(1);
//   const [error, setError] = useState("");
//   const [showRules, setShowRules] = useState(false);

//   const generateRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min) + min);
//   };

//   const roleDice = () => {
//     if (!selectedNumber) {
//       setError("You have not selected any number");
//       return;
//     }

//     const randomNumber = generateRandomNumber(1, 7);
//     setCurrentDice((prev) => randomNumber);

//     if (selectedNumber === randomNumber) {
//       setScore((prev) => prev + randomNumber);
//     } else {
//       setScore((prev) => prev - 2);
//     }

//     setSelectedNumber(undefined);
//   };

//   const resetScore = () => {
//     setScore(0);
//   };

//   return (
//     <MainContainer>
//       <div className="top_section">
//         <TotalScore score={score} />
//         <NumberSelector
//           error={error}
//           setError={setError}
//           selectedNumber={selectedNumber}
//           setSelectedNumber={setSelectedNumber}
//         />
//       </div>
//       <RoleDice currentDice={currentDice} roleDice={roleDice} />
//       <div className="btns">
//         <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
//         <Button onClick={() => setShowRules((prev) => !prev)}>
//           {showRules ? "Hide" : "Show"} Rules
//         </Button>
//       </div>

//       {showRules && <Rules />}
//     </MainContainer>
//   );
// };

// export default DiceGame;

// const MainContainer = styled.main`
//   padding-top: 70px;
//   .top_section {
//     display: flex;
//     justify-content: space-around;
//     align-items: end;
//   }
//   .btns {
//     margin-top: 40px;
//     gap: 10px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 10px;
//   }
// `;

// const NumberSelectorContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: end;

//   .flex {
//     display: flex;
//     gap: 24px;
//   }
//   p {
//     font-size: 24px;
//     font-weight: 700px;
//   }
//   .error {
//     color: red;
//   }
// `;

// const Box = styled.div`
//   height: 72px;
//   width: 72px;
//   border: 1px solid black;
//   display: grid;
//   place-items: center;
//   font-size: 24px;
//   font-weight: 700;
//   background-color: ${(props) => (props.isSelected ? "black" : "white")};
//   color: ${(props) => (!props.isSelected ? "black" : "white")};
// `;

// const DiceContainer = styled.div`
//   margin-top: 48px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   .dice {
//     cursor: pointer;
//   }

//   p {
//     font-size: 24px;
//   }
// `;

// const RulesContainer = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
//   background-color: #fbf1f1;
//   padding: 20px;
//   margin-top: 40px;
//   border-radius: 10px;
//   h2 {
//     font-size: 24px;
//   }
//   .text {
//     margin-top: 24px;
//   }
// `;

// const Container = styled.div`
//   max-width: 1180px;
//   height: 100vh;
//   display: flex;
//   margin: 0 auto;
//   align-items: center;

//   .content {
//     h1 {
//       font-size: 96px;
//       white-space: nowrap;
//     }
//   }
// `;

// const ScoreContainer = styled.div`
//   max-width: 200px;
//   text-align: center;
//   h1 {
//     font-size: 100px;
//     line-height: 100px;
//   }
//   p {
//     font-size: 24px;
//     font-weight: 500px;
//   }
// `;

// const Button = styled.button`
//   color: white;
//   padding: 10px 18px;
//   background: #000000;
//   border-radius: 5px;
//   min-width: 220px;
//   border: none;
//   font-size: 16px;
//   cursor: pointer;
//   transition: 0.4s background ease-in;
//   &:hover {
//     background-color: white;
//     border: 1px solid black;
//     color: black;
//     transition: 0.3s background ease-in;
//   }
// `;

// const OutlineButton = styled(Button)`
//   background-color: white;
//   border: 1px solid black;
//   color: black;
//   &:hover {
//     background-color: black;
//     border: 1px solid transparent;
//     color: white;
//   }
// `;