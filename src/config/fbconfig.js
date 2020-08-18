 import firebase from 'firebase/app';
 import 'firebase/firestore'
 import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBq2br0f2IYpDZLMZVYs2jUYKVq985Tf1w",
    authDomain: "project-plan-aa009.firebaseapp.com",
    databaseURL: "https://project-plan-aa009.firebaseio.com",
    projectId: "project-plan-aa009",
    storageBucket: "project-plan-aa009.appspot.com",
    messagingSenderId: "617196615185",
    appId: "1:617196615185:web:1655ca83505ef139f663b0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;