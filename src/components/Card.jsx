import { useState, useEffect } from "react";

const Card = ({ id, icon, title, description }) => {
	const [jumlahSuka, setJumlahSuka] = useState(() => {
		const saved = localStorage.getItem(`suka-${id}`);
		return saved ? parseInt(saved, 10) : 0;
	});

	useEffect(() => {
		localStorage.setItem(`suka-${id}`, jumlahSuka);
	}, [jumlahSuka, id]);

	return (
		<article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
			<div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">{icon}</div>
			<h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
			<p className="text-gray-600">{description}</p>
			<button className="mt-4 px-4 py-2 bg-pink-600 rounded-lg hover:bg-pink-200 transition-colors duration-300 text-white" onClick={() => setJumlahSuka((prev) => prev + 1)}>
				Suka ({jumlahSuka})
			</button>
		</article>
	);
};

export default Card;
