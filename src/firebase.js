import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCwB9-8rd__iVNtUGVQ0y94EoVYK2-d1FE",
  authDomain: "react-slack-clone-40e70.firebaseapp.com",
  databaseURL: "https://react-slack-clone-40e70.firebaseio.com",
  projectId: "react-slack-clone-40e70",
  storageBucket: "react-slack-clone-40e70.appspot.com",
  messagingSenderId: "63023138903",
  appId: "1:63023138903:web:c2ed8468c00619fa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
