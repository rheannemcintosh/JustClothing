import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAtWQlKuBXXY1QZf6PBsngOM4maLoW9DT0",
    authDomain: "justclothing-db.firebaseapp.com",
    projectId: "justclothing-db",
    storageBucket: "justclothing-db.appspot.com",
    messagingSenderId: "189083855282",
    appId: "1:189083855282:web:63a96f1f10fd6118c25cab",
    measurementId: "G-D3KJEFF483"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;