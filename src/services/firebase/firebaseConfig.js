import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB-R8TWpQN0FSPAN-ZrUMxDRnLDdS-f-B0",
    authDomain: "babyboom-back.firebaseapp.com",
    projectId: "babyboom-back",
    storageBucket: "babyboom-back.appspot.com",
    messagingSenderId: "483691803250",
    appId: "1:483691803250:web:cba7ba153721789d0608eb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)