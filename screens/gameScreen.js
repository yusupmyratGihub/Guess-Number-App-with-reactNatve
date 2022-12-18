import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/common/header";

const GameScreen = () => {
  return (
    <View>
      <Header title="Guess the number" />
      <Text>GameScreen</Text>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({});
