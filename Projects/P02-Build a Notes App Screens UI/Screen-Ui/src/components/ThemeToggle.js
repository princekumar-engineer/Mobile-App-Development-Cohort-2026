import React from "react";

import { StyleSheet, Switch, Text, View } from "react-native";

export default function ThemeToggle({ darkMode, setDarkMode, theme }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: theme.text }]}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </Text>

      <Switch value={darkMode} onValueChange={setDarkMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
