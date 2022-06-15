import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const AddNewPost = ({ navigation }) => (
  <View style={styles.container}>
    <Header navigation={navigation} />
  </View>
);

const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require("../../assets/cancel.png")}
        style={{ height: 23, width: 23 }}
      />
    </TouchableOpacity>
    <Text style={styles.head}>NEW POST</Text>
    <Text></Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  head: {
    fontSize: 20,
    marginRight: 20,
    fontWeight: "bold",
  },
});

export default AddNewPost;
