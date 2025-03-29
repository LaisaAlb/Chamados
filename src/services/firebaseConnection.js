import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'; 

const firebaseConfig = {
    apiKey: "AIzaSyCWN4wt6luqDL3i6B9RnxoqU_kV8fLtSY0",
    authDomain: "ticktes-5ad6c.firebaseapp.com",
    projectId: "ticktes-5ad6c",
    storageBucket: "ticktes-5ad6c.firebasestorage.app",
    messagingSenderId: "656383624145",
    appId: "1:656383624145:web:13b967b7ce61904d54d6f0",
    measurementId: "G-Y8487CB87D"
};

const firebaseApp = initializeApp(firebaseConfig); 
const auth = getAuth(firebaseApp); 
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage};
