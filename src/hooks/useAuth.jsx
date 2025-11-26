"use client";
import { AuthContext } from "@/contexts/AuthContext";
import { use } from "react";

const useAuth = () => {
	const authInfo = use(AuthContext);
	return authInfo;
};

export default useAuth;
