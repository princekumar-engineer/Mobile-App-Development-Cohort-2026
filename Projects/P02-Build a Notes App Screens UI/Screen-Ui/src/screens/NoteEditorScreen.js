import React from "react";

import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";

import { darkTheme, lightTheme } from "../styles/colors";

export default function NoteEditorScreen() {
  const scheme = useColorScheme();

  const theme = scheme === "dark" ? darkTheme : lightTheme;

  const { width } = useWindowDimensions();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 40,
          }}
          showsVerticalScrollIndicator={false}
        >
          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1517842645767-c639042777db",
            }}
            style={styles.header}
            imageStyle={{
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
          >
            <Text style={styles.headerText}>Write Note</Text>
          </ImageBackground>

          <View
            style={{
              paddingHorizontal: width > 768 ? 40 : 20,
              marginTop: 30,
            }}
          >
            <TextInput
              placeholder="Note Title"
              placeholderTextColor={theme.subText}
              style={[
                styles.titleInput,
                {
                  backgroundColor: theme.input,
                  color: theme.text,
                },
              ]}
            />

            <TextInput
              placeholder="Write your note here..."
              placeholderTextColor={theme.subText}
              multiline
              textAlignVertical="top"
              style={[
                styles.contentInput,
                {
                  backgroundColor: theme.input,
                  color: theme.text,
                },
              ]}
            />

            <View style={styles.buttonRow}>
              <Pressable
                style={[
                  styles.button,
                  {
                    backgroundColor: "#EF4444",
                  },
                ]}
              >
                <Text style={styles.buttonText}>Back</Text>
              </Pressable>

              <Pressable
                style={[
                  styles.button,
                  {
                    backgroundColor: theme.button,
                  },
                ]}
              >
                <Text style={styles.buttonText}>Save</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 220,
    justifyContent: "flex-end",
    padding: 24,
  },

  headerText: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
  },

  titleInput: {
    height: 60,
    borderRadius: 16,
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 18,
  },

  contentInput: {
    minHeight: 300,
    borderRadius: 16,
    padding: 16,
    fontSize: 16,
    lineHeight: 24,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },

  button: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginHorizontal: 6,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
