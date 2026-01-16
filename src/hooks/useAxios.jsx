"use client";

import axios from "axios";

const axiosInstance = axios.create({
	// baseURL: "https://first-next-jus-project-server.vercel.app",
	baseURL: "http://localhost:5000",
});

const useAxios = () => {
	return axiosInstance;
};

export default useAxios;
