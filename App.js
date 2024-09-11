import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text , View } from 'react-native';
import React, { useState} from 'react';

export default function App() {
  const [diceNumber, setDiceNumber] = useState(1);
  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNumber);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.diceNumber}>{diceNumber}</Text>
      <Button title="Roll Dice" onPress={rollDice} />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceNumber: {
    fontSize: 200,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});
