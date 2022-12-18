import { useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import gameInitials from "./constants/game-initials";
import GameScreen from "./screens/gameScreen";
import SummaryScreen from "./screens/summaryScreen";
import WelcomeScreen from "./screens/welcomeScrewn";

export default function App() {
  const [randomNumber, setrandomNumber] = useState();
  const [gameResult, setGameResult] = useState(""); //win|lost
  const [shot, setshot] = useState(gameInitials.tottalShot);
  const [timer, settimer] = useState(gameInitials.totalTime);
  const [gameStatus, setGameStatus] = useState("welcome"); //welcome|start|end
  return (
    <View style={styles.container}>
      {gameStatus === "welcome" ? (
        <WelcomeScreen setGameStatus={setGameStatus} />
      ) : gameStatus === "start" ? (
        <GameScreen />
      ) : (
        <SummaryScreen />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
