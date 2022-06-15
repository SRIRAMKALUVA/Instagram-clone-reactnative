import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import SignedInStack from "./screens/Navigation";

export default function App() {
  return <SignedInStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
