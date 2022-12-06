import { StyleSheet, Modal, View, Text, Button } from 'react-native';
import React from 'react';

export default function GameOver({ score, resetGame, visibility }) {
  return (
    <Modal visible={visibility} animationType='slide'>
      <View style={styles.gameOverContainer}>
        <Text style={styles.gameOver}>GameOver</Text>
        <Text style={styles.gameOver}>Score: {score}</Text>
        <Button title='Play Again' onPress={() => resetGame()} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameOver: {
    fontSize: 50,
  },
});
