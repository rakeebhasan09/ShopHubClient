"use client";

import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://first-next-jus-project-server.vercel.app",
});

const useAxios = () => {
	return axiosInstance;
};

export default useAxios;
