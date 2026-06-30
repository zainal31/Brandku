import { useState, useEffect } from "react";
import { apiClient } from "../lib/apiClient";
import { featureData } from "../data/features";
export const useFeatures = () => {
	const [features, setFeatures] = useState([]);
	const [loading, setLoading] = useState(true); // ⚙️ default true
	const [error, setError] = useState(null); // default null
	useEffect(() => {
		let isComponentAlive = true;
		const fetchFeatures = async () => {
			try {
				setLoading(true);
				setError(null);
				// Ambil data langsung dari API nyata
				const response = await apiClient.get("/features");
				if (isComponentAlive) {
					setFeatures(response);
				}
			} catch (err) {
				console.warn("API gagal — menggunakan data mock sebagai fallback:", err);
				console.log("Fallback featureData:", featureData);
				if (isComponentAlive) {
					setError(err);
					setFeatures(featureData);
				}
			} finally {
				if (isComponentAlive) {
					setLoading(false);
				}
			}
		};
		fetchFeatures();
		return () => {
			isComponentAlive = false;
		};
	}, []);
	return { features, loading, error };
};
