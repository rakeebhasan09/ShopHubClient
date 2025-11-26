"use client";
import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { auth } from "@/firebase/firebase.config";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// Google Login
	const googleLogin = () => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};

	// Logout
	const logOut = () => {
		return signOut(auth);
	};

	// Auth Observer
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser); // currentUser will be null on logout
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const authInfo = { user, setUser, loading, googleLogin, logOut };
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
