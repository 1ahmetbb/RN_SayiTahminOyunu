import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/back.jpg")}
        style={styles.container}
        imageStyle={styles.backImage}
      >
        <GameStartScreen />
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
