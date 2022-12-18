import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/common/header";
import Card from "../components/common/card";
import gameInitials from "../constants/game-initials";
import colors from "../constants/colors";

const WelcomeScreen = ({ setGameStatus }) => {
  return (
    <View style={styles.container}>
      <Header title="Welcome" />
      <View style={styles.content}>
        <Text>Welcome Screen</Text>

        <Text style={styles.desc}>
          Guess the numberbetween {gameInitials.randomNumberDownLimit} to{" "}
          {gameInitials.randomNumberUpLImit} in {gameInitials.totalTime}{" "}
          seconds. You have {gameInitials.tottalShot} shots.
        </Text>
        <Button
          title="Start game"
          onPress={() => {
            setGameStatus("start");
          }}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  desc: {
    fontSize: 18,
    fontStyle: "italic",
    color: colors.color3,
    textAlign: "center",
  },
});
