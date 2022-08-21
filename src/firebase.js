import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBv4A67vxHfJ0Zn6sPh7mevI_FE8h0aAts",
  authDomain: "clone2022-716e5.firebaseapp.com",
  projectId: "clone2022-716e5",
  storageBucket: "clone2022-716e5.appspot.com",
  messagingSenderId: "998504738244",
  appId: "1:998504738244:web:2bd1cca7e24744f47a0891"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
