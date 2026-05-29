import React, { useState } from "react";

import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  useWindowDimensions,
} from "react-native";

import NoteCard from "../components/NoteCard";

import ThemeToggle from "../components/ThemeToggle";

import { darkTheme, lightTheme } from "../styles/colors";

export default function NotesListScreen() {
  const scheme = useColorScheme();

  const [darkMode, setDarkMode] = useState(scheme === "dark");

  const [search, setSearch] = useState("");

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [notes, setNotes] = useState([]);

  const { width } = useWindowDimensions();

  const theme = darkMode ? darkTheme : lightTheme;

  const addNote = () => {
    if (!title || !content) return;

    const newNote = {
      id: Date.now().toString(),
      title,
      content,
      date: new Date().toDateString(),
    };

    setNotes([newNote, ...notes]);

    setTitle("");
    setContent("");
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,

          paddingHorizontal: width > 768 ? 40 : 20,
        },
      ]}
    >
      <Text
        style={[
          styles.heading,
          {
            color: theme.text,
          },
        ]}
      >
        My Notes
      </Text>

      <ThemeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        theme={theme}
      />

      <TextInput
        placeholder="Search notes..."
        placeholderTextColor={theme.subText}
        value={search}
        onChangeText={setSearch}
        style={[
          styles.searchInput,
          {
            backgroundColor: theme.input,
            color: theme.text,
          },
        ]}
      />

      <TextInput
        placeholder="Note title"
        placeholderTextColor={theme.subText}
        value={title}
        onChangeText={setTitle}
        style={[
          styles.searchInput,
          {
            backgroundColor: theme.input,
            color: theme.text,
          },
        ]}
      />

      <TextInput
        placeholder="Write note..."
        placeholderTextColor={theme.subText}
        value={content}
        onChangeText={setContent}
        multiline
        style={[
          styles.noteInput,
          {
            backgroundColor: theme.input,
            color: theme.text,
          },
        ]}
      />

      <Pressable
        onPress={addNote}
        style={[
          styles.addButton,
          {
            backgroundColor: theme.button,
          },
        ]}
      >
        <Text style={styles.addButtonText}>Add Note</Text>
      </Pressable>

      <FlatList
        data={filteredNotes}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <NoteCard note={item} theme={theme} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },

  heading: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 20,
  },

  searchInput: {
    height: 55,
    borderRadius: 14,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },

  noteInput: {
    minHeight: 100,
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
  },

  addButton: {
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 20,
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
