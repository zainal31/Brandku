import { useState, useEffect } from "react";
import Hero from "../component/Hero";
import CardGrid from "../component/CardGrid";
import LoginDemo from "../component/LoginDemo";
import { useFeatures } from "../hooks/useFeatures";
import { useLogin } from "../hooks/useLogin";
const Home = () => {
	const { features, loading, error } = useFeatures();
	const { user } = useLogin();
	const [showLoginModal, setShowLoginModal] = useState(false);
	useEffect(() => {
		const handleOpenModal = () => {
			setShowLoginModal(true);
		};
		document.addEventListener("openLoginModal", handleOpenModal);
		return () => {
			document.removeEventListener("openLoginModal", handleOpenModal);
		};
	}, []);
	return (
		<div className="animate-fadeIn">
			{/* Hero Section */}
			<Hero
				title="Solusi Terbaik untuk Bisnismu"
				subtitle="Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil."
				buttonText={user ? `${user.name || "Profile"}` : "Mulai Gratis"}
				currentUser={user}
				onTap={() => {
					if (user) {
						console.log("User already logged in:", user);
						// Optional: redirect or open profile dropdown
					} else {
						console.log("Mulai Gratis clicked!");
						setShowLoginModal(true);
					}
				}}
			/>
			{/* Login Modal */}
			<div className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 transition-opacity duration-200 ${showLoginModal ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
				<div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-fadeIn">
					<div className="p-6 border-b border-slate-100">
						<div className="flex justify-between items-center">
							<h2 className="text-lg font-bold text-slate-800">Masuk ke BrandKu</h2>
							<button onClick={() => setShowLoginModal(false)} className="text-slate-400 hover:text-slate-600 transition" aria-label="Tutup modal">
								✕
							</button>
						</div>
					</div>
					<div className="p-6">
						<LoginDemo />
					</div>
				</div>
			</div>
			{/* Grid of Highlight Features with states */}
			{loading ? (
				<section className="py-16 text-center">
					<h2 className="text-3xl font-bold text-center mb-10 text-slate-800">Mengapa BrandKu?</h2>
					<div className="flex justify-center items-center gap-4">
						<div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
						<span className="text-slate-500 font-semibold text-sm">Memuat fitur...</span>
					</div>
				</section>
			) : features.length > 0 ? (
				<CardGrid features={features} />
			) : error ? (
				<section className="py-16 text-center">
					<h2 className="text-3xl font-bold text-center mb-6 text-slate-800">Mengapa BrandKu?</h2>
					<p className="text-rose-500 font-semibold text-sm">Gagal memuat data fitur: {error.message || "Kesalahan Sistem"}</p>
				</section>
			) : null}
		</div>
	);
};
export default Home;
