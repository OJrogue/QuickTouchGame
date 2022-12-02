import { useEffect } from 'react';
import { Text } from 'react-native';
import GameOver from './GameOver';

export default function Timer({ timer, setTimer, style, setGameOver }) {
  if (timer === 0) {
    setGameOver(true);
    return <></>;
  }

  if (timer > 0) {
    setTimeout(() => {
      setTimer(timer - 1);
    }, 10);
  }

  return <Text style={style}>{timer}</Text>;
}
