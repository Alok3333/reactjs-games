// import React, { useState } from "react";
// import styled from "styled-components";
// import global1 from "./global1";
// import FinalGamePage from "./FinalGamePage";
// import { Typography } from "@mui/material";

// // Global data here
// const username = global1.name;
// const registerNo = global1.regno;
// const avatarImg = global1.profileImage; // global1 profile pic here

// const dices =
//   "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-548-dices.png";

// const diceImages = [
//   "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-919-dice_1.png",
//   "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-938-dice_2.png",
//   "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-954-dice_3.png",
//   "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-1030-dice_4.png",
//   "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-1057-dice_5.png",
//   "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-16-1131-dice_6.png",
// ];

// const DiceGame = () => {
//   const [level, setLevel] = useState(0);
//   const [isFinished, setIsFinished] = useState(false);
//   const [score, setScore] = useState(0);
//   const [selectedNumber, setSelectedNumber] = useState();
//   const [currentDice, setCurrentDice] = useState(1);
//   const [error, setError] = useState("");
//   const [showRules, setShowRules] = useState(false);
//   const [isGameStarted, setIsGameStarted] = useState(false);

//   const objective =
//     "Playing this dice game offers a blend of fun and mental engagement! 🎲 It sharpens your decision-making skills as you choose numbers and strategize based on the dice rolls. The thrill of rolling the dice keeps the excitement alive, making it a great way to unwind and challenge yourself. 🌟 Plus, it's a perfect activity to enjoy with friends or family, promoting social interaction and friendly competition! 🤝🎉";

//   const toggleGamePlay = () => {
//     setIsGameStarted((prev) => !prev);
//     setLevel((prev) => prev + 1);
//   };

//   const generateRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min) + min);
//   };

//   const roleDice = () => {
//     if (!selectedNumber) {
//       setError("You have not selected any number");
//       return;
//     }

//     const randomNumber = generateRandomNumber(1, 7);
//     setCurrentDice(randomNumber);

//     if (selectedNumber === randomNumber) {
//       setScore((prev) => Math.min(prev + randomNumber, 100));
//     } else {
//       setScore((prev) => Math.max(prev - 2, 0));
//     }

//     setSelectedNumber(undefined);
//   };

//   const resetScore = () => {
//     setScore(0);
//   };

//   const handleNext = () => {
//     // check min score to go next level
//     if (score >= 25) {
//       setIsFinished(true);
//       setLevel((pev) => pev + 1);
//     } else {
//       alert("You Should get 25 score to go next level");
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
//             // backgroundColor: "red",
//           }}
//         >
//           <Typography variant="h5" fontWeight="bold">
//             Username: {username}
//             <br />
//             Register no: {registerNo}
//           </Typography>
//           <Typography variant="h5" fontWeight="bold">
//             Score: {score}
//           </Typography>
//         </Typography>
//       )}

//       {/* Game Levels */}
//       {level === 0 && <StartGame toggle={toggleGamePlay} />}

//       {!isFinished && level === 1 && (
//         <>
//           {isGameStarted ? (
//             <div sx={{ paddingTop: "70px" }}>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-around",
//                   alignItems: "end",
//                 }}
//               >
//                 <TotalScore score={score} />
//                 <NumberSelector
//                   error={error}
//                   setError={setError}
//                   selectedNumber={selectedNumber}
//                   setSelectedNumber={setSelectedNumber}
//                 />
//               </div>
//               <RoleDice currentDice={currentDice} roleDice={roleDice} />
//               <div
//                 style={{
//                   marginTop: "40px",
//                   gap: "10px",
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
//                 <Button onClick={() => setShowRules((prev) => !prev)}>
//                   {showRules ? "Hide" : "Show"} Rules
//                 </Button>
//                 <Button onClick={handleNext}>Next</Button>
//               </div>
//               {showRules && <Rules />}
//             </div>
//           ) : (
//             <StartGame toggle={toggleGamePlay} />
//           )}
//         </>
//       )}

//       {/* Finish Screen */}
//       {isFinished && (
//         <FinalGamePage
//           username={username}
//           regno={registerNo}
//           profileImg={avatarImg}
//           objective={objective}
//           score={score}
//           title="Dicey Decisions"
//           rating=""
//         />
//       )}
//     </>
//   );
// };

// const TotalScore = ({ score }) => (
//   <div style={{ maxWidth: "200px", textAlign: "center" }}>
//     <h1 style={{ fontSize: "100px", lineHeight: "100px" }}>{score}</h1>
//     <p style={{ fontSize: "24px", fontWeight: 500 }}>Total Score</p>
//   </div>
// );

// const StartGame = ({ toggle }) => (
//   <div
//     style={{
//       maxWidth: "1180px",
//       height: "100vh",
//       display: "flex",
//       margin: "0 auto",
//       alignItems: "center",
//     }}
//   >
//     <div>
//       <img src={dices} alt="dices" />
//     </div>
//     <div className="content">
//       <h1 style={{ fontSize: "96px", whiteSpace: "nowrap" }}>
//         Dicey Decisions
//       </h1>
//       <Button onClick={toggle}>Play Now</Button>
//     </div>
//   </div>
// );

// const Rules = () => (
//   <div
//     style={{
//       maxWidth: "800px",
//       margin: "0 auto",
//       backgroundColor: "#fbf1f1",
//       padding: "20px",
//       marginTop: "40px",
//       marginBottom: "40px",
//       borderRadius: "10px",
//     }}
//   >
//     <h2 style={{ fontSize: "24px" }}>How to play dice game</h2>
//     <div style={{ marginTop: "24px" }}>
//       <p>Select any number</p>
//       <p>Click on dice image</p>
//       <p>
//         After clicking on the dice, if the selected number equals the dice
//         number, you will get the same points as the dice.
//       </p>
//       <p>If you guess wrong, then 2 points will be deducted.</p>
//     </div>
//   </div>
// );

// const RoleDice = ({ roleDice, currentDice }) => (
//   <div
//     style={{
//       marginTop: "48px",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//     }}
//   >
//     <div style={{ cursor: "pointer" }} onClick={roleDice}>
//       <img src={diceImages[currentDice - 1]} alt={`dice ${currentDice}`} />
//     </div>
//     <p style={{ fontSize: "24px" }}>Click on Dice to roll</p>
//   </div>
// );

// const NumberSelector = ({
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
//     <div
//       style={{ display: "flex", flexDirection: "column", alignItems: "end" }}
//     >
//       <p style={{ color: "#FF0000", fontSize: "24px", fontWeight: 700 }}>
//         {error}
//       </p>
//       <div style={{ display: "flex", gap: "24px" }}>
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
//     </div>
//   );
// };

// const Box = styled.div`
//   height: 72px;
//   width: 72px;
//   border: 1px solid black;
//   border-radius: 8px;
//   display: grid;
//   place-items: center;
//   font-size: 24px;
//   font-weight: 700;
//   background-color: ${(props) => (props.isSelected ? "black" : "white")};
//   color: ${(props) => (!props.isSelected ? "black" : "white")};
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

// export default DiceGame;