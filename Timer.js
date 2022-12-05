import { useEffect } from 'react';
import { Text } from 'react-native';

export default function Timer({ style, timer, setGameOver }) {
  if (timer - Date.now() <= 0) {
    setGameOver(true);
    return <Text style={style}>0</Text>;
  }

  return <Text style={style}>{((timer - Date.now()) * 0.001).toFixed(3)}</Text>;
}
