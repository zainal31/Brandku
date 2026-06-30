// src/hooks/useLogin.js
import { useState } from "react";
import { apiClient } from "../lib/apiClient";
/**
 * Custom hook untuk login — fokus pada pengiriman data ke endpoint /login
 * Catatan: Ini contoh sederhana untuk pembelajaran. Tidak termasuk manajemen session atau security.
 */
export const useLogin = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const login = async (credentials) => {
		try {
			setLoading(true);
			setUser(null);
			// Kirim data login ke server via POST
			const response = await apiClient.post("/login", credentials);
			// Jika server balas dengan user, simpan
			if (response?.user) {
				setUser(response.user);
			}
		} catch (err) {
			console.error("[Login Error]", err);
		} finally {
			setLoading(false);
		}
	};
	return { user, loading, login };
};
