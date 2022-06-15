import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Signupform from "../components/Signup/Signupform";

const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Image
        source={require("../assets/Instagram_logo.svg.png")}
        style={styles.logoName}
      />
      <Signupform navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  logo: {
    height: 50,
    width: 50,
    alignSelf: "center",
    marginTop: 20,
  },
  logoName: {
    height: 40,
    width: 120,
    alignSelf: "center",
    marginTop: 10,
  },
});
export default SignUpScreen;
