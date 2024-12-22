import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCmqPGZPbgm844rYoyx1py8kBgcd7xZrPE",
  authDomain: "hackathon1-f4207.firebaseapp.com",
  projectId: "hackathon1-f4207",
  storageBucket: "hackathon1-f4207.firebasestorage.app",
  messagingSenderId: "845494579346",
  appId: "1:845494579346:web:31f4eb6f457b503273764b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db};
