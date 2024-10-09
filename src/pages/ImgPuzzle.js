import React, { useState, useEffect } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import styles from "../virtuallabcss/Puzzle.module.css";
import global1 from "./global1";
import { Box, Container } from "@mui/system";
import { Button, Typography, Modal } from "@mui/material";

const screenImg =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-8-4435-screen-1.png";
const img =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-8-4246-FindDiff.png";
const img2 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-8-4227-bg3.jpg";
const img3 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-8-4330-FindDiff3.png";
const img4 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-8-437-FindDiff2.png";
const img5 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-8-4352-FindDiff4.png";
const img6 =
  "https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-8-4412-FindDiff5.png";

const username = global1.name;
const registerNo = global1.regno;

function ImgPuzzle() {
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [title, setTitle] = useState("Unpuzzle the pieces!");
  const [isSolved, setIsSolved] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // Initial timer
  const [openModal, setOpenModal] = useState(false);

  // Timer duration for each level
  const timerDuration = [30, 50, 80, 120, 180, 270]; // Timer for each level

  useEffect(() => {
    if (level > 0) {
      setTimeLeft(timerDuration[level - 1]); // Reset timer for current level
    }
  }, [level]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setOpenModal(true); // Open modal when time runs out
      return; // Exit early if time is out
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId); // Cleanup the interval
  }, [timeLeft]);

  const handleNextLevel = () => {
    if (isSolved) {
      const points = level === 5 ? 20 : 10 + level * 5; // Dynamic points based on level
      setScore((prev) => prev + points);
      setIsSolved(false);
      setLevel((prev) => prev + 1);
      setTitle("Unpuzzle the pieces!");
    }
  };

  const handleRestart = () => {
    setOpenModal(false);
    setTimeLeft(timerDuration[level - 1]); // Reset to the current level's timer
  };

  return (
    <>
      {/* Modal for timer expiration */}
      {level > 0 && (
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <Box sx={{ ...modalStyle }}>
            <Typography variant="h6" textAlign="center">
              Time's Up!
            </Typography>
            <Button onClick={handleRestart}>Restart Level</Button>
            <Button onClick={() => window.location.reload()} color="secondary">
              Restart Again
            </Button>
          </Box>
        </Modal>
      )}

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
          Score: {score} {level > 0 && `| Time Left: ${timeLeft}s`}
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
              <Typography variant="h6">Unpuzzle the pieces of image</Typography>
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

      {/* Puzzle Components */}
      {level > 0 && (
        <Container>
          <h2 className={styles.tag}>{title}</h2>
          <Box
            sx={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
              borderRadius: "5px",
              width: "100%",
            }}
          >
            <JigsawPuzzle
              imageSrc={
                level === 1
                  ? img
                  : level === 2
                  ? img2
                  : level === 3
                  ? img3
                  : level === 4
                  ? img4
                  : level === 5
                  ? img5
                  : img6
              }
              rows={level + 1}
              columns={level + 1}
              onSolved={() => setIsSolved(true)}
              className={styles.jigsawPuzzle}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Button onClick={handleNextLevel}>Next Level {level + 1}</Button>
          </Box>
        </Container>
      )}

      {/* Finish Screen */}
      {level > 6 && (
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h5"
            textAlign="center"
            fontWeight="bold"
            mb={"30px"}
          >
            Unpuzzle the pieces of image
          </Typography>
          <Typography variant="h5">{`Well Done ${username} 🎉`}</Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "2rem" }}>
            Your total score is <br />
            {score} / 100
          </Typography>
          <Button onClick={() => window.location.reload()}>Restart</Button>
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
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#ffcccb",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

export default ImgPuzzle;
