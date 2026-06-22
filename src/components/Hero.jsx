const Hero = () => {
	return (
		<section className="bg-indigo-50 text-center py-24 px-4 border-b border-indigo-100">
			<h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">Solusi Terbaik Untuk Bisnismu</h1>
			<p className="mb-8 text-lg text-gray-600 max-w-2xl mx-auto">Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil.</p>
			<button
				id="cta-btn"
				className="bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-md transition-all duration-200 ease-in-out">
				Mulai Gratis
			</button>
			<p id="cta-feedback" className="mt-4 text-blue-600 font-medium hidden transition-opacity duration-300"></p>
		</section>
	);
};

export default Hero;
