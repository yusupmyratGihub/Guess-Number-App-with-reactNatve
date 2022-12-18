import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const Card = ({ cardStyle, children }) => {
  return <View style={[styles.card, cardStyle]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.color2,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.color3,
    borderRadius: 10,
    alignItems: "center",
  },
});
