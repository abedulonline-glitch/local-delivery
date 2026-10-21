// delivery-firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// ⚠️ এখানে আপনার নতুন ফায়ারবেসের কনফিগ বসান
const firebaseConfig = {
  apiKey: "AIzaSyBth-4UlBlHFaIm-4vi6Q7G_OIH640l9qM",
  authDomain: "local-delivery-app-59c61.firebaseapp.com",
  projectId: "local-delivery-app-59c61",
  storageBucket: "local-delivery-app-59c61.firebasestorage.app",
  messagingSenderId: "564563629552",
  appId: "1:564563629552:web:19fc32c620958f0b0af935",
  measurementId: "G-T3L9D6BFQL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
