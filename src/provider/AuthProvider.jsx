/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import axios from "axios";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

 // email  password sign-up 
const createEmailUser =(email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

// email password log-in 
 
const signInEmailUser = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

// google log in
const googleLogIn = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  };
  //logout
  const logout = () => {
    setLoader(true)
    return signOut(auth);
  };

  // update user profile

  const updateUserProfile = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

 //observer user auth state

 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      
      if(currentUser) {
        axios.post('https://shop-wave-server.vercel.app/jwt', {
          email: currentUser.email,
          
        })
        .then(data => {
          console.log(data.data.token);
          localStorage.setItem('shopwave-access-token', data.data.token);
          setUser(currentUser);
          setLoader(false)
        }
        )
      }
      else{
        localStorage.removeItem('shopwave-access-token');
          setUser(currentUser);
          setLoader(false)

      }
    });

    // stop observing while unmounting

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = { googleLogIn, logout,user,createEmailUser,loader,signInEmailUser,setLoader,setUser,updateUserProfile };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;