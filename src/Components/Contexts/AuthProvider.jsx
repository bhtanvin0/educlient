import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,
    signInWithPopup, signOut, updateProfile
} from 'firebase/auth'
import app from '../../Firebase/Firebase';


export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googelProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googelProvider);

    }

    const logInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };


    const logOut = () => {
        return signOut(auth);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, loading, googleLogin, logOut, createUser, signIn, updateUserProfile, setLoading, logInWithGithub };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;