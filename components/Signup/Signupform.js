import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { firebase, db } from "../../firebase";

const Signupform = ({ navigation }) => {
  const [pass, setPass] = useState("");
  const getRandomProfilePicture = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data.results[0].picture.large;
  };
  const SignUpFormSchema = Yup.object().shape({
    username: Yup.string().required(
      "A username is required・ユーザーネームが必要です。"
    ),
    phoneNumber: Yup.string()
      .required()
      .matches(
        new RegExp("[+81|0][6-9][0-9]{9}"),
        "Invalid phonenumber format・電話番号の形式が無効です"
      ),
    email: Yup.string()
      .email()
      .required("An email is required・メールアドレスが必要です。"),
    password: Yup.string()
      .required("Password is a required field・パスワードが必要です。")
      .min(
        8,
        "Your password has to have atleast 8 characters・パスワードは8文字以上である必要があります"
      ),
    reEnterPassword: Yup.string()
      .required("Re Enter Password is a required field・パスワードが必要です。")
      .matches(
        pass,
        "Re Enter Password does not match the password entered・パスワードが入力したパスワードと一致しません"
      ),
  });

  const onSignup = async (email, password, username, phoneNumber) => {
    try {
      const authUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      db.collection("users").add({
        owner_uid: authUser.user.uid,
        username: username,
        email: authUser.user.email,
        phoneNumber: phoneNumber,
        profile_picture: await getRandomProfilePicture(),
      });
      navigation.push("LoginScreen");
      console.log("success");
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: "",
          password: "",
          phoneNumber: "",
          username: "",
        }}
        onSubmit={(values) => {
          onSignup(
            values.email,
            values.password,
            values.username,
            values.phoneNumber
          );
        }}
        validationSchema={SignUpFormSchema}
        validateOnMount={true}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <>
            {errors.username && touched.username && (
              <Text style={{ fontSize: 12, color: "red", marginLeft: 20 }}>
                {errors.username}
              </Text>
            )}
            <View style={styles.loginFields}>
              <TextInput
                style={{ padding: 10 }}
                placeholder="Username/ユーザーネーム"
                placeholderTextColor="#c7c7c7"
                autoCapitalize="none"
                textContentType="username"
                autoFocus={true}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
            </View>
            {errors.email && touched.email && (
              <Text style={{ fontSize: 12, color: "red", marginLeft: 20 }}>
                {errors.email}
              </Text>
            )}
            <View style={styles.loginFields}>
              <TextInput
                style={{ padding: 10 }}
                placeholder="Email/メール"
                placeholderTextColor="#c7c7c7"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            {errors.phoneNumber && touched.phoneNumber && (
              <Text style={{ fontSize: 12, color: "red", marginLeft: 20 }}>
                {errors.phoneNumber}
              </Text>
            )}
            <View style={styles.loginFields}>
              <TextInput
                style={{ padding: 10 }}
                placeholder="Phone number/電話番号"
                placeholderTextColor="#c7c7c7"
                autoCapitalize="none"
                keyboardType="number-pad"
                textContentType="telephoneNumber"
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                value={values.phoneNumber}
              />
            </View>
            {errors.password && touched.password && (
              <Text style={{ fontSize: 12, color: "red", marginLeft: 20 }}>
                {errors.password}
              </Text>
            )}
            <View style={styles.loginFields}>
              <TextInput
                onChange={(e) => setPass(e.nativeEvent.text)}
                style={{ padding: 10 }}
                placeholder="Password/パスワード"
                placeholderTextColor="#c7c7c7"
                autoCapitalize="none"
                secureTextEntry={true}
                autoCorrect={false}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            {errors.reEnterPassword && touched.reEnterPassword && (
              <Text style={{ fontSize: 12, color: "red", marginLeft: 20 }}>
                {errors.reEnterPassword}
              </Text>
            )}
            <View style={styles.loginFields}>
              <TextInput
                style={{ padding: 10 }}
                placeholder="Re enter Password/パスワードもう一度"
                placeholderTextColor="#c7c7c7"
                autoCapitalize="none"
                secureTextEntry={true}
                autoCorrect={false}
                textContentType="password"
                onChangeText={handleChange("reEnterPassword")}
                onBlur={handleBlur("reEnterPassword")}
                value={values.reEnterPassword}
              />
            </View>
            <View>
              <Pressable
                titleSize={20}
                style={styles.button(isValid)}
                onPress={handleSubmit}
              >
                <Text
                  style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}
                >
                  Sign Up
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                alignItems: "center",
                marginTop: 30,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text>Already Have an Account?</Text>
              <TouchableOpacity onPress={() => navigation.push("LoginScreen")}>
                <Text style={{ color: "#6BB0F5" }}> Login Here</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  loginFields: {
    borderWidth: 1,
    borderColor: "#f5f5f5",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
    marginBottom: 20,
    backgroundColor: "#f2f2f2",
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
    marginTop: 20,
  }),
});
export default Signupform;
