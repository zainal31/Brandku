import { useState } from "react";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import { featureData } from "../data/features";
import Hero from "./components/Hero";

const App = () => {
	const [features] = useState(featureData);
	return (
		<>
			<Header />
			<main>
				<Hero />
				<CardGrid features={features} />
			</main>

			<footer className="bg-gray-800 text-white text-center p-6 text-sm">
				<p>&copy; 2025 Brandku All rights reserved</p>
			</footer>
		</>
	);
};

export default App;
