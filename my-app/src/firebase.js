// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Firestore を使用する場合
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmqPGZPbgm844rYoyx1py8kBgcd7xZrPE",
  authDomain: "hackathon1-f4207.firebaseapp.com",
  projectId: "hackathon1-f4207",
  storageBucket: "hackathon1-f4207.firebasestorage.app",
  messagingSenderId: "845494579346",
  appId: "1:845494579346:web:31f4eb6f457b503273764b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore のインスタンスを作成
const db = getFirestore(app);

export { app, db};  // 他のファイルで使えるようにエクスポート
