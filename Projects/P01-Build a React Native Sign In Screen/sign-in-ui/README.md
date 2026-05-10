# React Native Sign In UI

A clean and responsive mobile authentication screen built using **React Native** and **Expo SDK 55**.

This project recreates a modern Sign In UI inspired by a Dribbble design using only core React Native components.

---

# Preview

## App Screenshot

<p align="center">
  <img src="./assets/screenshot.png" width="300" />
</p>

---

# Features

- Responsive mobile UI
- Modern Sign In screen
- Email input field
- Password input field
- Sign In button
- Social login buttons
- Forgot password action
- Sign Up action
- Clean spacing and typography
- Built using only core React Native components

---

# Tech Stack

- React Native
- Expo SDK 55
- JavaScript
- React Native Safe Area Context

---

# Design Reference

## Design Reference

[Dribbble UI Design](https://dribbble.com/shots/24783022-osler-AI-Telehealth-Telemedicine-App-Sign-In-Sign-Up-UI)

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

---

## 2. Open Project Folder

```bash
cd react-native-signin-ui
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Start Expo Development Server

```bash
npx expo start
```

---

## 5. Run on Mobile Device

- Install Expo Go from Play Store/App Store
- Scan the QR code from Expo

---

# Project Structure

```txt
sign-in-ui
│
├── assets
│   └── screenshot.png
│
├── src
│   └── app
│       ├── _layout.tsx
│       └── index.tsx
│
├── .gitignore
├── app.json
├── expo-env.d.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

---

# Folder & File Explanation

## `.expo`

Contains Expo development server files and cache.

---

## `.vscode`

VS Code editor settings and configuration.

---

## `assets`

Stores static files like:

- screenshots
- images
- icons
- fonts

Example:

```txt
assets/screenshot.png
```

---

## `src/app`

Main application folder.

### `_layout.tsx`

Defines the root layout/navigation structure.

### `index.tsx`

Main Sign In screen UI.

---

## `.gitignore`

Specifies files/folders Git should ignore.

Example:

- node_modules
- Expo cache
- build files

---

## `app.json`

Expo application configuration.

Contains:

- app name
- app icon
- splash screen
- Expo settings

---

## `expo-env.d.ts`

Expo TypeScript environment definitions.

---

## `package.json`

Project dependencies and scripts.

---

## `README.md`

Project documentation.

Contains:

- project description
- screenshot
- setup instructions

---

## `tsconfig.json`

TypeScript configuration settings.

---

---

# Packages Used

## React Native Safe Area Context

```bash
npx expo install react-native-safe-area-context
```

Used for proper safe area handling on modern devices.

---

# Learning Outcomes

This project helped practice:

- React Native layout structuring
- Flexbox alignment
- Mobile responsive UI design
- Component styling
- Typography and spacing
- Expo workflow
- React Native core components

---

# Assignment Requirements Covered

- React Native with Expo
- Core React Native components only
- Responsive mobile layout
- Sign In screen UI
- Social login section
- Forgot password action
- Sign Up action
- Proper spacing and alignment

---

# Author

PRINCE KUMAR
---

# License

This project is created for educational purposes.
---