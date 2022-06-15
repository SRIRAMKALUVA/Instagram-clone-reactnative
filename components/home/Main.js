import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { POSTS } from "../../data/posts";

const Main = () => {
  return (
    <View style={{ marginTop: 10 }}>
      {POSTS.map((post, index) => (
        <View key={index}>
          <View style={styles.postHead}>
            <View style={styles.dpAndName}>
              <Image source={{ uri: post.image }} style={styles.dp} />
              <Text style={styles.username}>{post.user}</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/three-dots.png")}
                  style={styles.postMenu}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ width: "100%", height: 450 }}>
            <Image source={{ uri: post.post }} style={styles.post} />
          </View>
          <View style={styles.postFooter}>
            <View style={{ alignItems: "baseline", flexDirection: "row" }}>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/heart.png")}
                  style={styles.postReactMenu}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/chat.png")}
                  style={styles.postReactMenu}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/send.png")}
                  style={styles.postReactMenuSend}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Image
                source={require("../../assets/save.png")}
                style={styles.postReactMenuSave}
              />
            </TouchableOpacity>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: post.image }}
                style={styles.likedBySecond}
              ></Image>
              <Image
                source={{ uri: post.image }}
                style={styles.likedBy}
              ></Image>
              <Text style={styles.likes}>
                Liked by <Text style={{ fontWeight: "bold" }}>Martin</Text> and
                <Text style={{ fontWeight: "bold" }}> others</Text>
              </Text>
            </View>
            <Text style={styles.likes}>
              <Text style={{ fontWeight: "bold" }}>{post.user}</Text> Heyy!!
              This is a dummy description....
            </Text>
            {!!post.comments.length && (
              <>
                <TouchableOpacity>
                  <Text style={styles.comments}>
                    View {post.comments.length > 1 ? "all " : ""}
                    {post.comments.length}
                    <Text>
                      {post.comments.length > 1 ? " comments" : " comment"}
                    </Text>
                  </Text>
                </TouchableOpacity>

                {post.comments.length > 1 && (
                  <View style={styles.likes}>
                    {post.comments.map((c, index) => (
                      <>
                        <View key={index} style={{ flexDirection: "row" }}>
                          <Text style={{ fontWeight: "bold" }} key={index}>
                            {c.user}
                          </Text>
                          <Text> </Text>
                          <Text>{c.comment}</Text>
                        </View>
                      </>
                    ))}
                  </View>
                )}
              </>
            )}
            <Text style={styles.time}>4 hours ago</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    height: "100%",
    resizeMode: "cover",
  },
  postHead: {
    height: 50,
    // backgroundColor: "#f5f5f5",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  postFooter: {
    height: 50,
    // backgroundColor: "#f5f5f5",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  dp: {
    height: 30,
    width: 30,
    borderRadius: 50,
    margin: 6,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: "#d6095b",
  },
  dpAndName: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  username: {
    alignSelf: "center",
  },
  postMenu: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  postReactMenu: {
    width: 30,
    height: 30,
    marginLeft: 15,
  },
  postReactMenuSend: {
    width: 26,
    height: 26,
    marginLeft: 15,
  },
  postReactMenuSave: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  likes: {
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 3,
  },
  comments: {
    color: "grey",
    fontSize: 15,
    marginLeft: 10,
  },
  time: {
    color: "grey",
    fontSize: 13,
    marginLeft: 10,
  },
  likedBy: {
    width: 27,
    height: 27,
    borderRadius: 50,
    marginLeft: 10,
    borderColor: "white",
    borderWidth: 3,
    zIndex: 100,
    marginRight: 7,
  },
  likedBySecond: {
    width: 27,
    height: 27,
    borderRadius: 50,
    position: "absolute",
    borderColor: "white",
    borderWidth: 3,
    left: 25,
    // borderColor: "red",
    borderWidth: 2,
    zIndex: 0,
  },
});
export default Main;
