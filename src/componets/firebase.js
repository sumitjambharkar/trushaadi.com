import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDIn8gpgu0XueI1rXTpyspikvIt2kJSK7M",
  authDomain: "whatsapp-3f1d8.firebaseapp.com",
  databaseURL: "https://whatsapp-3f1d8-default-rtdb.firebaseio.com",
  projectId: "whatsapp-3f1d8",
  storageBucket: "whatsapp-3f1d8.appspot.com",
  messagingSenderId: "74010948707",
  appId: "1:74010948707:web:ff772c7aa2425e3cd73456"
};

// Initialize Firebase
const firebaseApp  = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebaseApp.firestore()
export {auth , db }
export const createUserCollecton =async(user,additionalData)=>{
  if(!user) return;
  const userRef = db.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists){
    const {email} = user;
    const {name} = additionalData;
    const {number} = additionalData;
    const {birth} = additionalData;
    try{
      userRef.set({
        email,
        name,
        birth,
        number,
        createdAt :new Date()

      })
    }
    catch(err){
      console.log(err);
    }
  }
}
