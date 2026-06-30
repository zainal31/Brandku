export const apiClient = {
	// GET: untuk mengambil data (seperti "minta menu")
	get: async (url, options = {}) => {
		const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || "https://api.brandku.com"}${url}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				...options.headers,
			},
			...options,
		});
		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(`Gagal ambil data: ${response.status} ${response.statusText}\n` + `Pesan: ${errorData.message || "Cek koneksi atau alamat API"}`);
		}
		return await response.json();
	},
	// POST: untuk mengirim data (seperti "pesan makanan")
	post: async (url, body, options = {}) => {
		// Mock khusus untuk /login — dengan validasi sederhana
		if (url === "/login") {
			const { email, password } = body || {};
			if (email === "adzril@brandku.com" && password === "123") {
				return {
					success: true,
					user: {
						name: "adzril",
						email: "adzril@brandku.com",
						role: "Admin",
					},
				};
			}
			// Jika gagal validasi, lempar error seperti API nyata
			throw new Error("Email atau password salah — coba: tiara@brandku.com / 123");
		}
		const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || "https://api.brandku.com"}${url}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				...options.headers,
			},
			body: JSON.stringify(body),
			...options,
		});
		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(`Gagal kirim data: ${response.status} ${response.statusText}\n` + `Pesan: ${errorData.message || "Cek koneksi atau data yang dikirim"}`);
		}
		return await response.json();
	},
};
