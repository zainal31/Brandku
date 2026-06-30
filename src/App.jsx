import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardGrid from "./components/CardGrid";
import { featureData } from "../data/features";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";

const App = () => {
	const [features] = useState(featureData);
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home features={featureData} />} />
					<Route path="/tentang" element={<About />} />
					<Route path="/harga" element={<Pricing />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
