import { useEffect } from 'react';
import { Text } from 'react-native';

export default function Timer({ style, timer, setGameOver }) {
  if (timer <= 0) {
    setGameOver(true);
  }

  return <Text style={style}>{timer.toFixed(2)}</Text>;
}
