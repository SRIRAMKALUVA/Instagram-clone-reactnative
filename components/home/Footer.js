import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useScrollToTop } from "@react-navigation/native";

const Footer = ({ navigation }) => {
  const ref = React.useRef(null);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.push("HomeScreen")}>
        <Image
          style={styles.mainIcons}
          source={require("../../assets/home.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.mainIcons}
          source={require("../../assets/search.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.mainIcons}
          source={require("../../assets/video.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.mainIcons}
          source={require("../../assets/bag.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadBadgeText}>.</Text>
        </View>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          }}
          style={styles.profile}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    marginHorizontal: 5,
    height: 40,
    alignItems: "baseline",
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
    // backgroundColor: "#FF3250",
    position: "absolute",
    right: -88,
    bottom: -100,
    width: 200,
    height: 200,
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "#FF3250",
    fontSize: 20,
    fontWeight: "bold",
  },
  profile: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    borderRadius: 20,
  },
});
export default Footer;
