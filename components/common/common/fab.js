import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import MCIcon from "@expo/vector-icons/MaterialCommunityIcons";

const FAB = (props) => {
  const buttonPosition = props.position || "right";
  const buttonIcon = props.icon || "plus";
  const positionStyle =
    buttonPosition === "right" ? { right: 20 } : { left: 20 };

  return (
    <TouchableHighlight
      style={[styles.button, props.buttonStyle, positionStyle]}
      {...props}
    >
      <>
        <MCIcon name={buttonIcon} style={[props.icon, props.textStyle]} />
        {/*<Text style={[styles.text, props.textStyle]}> {buttonTitle}</Text> */}
      </>
    </TouchableHighlight>
  );
};

export default FAB;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: 50,
    position: "absolute",
    bottom: 20,
  },

  icon: {
    color: "white",
    fontSize: 25,
  },
});
