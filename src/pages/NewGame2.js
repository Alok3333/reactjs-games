import React, { useState, useEffect } from 'react';

const BetterAimGame = () => {
  const [score, setScore] = useState(0);
  const [dots, setDots] = useState([]);
  const [isGameActive, setIsGameActive] = useState(false);
  const [dotTimeout, setDotTimeout] = useState(null);

  const createDot = () => {
    const newDot = {
      id: Date.now(),
      left: Math.random() * 90 + '%',
      top: Math.random() * 90 + '%',
    };
    setDots((prevDots) => [...prevDots, newDot]);

    // Set timeout to remove the dot if not clicked within 200ms
    const timeout = setTimeout(() => {
      setDots((prevDots) => prevDots.filter(dot => dot.id !== newDot.id));
    }, 800);

    setDotTimeout(timeout);
  };

  const handleDotClick = (id) => {
    setScore((prevScore) => prevScore + 5);
    setDots((prevDots) => prevDots.filter(dot => dot.id !== id));
    clearTimeout(dotTimeout);
  };

  useEffect(() => {
    if (isGameActive) {
      createDot();
      const interval = setInterval(createDot, 1000); // Create a new dot every second

      return () => clearInterval(interval);
    }
  }, [isGameActive]);

  const startGame = () => {
    setIsGameActive(true);
    setScore(0);
    setDots([]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>BetterAim Game</h1>
      <h2 style={styles.score}>Score: {score}</h2>
      <button onClick={startGame} style={styles.startButton}>Start Game</button>
      {isGameActive && (
        <div style={styles.dotContainer}>
          {dots.map(dot => (
            <div
              key={dot.id}
              style={{
                ...styles.dot,
                left: dot.left,
                top: dot.top,
              }}
              onClick={() => handleDotClick(dot.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    height: '500px',
    width: '100%',
    position: 'relative',
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    marginBottom: '10px',
  },
  score: {
    margin: '10px 0',
  },
  startButton: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  dotContainer: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  dot: {
    position: 'absolute',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: 'red',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
};

export default BetterAimGame;
