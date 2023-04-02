
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD8NtLT1g_v8HeViMUAPyah--TzsRkBod8",
    authDomain: "balagowda-todo-list.firebaseapp.com",
    projectId: "balagowda-todo-list",
    storageBucket: "balagowda-todo-list.appspot.com",
    messagingSenderId: "752265483886",
    appId: "1:752265483886:web:c7db47599b70286b02387f"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.auth();