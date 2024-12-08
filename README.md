# Multi-User Chat Application

## Table of Contents

- [Introduction](#introduction)

- [Features](#features)

- [Tech Stack](#tech-stack)

- [Installation](#installation)

  - [Prerequisites](#prerequisites)

  - [Environment Setup](#environment-setup)

  - [Installing Dependencies](#installing-dependencies)

- [Usage](#usage)

- [Project Structure](#project-structure)

- [API Endpoints](#api-endpoints)

  - [Authentication Endpoints](#authentication-endpoints)

  - [Chat Endpoints](#chat-endpoints)

- [Components](#components)

- [Hooks](#hooks)

- [Testing](#testing)

- [Logging and Monitoring](#logging-and-monitoring)

- [Security](#security)

- [Performance Optimization](#performance-optimization)

- [Deployment](#deployment)

  - [Manual Deployment](#manual-deployment)

  - [Automatic Deployment](#automatic-deployment)

  - [Continuous Integration/Continuous Deployment (CI/CD)](#continuous-integrationcontinuous-deployment-cicd)

- [Code Quality](#code-quality)

- [Contribution Guidelines](#contribution-guidelines)

- [FAQ](#faq)

- [License](#license)

- [Acknowledgements](#acknowledgements)

## Introduction
The Multi-User Chat Application is a real-time messaging platform that enables seamless communication between multiple users. This application ensures a smooth, interactive, and responsive chat experience.

## Features
- **Real-Time Messaging:** Instant communication between users.

- **User Authentication:** Secure sign-up and sign-in.

- **User Presence:** Show online/offline status of users.

- **Message History:** Store and retrieve chat history.

- **Emoji Support:** Add emojis to enhance user interactions.

## Tech Stack

- **Frontend:** [ReactJS](https://reactjs.org/)

- **Backend:** [Firebase Functions](https://firebase.google.com/docs/functions)

- **Database:** [Firebase Firestore](https://firebase.google.com/docs/firestore)

- **Authentication:** [Firebase Authentication](https://firebase.google.com/docs/auth)

- **Storage:** [Firebase Storage](https://firebase.google.com/docs/storage)


## Installation

### Prerequisites

- [Node.js ](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/)  (v6.x or higher) or [yarn](https://yarnpkg.com/) (v1.22.x or higher)
- [MongoDB](https://www.mongodb.com/)  (v4.x or higher)


### Environment Setup
#### 1. Clone the repository:

```bash
git clone https://github.com/s-satyajit/multi-user-chatApp.git
cd multi-user-chatApp
```

### Installing Dependencies

#### 2. Install dependencies:

```bash
npm install
```
#### 3. Configure Firebase:

- Create a Firebase project in the Firebase Console.

- Obtain your Firebase configuration details from the project settings.

- Create a ```.env``` file in the root directory and add your Firebase configuration.

```env
REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
REACT_APP_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
REACT_APP_FIREBASE_PROJECT_ID=<your-firebase-project-id>
REACT_APP_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
REACT_APP_FIREBASE_APP_ID=<your-firebase-app-id>
```
---
## Usage
Once the setup is complete, you can use the following features:

#### **1. Sign Up/In:**

- Users can sign up and sign in using Firebase Authentication.

#### 2. **Messaging:**

- Start new conversations and send messages in real-time using Firebase Firestore.

#### 3. **User Presence:**

View the online/offline status of other users.

## Project Structure
Here's an overview of the project's structure:

```
📦 Project Root
├── .gitignore                 # Git ignore rules
├── README.md                  # Project documentation
├── eslint.config.js           # ESLint configuration
├── index.html                 # Main HTML file
├── package-lock.json          # Lockfile for npm dependencies
├── package.json               # Project metadata and dependencies
├── public/                    # Public assets
│   ├── arrowDown.png          # Arrow down icon
│   ├── arrowUp.png            # Arrow up icon
│   ├── avatar.png             # User avatar
│   ├── bg.jpg                 # Background image
│   ├── camera.png             # Camera icon
│   ├── download.png           # Download icon
│   ├── edit.png               # Edit icon
│   ├── emoji.png              # Emoji icon
│   ├── favicon.png            # Favicon
│   ├── img.png                # Generic image
│   ├── info.png               # Info icon
│   ├── mic.png                # Microphone icon
│   ├── minus.png              # Minus icon
│   ├── more.png               # More options icon
│   ├── phone.png              # Phone icon
│   ├── plus.png               # Plus icon
│   ├── search.png             # Search icon
│   ├── theme.png              # Theme icon
│   ├── video.png              # Video icon
│   └── vite.svg               # Vite logo
├── src/                       # Source code
│   ├── App.jsx                # Main React component
│   ├── assets/                # Asset files
│   │   └── react.svg          # React logo
│   ├── components/            # React components
│   │   ├── chat/              # Chat feature components
│   │   │   ├── Chat.jsx       # Chat component logic
│   │   │   └── chat.css       # Chat component styles
│   │   ├── detail/            # Detail view components
│   │   │   ├── Detail.jsx     # Detail component logic
│   │   │   └── detail.css     # Detail component styles
│   │   ├── list/              # List view components
│   │   │   └── List.jsx       # List component logic
│   │   ├── chatList/          # Chat list components
│   │   │   ├── ChatList.jsx   # Chat list component logic
│   │   │   └── chatList.css   # Chat list component styles
│   │   ├── addUser/           # Add user components
│   │   │   ├── addUser.jsx    # Add user component logic
│   │   │   └── addUser.css    # Add user component styles
│   │   ├── userInfo/          # User information components
│   │   │   ├── Userinfo.jsx   # User information component logic
│   │   │   └── userInfo.css   # User information component styles
│   │   ├── login/             # Login components
│   │   │   ├── Login.jsx      # Login component logic
│   │   │   └── login.css      # Login component styles
│   │   └── notification/      # Notification components
│   │       └── Notification.jsx # Notification component logic
│   ├── index.css              # Global styles
│   ├── lib/                   # Utility libraries
│   │   ├── UserStore.js       # User state management
│   │   ├── chatStore.js       # Chat state management
│   │   ├── firebase.js        # Firebase configuration
│   │   └── upload.js          # File upload utility
│   ├── main.jsx               # Application entry 
└───────vite.config.js         # Vite configuration
```

---

## API Endpoints
### Authentication Endpoints
#### Sign Up
Registers a new user.

## API Endpoints

### Authentication Endpoints

#### **Sign Up**
Registers a new user using Firebase Authentication.

```javascript
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const signUp = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up successfully
    })
    .catch((error) => {
      // Handle errors here
    });
};
```

#### **Sign In**
Authenticates a user using Firebase Authentication.

```javascript
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const signIn = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
    })
    .catch((error) => {
      // Handle errors here
    });
};
```

### Chat Endpoints

#### **Get Messages**
Fetches message history for a chat from Firebase Firestore.

```javascript
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore"; 

const getMessages = async (chatId) => {
  const db = getFirestore();
  const q = query(collection(db, "messages"), where("chatId", "==", chatId));
  const querySnapshot = await getDocs(q);
  const messages = [];
  querySnapshot.forEach((doc) => {
    messages.push(doc.data());
  });
  return messages;
};
```

#### **Send Message**
Adds a new message to the chat in Firebase Firestore.

```javascript
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

const sendMessage = async (chatId, text, userId) => {
  const db = getFirestore();
  await addDoc(collection(db, "messages"), {
    chatId,
    text,
    sender: userId,
    timestamp: new Date()
  });
};
```

---

## Components

### **ChatBox**
Displays chat messages and a form to send new messages.

```javascript
import React, { useState, useEffect } from 'react';
import useSocket from '../hooks/useSocket';

const ChatBox = ({ chatId }) => {
    const [messages, setMessages] = useState([]);
    const { socket, sendMessage } = useSocket(chatId);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off('message');
        };
    }, [socket]);

    const handleSend = (e) => {
        e.preventDefault();
        const text = e.target.elements.message.value;
        sendMessage({ chatId, text });
        e.target.reset();
    };

    return (
        <div className="chat-box">
            {messages.map((msg, index) => (
                <div key={index} className="message">{msg.text}</div>
            ))}
            <form onSubmit={handleSend}>
                <input type="text" name="message" placeholder="Type a message" required />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatBox;
```

---

## Hooks

### **useSocket**
Custom hook for managing socket connections.

```javascript
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const useSocket = (chatId) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io('http://localhost:5000', { query: { chatId } });
        setSocket(newSocket);

        return () => newSocket.close();
    }, [chatId]);

    const sendMessage = (message) => {
        if (socket) {
            socket.emit('send_message', message);
        }
    };

    return { socket, sendMessage };
};

export default useSocket;
```

### **useNotifications**
Custom hook for managing notifications.

```javascript
import { useState, useEffect } from 'react';

const useNotifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Logic to fetch and subscribe to notifications
    }, []);

    const addNotification = (notification) => {
        setNotifications((prevNotifications) => [...prevNotifications, notification]);
    };

    return { notifications, addNotification };
};

export default useNotifications;
```

---

## Testing

To ensure the application functions correctly, run the following command to execute tests:

```bash
npm test
```

---

## Logging and Monitoring

- Use Firebase Analytics for monitoring.
- Use Firebase Crashlytics for error tracking.

---

## Security

1. Use HTTPS to encrypt data in transit.
2. Store passwords securely using Firebase Authentication.
3. Validate inputs to prevent XSS and other attacks.
4. Regularly update dependencies.

---

## Performance Optimization

- Use Firestore's offline capabilities.
- Implement lazy loading for components.
- Optimize Firestore queries.
- Use Firebase Performance Monitoring.

---

## Deployment

### **Manual Deployment**
1. Build the project:
   ```bash
   npm run build
   ```

2. Initialize Firebase in your project:
   ```bash
   firebase init
   ```

3. Deploy the build directory:
   ```bash
   firebase deploy
   ```

### **Automatic Deployment**
Set up CI/CD pipelines using GitHub Actions.

Example `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Firebase

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Deploy to Firebase
        run: firebase deploy --token ${{ secrets.FIREBASE_TOKEN }}
```

---

## Code Quality

- Use linters like ESLint.
- Write unit and integration tests.
- Use tools like Prettier for code formatting.
- Conduct code reviews.

---

## Contribution Guidelines

1. **Fork the repository.**
2. **Clone your fork:**
   ```bash
   git clone https://github.com/your-username/multi-user-chatApp.git
   cd multi-user-chatApp
   ```
3. **Create a new branch:**
   ```bash
   git checkout -b feature-name
   ```
4. **Make your changes and commit:**
   ```bash
   git commit -m "Add feature-name"
   ```
5. **Push your branch:**
   ```bash
   git push origin feature-name
   ```
6. **Create a pull request.**

---

## FAQ

**Q: How do I report a bug?**  
A: Open an issue in the GitHub repository with a detailed description.

**Q: Can I use this project for my own purposes?**  
A: Yes, this project is open-source and licensed under the MIT License.

---

## License

This project is licensed under the [MIT License](LICENSE).

---
