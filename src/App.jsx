// import { useState } from 'react'
import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Links from './components/Links';
import Popup from './components/Popup';
import ProfilePicture from './components/ProfilePicture';
import UserInfo from './components/UserInfo';
import './styles/base.css';

// Vite Boilerplate
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import the functions you need from the Firebase SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./config/firebaseConfig.js"; // NO CURLY BRACES {} NEEDED WHEN IMPORTING A DEFAULT EXPORT
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <>
      <AnimatedBackground />
      <ProfilePicture image="./assets/midas.jpeg" />
      <UserInfo username="MiDAS : )" hashtag="#helloworld -> :)" />
      <Links />
      <Popup 
        image="./assets/midas.jpeg" 
        quote="But... the sensation that I've lost something lingers for a long time after I wake up." 
      />
    </>
  );
}

export default App;

/*
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App */