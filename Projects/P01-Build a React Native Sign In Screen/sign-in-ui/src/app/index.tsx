import React from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoHorizontal} />
        <View style={styles.logoVertical} />
      </View>

      {/* Heading */}
      <Text style={styles.heading}>Sign In</Text>

      <Text style={styles.subHeading}>
        Let’s experience the joy of telecare AI.
      </Text>

      {/* Email */}
      <Text style={styles.label}>Email Address</Text>

      <TextInput
        placeholder="elementary221b@gmail.com"
        style={styles.inputActive}
        placeholderTextColor="#666"
      />

      {/* Password */}
      <Text style={styles.label}>Password</Text>

      <TextInput
        placeholder="Enter your password..."
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#999"
      />

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In →</Text>
      </TouchableOpacity>

      {/* Social Buttons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>f</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>G</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>◎</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don’t have an account?
          <Text style={styles.link}> Sign Up.</Text>
        </Text>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const GREEN = "#8AD30F";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 24,
    justifyContent: "center",
  },

  logoContainer: {
    alignSelf: "center",
    marginBottom: 40,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  logoHorizontal: {
    position: "absolute",
    width: 40,
    height: 12,
    backgroundColor: GREEN,
    borderRadius: 10,
  },

  logoVertical: {
    position: "absolute",
    width: 12,
    height: 40,
    backgroundColor: GREEN,
    borderRadius: 10,
  },

  heading: {
    fontSize: 42,
    fontWeight: "700",
    textAlign: "center",
    color: "#333",
  },

  subHeading: {
    textAlign: "center",
    color: "#777",
    marginTop: 10,
    marginBottom: 40,
    fontSize: 16,
  },

  label: {
    fontWeight: "700",
    marginBottom: 10,
    color: "#333",
  },

  inputActive: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 20,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: "#B7E35D",
    fontSize: 16,
  },

  input: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 20,
    marginBottom: 30,
    fontSize: 16,
  },

  button: {
    backgroundColor: GREEN,
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 35,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 35,
  },

  socialButton: {
    width: 55,
    height: 55,
    backgroundColor: "#fff",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
  },

  socialText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
  },

  footer: {
    alignItems: "center",
  },

  footerText: {
    color: "#444",
    marginBottom: 10,
  },

  link: {
    color: GREEN,
    fontWeight: "700",
  },

  forgot: {
    color: GREEN,
    fontWeight: "600",
  },
});