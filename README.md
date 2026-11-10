# Elegant and Beautiful Wedding Invitation Website 💍

A _modern_ and _elegant_ wedding invitation website built with React. The application provides a beautiful digital invitation where guests can explore wedding details, view the event schedule, find the venue, and confirm their attendance.

## 🚀 Live Demo

**Live Demo**: [Web invitation URL](https://my-love-seven-delta.vercel.app/)

Repository: [GitHub repository URL](https://github.com/DaddySammyLabs/invitation-my-love)

## 📸 Preview

![Invitation Welcome](src/assets/images/my_love_invitation.png)

![Mobile Invitation Website](src/assets/images/my_love_inv_mobile.png)

## 📱 Mobile App

The project also includes a dedicated mobile version of the sneaker store.

The mobile app adapts the main shopping experience for mobile devices and provides users with convenient access to the catalog, favorites, shopping cart, orders, and other core features.

The mobile version was created to practice building a consistent user experience across different platforms while keeping the application architecture and business logic reusable.

---

## 🛠️ Tech Stack

### ⚛️ Core

- **React**
- **JavaScript (ES6+)**
- **Vite**
- **React Router**

### 🎨 Styling

- **Tailwind CSS**
- **CSS Modules**
- **Global CSS**

### 🧠 State & Logic

- **React Hooks**
- **Context API**
- **Custom Hooks**

### 📦 Libraries

- **@formkit/auto-animate**
- **lucide-react**
- **Reveal**

---

## 🧠 Architecture

```
src/
├── components/
│   ├── Navigation/
│   ├── LanguageSwitcher/
│   ├── Hero/
│   ├── Invitation/
│   ├── Timer/
│   ├── Location/
│   │   ├── Location.jsx
│   │   └── Location.module.css
│   │
│   └── Program/
│   │   ├── Program.jsx
│   │   └── Program.module.css
│   │
│   ├── Photos/
│   ├── DressCode/
│   ├── RSVP/
│   ├── Footer/
│   └── ComponentTitle/
│
├── hooks/
│   ├── useLanguage.js
│   ├── useNavigation.js
│   ├── useCountdown.js
│   ├── useScrollAnimation.js
│   ├── useMusic.js
│   └── useRSVP.js
│
├── context/
│   └── LanguageContext.jsx
│
├── locales/
│   ├── texts.js
│   ├── enTexts.js
│   ├── ruTexts.js
│   ├── uzTexts.js
│   └── krTexts.js
│
├── pages/
│   ├── Home.jsx
│   └── Home.module.css
│
├── App.jsx
├── main.jsx
└── index.css

Hero - invitation-block

src/
├── components/
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.module.css
│   │
│   └── Navigation/
│       ├── Navigation.jsx
│       └── Navigation.module.css
│
└── hooks/
    └── useNavigation.js

```

## 🌐 Multilingual Support

The application supports multiple languages.

Text content is stored separately in:

src/constants/texts.js

Language-related functionality is located in the providers directory.

This approach keeps text content separated from UI components and makes adding additional languages easier.

## 🧭 Routing

The application uses React Router for client-side navigation.

### 💻 Installation

Clone the repository:

git clone https://github.com/DaddySammyLabs/invitation-my-love.git

Navigate to the project:

`cd invitation-wedding`

Install dependencies:

`npm install`

Start the development server:

`npm run dev`

Build the project for production:

`npm run build`

## React Compiler

## Expanding the ESLint configuration
