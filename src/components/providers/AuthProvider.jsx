import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //==================== Create User=====================
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //==================== Login =========================
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //================ Signout || Logout========================

  const logOut = () => {
    return signOut(auth);
  };

  //Observer user auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // stop observing while unmounting

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
