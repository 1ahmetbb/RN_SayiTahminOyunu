import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  function sendedHendlerNamber(sendedNumber) {
    setUserNumber(sendedNumber);
  }

  let screen = <GameStartScreen onSendNumber={sendedHendlerNamber} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/back.jpg")}
        style={styles.container}
        imageStyle={styles.backImage}
      >
        {screen}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  backImage: {
    opacity: 0.3,
  },
});
