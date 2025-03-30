import { useState, createContext, useEffect } from 'react'
import { auth, db } from '../services/firebaseConnection'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { useNavigate } from 'react-router-dom'
import { toast } from  'react-toastify'

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null)
    const [ loadingAuth, setLoadingAuth] = useState(false)
    const [ loading, setLoading ] = useState(true)

    const navigate = useNavigate();

    useEffect(() => {
        async function loadingUser() {
            const storageUser = localStorage.getItem('@ticktsPRO')    

            if(storageUser){
                setUser(JSON.parse(storageUser))
                setLoading(false);
            }

            setLoading(false);
        }
        loadingUser();
    }, [])

    async function singIn(email, password){
        setLoadingAuth(true);

        await signInWithEmailAndPassword(auth, email, password)
        .then(async (value) => {
            let uid = value.user.uid;

            const docRef = doc(db, "users", uid)
            const docSnap = await getDoc(docRef)

            let data = {
                uid: uid,
                nome: docSnap.data().nome,
                email: value.user.email,
                avatarUrl: docSnap.data().avatarUrl
            }

            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
            toast.success("Bem Vindo " + data.nome + "!")
            navigate("/dashboard")
        })
        .catch((error) => {
            console.log(error)
            setLoadingAuth(false)
            toast.error("Ops Algo deu errado!")
        })
    }

    async function singUp(email, password, name){
        setLoadingAuth(true); 
        await createUserWithEmailAndPassword(auth, email, password)
        .then( async (value) => {
            let uid = value.user.uid

            await setDoc(doc(db, "users", uid), {
                nome: name, 
                avatarUrl: null
            })
            .then(() => {
                let data = {
                    uid: uid,
                    nome: name, 
                    email: value.user.email,
                    avatarUrl: null
                };

                setUser(data);
                storageUser(data)
                setLoadingAuth(false)
                toast.success('Seja bem-vindo ao Sistema, ' + data.nome + '!')
                navigate("/dashboard")
            })
        })
        .catch((error) => {
            console.log(error)
            setLoadingAuth(false);
        })
    }

    function storageUser(data){
        localStorage.setItem('@ticktsPRO', JSON.stringify(data))
    }

    async function logout() {
        await signOut(auth);
        localStorage.removeItem('@ticktsPRO'); 
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{
            signed: !!user, 
            user, 
            singIn,
            singUp,
            signOut, 
            logout, 
            loadingAuth,
            loading,
            storageUser,
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
