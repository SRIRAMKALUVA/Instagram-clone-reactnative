import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import firebase from "../../firebase";
import validator from "email-validator";

const LoginForm = ({ navigation }) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("An email is required・メールアドレスが必要です。"),
    password: Yup.string()
      .required("Password is a required field・パスワードが必要です。")
      .min(
        8,
        "Your password has to have atleast 8 characters・パスワードは8文字以上である必要があります"
      ),
  });

  const onLogin = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.push("HomeScreen");
      console.log("success");
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          onLogin(values.email, values.password);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View style={styles.loginFields}>
              <TextInput
                placeholder="Email/メール"
                placeholderTextColor="#c7c7c7"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            {errors.email && (
              <Text style={{ fontSize: 12, color: "red", marginLeft: 20 }}>
                {errors.email}
              </Text>
            )}
            <View style={styles.loginFields}>
              <TextInput
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
            {errors.password && (
              <Text style={{ fontSize: 12, color: "red", marginLeft: 20 }}>
                {errors.password}
              </Text>
            )}
            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
              <TouchableOpacity>
                <Text style={{ color: "#6BB0F5" }}>Forgot Password?</Text>
              </TouchableOpacity>
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
                  Log In
                </Text>
              </Pressable>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  loginFields: {
    borderWidth: 1,
    borderColor: "#f5f5f5",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
    marginBottom: 12,
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  }),
});
export default LoginForm;
