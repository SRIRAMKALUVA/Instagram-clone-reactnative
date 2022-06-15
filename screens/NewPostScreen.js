import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import AddNewPost from "../components/NewPost/AddNewPost";
import FormikPostUploader from "../components/NewPost/FormikPostUploader";

const NewPostScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewPost navigation={navigation} />
      <FormikPostUploader navigation={navigation} />
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
export default NewPostScreen;
