import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Main from "../components/home/Main";
import Footer from "../components/home/Footer";
import { ScrollView } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <View
        style={{
          borderBottomColor: "#f5f5f5",
          borderBottomWidth: 1,
          marginTop: 12,
        }}
      />
      <ScrollView>
        <Stories />
        <View
          style={{
            borderBottomColor: "#f5f5f5",
            borderBottomWidth: 1,
            marginTop: 8,
          }}
        />
        <Main />
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
export default HomeScreen;
