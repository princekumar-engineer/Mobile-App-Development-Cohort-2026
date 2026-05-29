# React Native Notes App — Complete Simple Notes

# 1. Project Structure

```text
app/
   _layout.tsx
   index.tsx

components/
   NoteCard.js
   ThemeToggle.js

screens/
   NotesListScreen.js
   NoteEditorScreen.js

styles/
   colors.js

data/
   notes.js
```

Think:

```text
app → navigation/start
screens → full pages
components → reusable UI
styles → colors/themes
data → sample data
```

---

# 2. App Flow (Big Picture)

Whole app works like this:

```text
App starts
    ↓
_layout.tsx loads navigation
    ↓
index.tsx opens first screen
    ↓
Screen loads
    ↓
Screen uses components
    ↓
User interacts
    ↓
State updates
    ↓
UI rerenders
```

React works using:

```text
State changes
    ↓
UI updates automatically
```

---

# 3. `_layout.tsx`

Code:

```jsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack />;
}
```

Purpose:

Creates navigation system.

---

### Stack Navigation

Works like phone screens:

```text
Screen A
   ↓
Screen B
   ↓
Back
```

Flow:

```text
App
 ↓
Stack navigation
 ↓
Screens
```

Without `_layout`:

No routing.

---

# 4. `index.tsx`

Code:

```jsx
return <NoteEditorScreen />;
```

or

```jsx
return <NotesListScreen />;
```

Purpose:

Home screen.

Expo Router loads:

```text
app/index.tsx
```

first.

Flow:

```text
index.tsx
    ↓
Chooses screen
    ↓
Screen shown
```

---

# 5. Components

Components are:

> Reusable UI functions.

Example:

```jsx
<NoteCard />
```

instead of repeating code.

---

Architecture:

```text
Screen
   ↓
Components
```

---

# 6. `NoteCard.js`

Purpose:

Shows one note.

Receives props:

```jsx
note;
theme;
```

Props mean:

> Data from parent.

Example:

```jsx
<NoteCard note={item} theme={theme} />
```

---

Card shows:

```text
Title
Content
Date
```

Uses:

### Pressable

Touchable container.

Like button/card.

---

### Text

Displays text.

---

### Dynamic Theme

Uses:

```jsx
theme.text;
theme.card;
```

So colors change.

---

Flow:

```text
Parent
   ↓
note + theme
   ↓
NoteCard
   ↓
Card UI
```

---

# 7. `ThemeToggle.js`

Purpose:

Dark/Light mode switch.

Props:

```jsx
darkMode;
setDarkMode;
theme;
```

---

Switch:

```jsx
<Switch />
```

Controls:

```text
ON / OFF
```

---

Important:

```jsx
onValueChange = { setDarkMode };
```

When user toggles:

```text
Switch
   ↓
setDarkMode()
   ↓
State updates
   ↓
UI rerenders
```

---

Text uses ternary:

```jsx
darkMode ? "Dark Mode" : "Light Mode";
```

Meaning:

If true:

Dark Mode.

Else:

Light Mode.

---

# 8. `notes.js`

Purpose:

Sample note data.

Code:

```jsx
export const notes = [];
```

Array of objects.

---

Each note:

```jsx
{
  (id, title, content, date);
}
```

---

Why id?

React lists need:

Unique key.

Example:

```jsx
key={note.id}
```

Helps React track:

```text
Added
Removed
Updated
```

---

Flow:

```text
notes array
     ↓
Screen
     ↓
NoteCard
```

---

# 9. `colors.js`

Purpose:

Theme system.

Contains:

```jsx
lightTheme;
darkTheme;
```

Each theme:

```jsx
background;
text;
card;
button;
input;
```

---

Why use themes?

Instead of:

Bad:

```jsx
color: "#000";
```

everywhere.

Use:

```jsx
theme.text;
```

Much easier.

---

Theme flow:

```text
darkMode
    ↓
Choose theme
    ↓
Pass theme
    ↓
UI colors change
```

---

# 10. React State (`useState`)

Most important React concept.

Syntax:

```jsx
const [value, setValue] = useState(initialValue);
```

Example:

```jsx
const [search, setSearch] = useState("");
```

Meaning:

```text
search → current value
setSearch → update function
```

---

When setter runs:

```jsx
setSearch("abc");
```

React:

```text
updates state
      ↓
rerenders UI
```

This is React's core.

---

# 11. `NotesListScreen.js`

This is main logic screen.

Handles:

```text
Theme
Search
Add note
List rendering
State
```

---

# State in NotesList

You have:

### Dark Mode

```jsx
darkMode;
```

Theme state.

---

### Search

```jsx
search;
```

Search text.

---

### Title

```jsx
title;
```

Note title.

---

### Content

```jsx
content;
```

Note body.

---

### Notes

```jsx
notes;
```

List of notes.

---

Flow:

```text
User types
     ↓
State updates
     ↓
UI rerenders
```

---

# `useColorScheme()`

Reads phone theme.

Returns:

```text
dark
or
light
```

Used for:

Initial dark mode.

---

Flow:

```text
Phone theme
     ↓
useColorScheme
     ↓
darkMode
```

---

# `useWindowDimensions()`

Gets screen width.

Example:

Phone:

```text
390
```

Tablet:

```text
900
```

Used for:

Responsive layout.

Example:

```jsx
width > 768;
```

---

Flow:

```text
Screen size
    ↓
Padding changes
```

---

# `addNote()`

Most important function.

Runs when:

```text
Add Note button
```

pressed.

---

Step 1

Validation:

```jsx
if (!title || !content) return;
```

Empty fields:

Stop.

---

Step 2

Create object:

```jsx
newNote;
```

Uses:

```jsx
Date.now();
```

for unique id.

---

Step 3

Update state:

```jsx
setNotes([newNote, ...notes]);
```

Spread operator:

```jsx
...notes
```

means:

Copy old items.

---

Example:

Old:

```text
A B
```

New:

```text
New A B
```

---

Step 4

Clear input:

```jsx
setTitle("");
setContent("");
```

---

Flow:

```text
Button tap
    ↓
addNote()
    ↓
Create note
    ↓
setNotes
    ↓
rerender
    ↓
FlatList updates
```

---

# Search Logic

Code:

```jsx
notes.filter();
```

Creates:

```jsx
filteredNotes;
```

Searches:

```jsx
note.title;
```

Uses:

```jsx
includes();
```

and:

```jsx
toLowerCase();
```

for case-insensitive search.

---

Example:

Search:

```text
shop
```

Matches:

```text
Shopping
```

---

Flow:

```text
Search input
     ↓
setSearch
     ↓
filter()
     ↓
filteredNotes
```

---

# TextInput

Input field.

Controlled input:

```jsx
value;
onChangeText;
```

Example:

```jsx
value = { title };
onChangeText = { setTitle };
```

Meaning:

React controls input.

Typing:

```text
Meeting
```

updates state.

---

Flow:

```text
Type
 ↓
setState
 ↓
rerender
```

---

# Pressable

Touchable element.

Used for:

Buttons/cards.

Example:

```jsx
onPress = { addNote };
```

Tap:

Runs function.

---

# FlatList

Very important.

Purpose:

Render list efficiently.

Uses:

```jsx
data;
renderItem;
keyExtractor;
```

---

### data

List:

```jsx
filteredNotes;
```

---

### keyExtractor

Unique key:

```jsx
item.id;
```

---

### renderItem

How each item appears.

Code:

```jsx
<NoteCard />
```

---

Flow:

```text
FlatList
     ↓
Loop notes
     ↓
renderItem
     ↓
NoteCard
```

---

Full FlatList flow:

```text
notes
  ↓
filter
  ↓
filteredNotes
  ↓
FlatList
  ↓
NoteCard
  ↓
UI
```

---

# 12. `NoteEditorScreen.js`

Purpose:

Editor page UI.

Mostly design.

Not much logic.

---

New Components:

---

# `ImageBackground`

Background image with content.

Example:

```text
Image
  +
Text on top
```

Used for header.

---

Flow:

```text
Image
 ↓
Header
 ↓
Text overlay
```

---

# `KeyboardAvoidingView`

Important mobile feature.

When keyboard opens:

Without:

```text
Keyboard hides input
```

With:

Layout adjusts.

---

Uses:

```jsx
Platform.OS;
```

to behave differently on:

```text
iOS
Android
```

---

Flow:

```text
Keyboard opens
     ↓
View adjusts
```

---

# `ScrollView`

Makes screen scroll.

Needed for long content.

Without:

Overflow.

---

Flow:

```text
Content larger
     ↓
Scroll
```

---

# Important Difference

NotesList:

Controlled inputs.

Example:

```jsx
value;
onChangeText;
```

React stores input.

---

Editor:

No state.

Example:

```jsx
<TextInput />
```

without:

```jsx
value;
onChangeText;
```

Meaning:

Uncontrolled input.

Text exists only visually.

Not saved.

---

# Save / Back Buttons

Currently:

No:

```jsx
onPress;
```

So:

Visual only.

Tap:

Nothing.

---

# Final Architecture

Whole app:

```text
App
 ↓
_layout
 ↓
Stack
 ↓
index
 ↓
Screen
 ↓
Components
 ↓
User Interaction
 ↓
State Update
 ↓
Rerender
 ↓
Updated UI
```

---

# React Core Rules (Most Important)

Remember these 5:

### 1

Components = reusable UI

---

### 2

Props = data from parent

---

### 3

State = changing data

---

### 4

setState → rerender

---

### 5

React UI updates from state

```text
State changes
      ↓
UI changes
```

That is the entire React flow in simple words.
