import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import firebase from "firebase";
import { TouchableOpacity } from "react-native";

const Header = ({ navigation }) => {
  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      console.log("signed out");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/Instagram_logo.svg.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
          <Image
            style={styles.mainIcons}
            source={require("../../assets/add.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignOut}>
          <Image
            style={styles.mainIcons}
            source={require("../../assets/logout.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>2</Text>
          </View>
          <Image
            style={styles.mainIcons}
            source={require("../../assets/chat.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 5,
  },
  logo: {
    height: 35,
    width: 120,
    resizeMode: "contain",
  },
  mainIcons: {
    width: 50,
    height: 25,
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 22,
    bottom: 13,
    width: 20,
    height: 20,
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
  },
});

export default Header;
