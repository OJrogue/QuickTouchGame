import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import Timer from './Timer';
import GameOver from './GameOver';

export default function App() {
  const SIZE = 50;
  const TIME = 10;
  const TIME_INCRESEMENT = 1;

  const maxHeight = Dimensions.get('window').height - SIZE;
  const maxWidth = Dimensions.get('window').width - SIZE;

  const [top, setTop] = useState(Math.floor(Math.random() * maxHeight));
  const [left, setLeft] = useState(Math.floor(Math.random() * maxWidth));

  const [score, setScore] = useState(0);

  const [timer, setTimer] = useState(TIME);
  const [gameOver, setGameOver] = useState(true);

  function touched() {
    setTop(Math.floor(Math.random() * maxHeight));
    setLeft(Math.floor(Math.random() * maxWidth));
    setScore(score + 1);
    setTimer((prevTimer) => prevTimer + TIME_INCRESEMENT);

    console.log(score);
  }

  function resetGame() {
    setTimer(TIME);
    setGameOver(false);
    setScore(0);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : prevTimer));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.score}>{score}</Text>
      <Pressable onTouchEnd={touched} style={styles.button}>
        <View
          style={{
            top: top,
            left: left,
            width: SIZE,
            height: SIZE,
            backgroundColor: 'blue',
            borderRadius: 5,
          }}
        ></View>
      </Pressable>
      <View style={styles.timerContainer}>
        {/* <Text style={styles.timer}>{timer}</Text> */}
        <Timer
          setTimer={setTimer}
          style={styles.timer}
          timer={timer}
          setGameOver={setGameOver}
        />
      </View>
      <GameOver score={score} resetGame={resetGame} visibility={gameOver} />
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: { zIndex: 100 },
  score: {
    fontSize: 30,
    position: 'absolute',
    top: 20,
    right: 20,
    fontWeight: 'bold',
  },
  timerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  timer: {
    fontSize: 100,
    opacity: 0.25,
  },
});
