import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { TextInput } from "react-native";
import { Button } from "react-native";

const PLACEHOLDER_IMG = "https://via.placeholder.com/400x400.png";
const UploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the character limit"),
});

const FormikPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  const imageUrlvar = thumbnailUrl;
  return (
    <>
      <Formik
        initialValues={{ caption: "", imageUrl: "" }}
        onSubmit={(values) => {
          console.log(values);
          console.log("Your post was shared successfully");
          navigation.goBack();
        }}
        validationSchema={UploadPostSchema}
        validateOnMount={true}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
          touched
        }) => (
          <>
            <View
              style={{
                margin: 20,
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
                }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                }}
              />
              <View style={{ flex: 1, marginLeft: 20 }}>
                <TextInput
                  style={{ fontSize: 20 }}
                  placeholder="Write a Caption"
                  placeholderTextColor="black"
                  multiline={true}
                  onChangeText={handleChange("caption")}
                  onBlur={handleBlur("caption")}
                  value={values.caption}
                />
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("NewPostImageDisplayScreen", {
                    url: thumbnailUrl,
                  })
                }
              >
                <Image
                  source={{
                    uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG,
                  }}
                  style={{ height: 80, width: 80 }}
                />
              </TouchableOpacity>
            </View>
            <TextInput
              onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
              style={{
                fontSize: 18,
                marginLeft: 20,
                marginBottom: 20,
                marginTop: 20,
              }}
              placeholder="Enter Image URL"
              placeholderTextColor="black"
              onChangeText={handleChange("imageUrl")}
              onBlur={handleBlur("imageUrl")}
              value={values.imageUrl}
            />
            {errors.imageUrl && touched.imageUrl && (
              <Text style={{ fontSize: 12, color: "red", marginLeft: 20 }}>
                {errors.imageUrl}
              </Text>
            )}
            <View style={{ width: 70, alignSelf: "center", marginTop: 20 }}>
              <Button
                onPress={handleSubmit}
                title="SHARE"
                disabled={!isValid}
              />
            </View>
          </>
        )}
      </Formik>
    </>
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 10 },
});
export default FormikPostUploader;
