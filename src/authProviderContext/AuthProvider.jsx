import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebaseapp.js'
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged ,signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,updateProfile  } from "firebase/auth";
 
// create context 
export const Authcontext =  createContext()
   
const AuthProvider = ({children}) => {

    const [error, seterror] = useState(null);
    const [Success, setSuccess] = useState(null);
    const [user, setuser] = useState();
    const [loader, setloader] = useState(true);

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    


    // user checking 
    useEffect(() => {
      
       const unsbscribe =  onAuthStateChanged(auth,carrentUser => {
        
        setuser(carrentUser)
       setTimeout(() => {
        setloader(false)
       }, 500);
       })

        return () => {
            unsbscribe()
        };
    }, []);
    
    
    
    console.log(user)

    //  create user 
    const createAccountWithEmailpass = (email, password) => {
        
       return createUserWithEmailAndPassword(auth, email, password)

    };

    const addNameAndPhoto = (name, url) => {
       return updateProfile(auth.currentUser,{
            displayName:name, 
            photoURL: url
        }) 
    }

    // login user 
    const LOgInWithUser = (email, password) => {

       return signInWithEmailAndPassword(auth, email, password)

    }

    const LogInWithGoogle = () => {
 
      return  signInWithPopup(auth,provider)

    }


    const userLogOut = ()=> {
        signOut(auth)
    }

    // context value object 
    const contextvalue = {
        createAccountWithEmailpass,
        LOgInWithUser,
        LogInWithGoogle,
        addNameAndPhoto,
        userLogOut,
        user,
        seterror,
        error,
        Success,
        setSuccess,
        loader

    }

    return (
        <Authcontext.Provider value={contextvalue}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;