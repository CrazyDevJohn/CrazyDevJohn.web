import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyAxjjBZc0Xwdid5tWLUP5ckFjVpRnpe4To",
  authDomain: "crazydevjohnweb.firebaseapp.com",
  projectId: "crazydevjohnweb",
  storageBucket: "crazydevjohnweb.appspot.com",
  messagingSenderId: "444894708374",
  appId: "1:444894708374:web:90649ea89f3c972696f8b7",
};

export const app = getApps.length > 0 ? getApp() : initializeApp(config);
export const db = getFirestore(app);
