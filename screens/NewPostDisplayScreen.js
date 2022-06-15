import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

const PLACEHOLDER_IMG = "https://via.placeholder.com/400x400.png";

const NewPostDisplayScreen = ({ route, navigation }) => {
  const { url } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/cancel.png")}
            style={{ height: 23, width: 23 }}
          />
        </TouchableOpacity>
        <Text style={styles.head}>UPLOADED IMAGE</Text>
        <Text></Text>
      </View>
      <Image
        source={{
          uri: url ? url : PLACEHOLDER_IMG,
        }}
        style={styles.img}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
  },
  head: {
    fontSize: 20,
    marginRight: 20,
    fontWeight: "bold",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
  },
});
export default NewPostDisplayScreen;
