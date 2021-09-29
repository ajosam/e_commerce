import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9IqFyAHFe_Fopg6wXrtNzV4-6wdRtxDQ",
    authDomain: "clone-6855e.firebaseapp.com",
    projectId: "clone-6855e",
    storageBucket: "clone-6855e.appspot.com",
    messagingSenderId: "743521030844",
    appId: "1:743521030844:web:eaacd6c213d43b123576b9",
    measurementId: "G-PZZN5WMRMP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  export  {auth};