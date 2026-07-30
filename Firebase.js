import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWzdzqHI2Vgx11co9ka93uk-6wA2_BK6Q",
  authDomain: "oldroblox-574b3.firebaseapp.com",
  projectId: "oldroblox-574b3",
  storageBucket: "oldroblox-574b3.firebasestorage.app",
  messagingSenderId: "946317745441",
  appId: "1:946317745441:web:451014027ba9e9a3713260"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.signUp = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created: " + user.user.email);
  } catch (e) {
    alert(e.message);
  }
};

window.login = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    alert("Welcome " + user.user.email);
  } catch (e) {
    alert(e.message);
  }
};

window.logout = async () => {
  await signOut(auth);
  alert("Logged out");
};

import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

onAuthStateChanged(auth,(user)=>{

if(user){

document.querySelector(".login").textContent=user.email;

document.querySelector(".signup").textContent="Logout";

document.querySelector(".signup").onclick=logout;

}else{

document.querySelector(".login").textContent="Login";

document.querySelector(".signup").textContent="Sign Up";

}

});
