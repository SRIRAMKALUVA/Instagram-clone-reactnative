import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import LoginForm from "../components/Login/LoginForm";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Image
        source={require("../assets/Instagram_logo.svg.png")}
        style={styles.logoName}
      />
      <LoginForm navigation={navigation} />
      <View style={styles.signupContainer}>
        <Text style={{ color: "#c7c7c7" }}>Don't have an account?</Text>
        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "center" }}
          onPress={() => navigation.push("SignUpScreen")}
        >
          <Text style={{ color: "#6BB0F5" }}> Signup</Text>
        </TouchableOpacity>
      </View>
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
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 90,
  },
  logoName: {
    height: 60,
    width: 180,
    alignSelf: "center",
    marginTop: 20,
  },
  signupContainer: {
    minHeight: 50,
    borderTopWidth: 1,
    borderColor: "#c7c7c7",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
export default LoginScreen;
