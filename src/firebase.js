import firebase from 'firebase';
const firebaseConfig = {
   
  };
  //Connect to fire base with this key
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  //db connect
  const db=firebaseApp.firestore();
  const auth= firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  //explicit export
  export {auth,provider};
  
  export default db;