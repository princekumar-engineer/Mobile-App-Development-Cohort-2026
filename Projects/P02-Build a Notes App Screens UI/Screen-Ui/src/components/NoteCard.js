import React from "react";

import { Pressable, StyleSheet, Text } from "react-native";

export default function NoteCard({ note, theme }) {
  return (
    <Pressable
      style={StyleSheet.compose(styles.card, {
        backgroundColor: theme?.card,
      })}
    >
      <Text style={[styles.title, { color: theme?.text }]}>{note.title}</Text>

      <Text
        numberOfLines={2}
        style={[
          styles.content,
          {
            color: theme?.subText,
          },
        ]}
      >
        {note.content}
      </Text>

      <Text
        style={[
          styles.date,
          {
            color: theme?.subText,
          },
        ]}
      >
        {note.date}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },

  content: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 12,
  },

  date: {
    fontSize: 12,
  },
});
