import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC6ngJMjqsWaVUB5RFnsJdcA05H-CT5h3E",
    authDomain: "modshoppe-db.firebaseapp.com",
    projectId: "modshoppe-db",
    storageBucket: "modshoppe-db.appspot.com",
    messagingSenderId: "511298993784",
    appId: "1:511298993784:web:c6fa9b311a185f8439f78d"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;