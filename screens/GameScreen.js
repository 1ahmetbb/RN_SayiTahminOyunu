import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/Title.js";
import ComputerNumber from "../components/ComputerNumber.js";
import CustomButton from "../components/CustomButton.js";
import AntDesign from "@expo/vector-icons/AntDesign";
import ComputerGuess from "../components/ComputerGuess.js";

let minNumber = 1;
let maxNumber = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGues = generateNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGues);
  const [guessCounts, setGuessCounts] = useState([initialGues]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessCounts.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minNumber = 1;
    maxNumber = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert(
        "E Yuh Ama Saçmalama",
        "Sakın beni kandırmaya çalışma. Hiç mi matematiğin yok?",
        [{ text: "Cahilim :(", style: "cancel" }]
      );
      return;
    }
    if (direction === "lower") {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess + 1;
    }
    const newRandomNumber = generateNumber(minNumber, maxNumber, currentGuess);
    setCurrentGuess(newRandomNumber);
    setGuessCounts((prevGuess) => [newRandomNumber, ...prevGuess]);
  }

  function generateNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
      return randomNumber(min, max, exclude);
    } else {
      return randomNumber;
    }
  }
  return (
    <View style={styles.container}>
      <Title>Bilgisayar Tahmini</Title>
      <ComputerNumber>{currentGuess}</ComputerNumber>
      <View style={styles.card}>
        <Text style={styles.title}>Altında mı? Üstünde mı?</Text>
        <View style={styles.buttonsContainer}>
          <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
            <AntDesign name="minuscircle" size={32} color="darkred" />
          </CustomButton>
          <CustomButton onPress={nextGuessHandler.bind(this, "greater")}>
            <AntDesign name="pluscircle" size={32} color="darkgreen" />
          </CustomButton>
        </View>
      </View>
      <View style={{flex:1, marginVertical:10}}>
        <FlatList
          data={guessCounts}
          keyExtractor={(itemData) => itemData}
          renderItem={(itemData) => (
            <ComputerGuess
              roundNumber={guessCounts.length - itemData.index}
              guess={itemData.item}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  card: {
    backgroundColor: "lightgray",
    padding: 16,
    marginTop: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
  },
});
