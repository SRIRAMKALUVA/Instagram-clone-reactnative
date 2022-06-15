import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { POSTS } from "../../data/posts";
import { TouchableOpacity } from "react-native";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13, marginTop: 15 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
            }}
            style={styles.Yourstory}
          />
          <Image
            source={require("../../assets/plus.png")}
            style={styles.plus}
          />
          <Text style={styles.storyUser}>Your Story</Text>
        </TouchableOpacity>
        {POSTS.map((story, index) => (
          <TouchableOpacity key={index}>
            <View style={styles.outercircle}>
              <Image source={{ uri: story.image }} style={styles.story} />
            </View>
            <Text style={styles.storyUser}>{story.user}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
    padding: 0,
  },
  outercircle: {
    borderWidth: 3,
    borderColor: "#d6095b",
    borderRadius: 50,
    marginLeft: 6,
  },
  storyUser: {
    marginTop: 3,
    marginLeft: 5,
    alignSelf: "center",
  },
  Yourstory: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
  },
  plus: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 55,
    top: 50,
  },
});

export default Stories;
