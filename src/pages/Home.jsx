import AnimatedBackground from '../components/AnimatedBackground';
import Links from '../components/Links';
import Popup from '../components/Popup';
import ProfilePicture from '../components/ProfilePicture';
import UserInfo from '../components/UserInfo';
import '../styles/base.css';

// Vite Boilerplate
import '../App.css'

// Import the functions you need from the Firebase SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "../config/firebaseConfig.js"; // NO CURLY BRACES {} NEEDED WHEN IMPORTING A DEFAULT EXPORT
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function Home() {
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

export default Home;
