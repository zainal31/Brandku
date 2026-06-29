import { useState } from "react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	console.log;

	return (
		<header className="flex items-center justify-between py-4 px-4">
			<h1 className="text-blue-700 font-bold text-clifford">Brandku</h1>
			<nav className="hidden md:flex items-center gap-8">
				<a href="">Beranda</a>
				<a href="/fitur.html">Fitur</a>
				<a href="">Harga</a>
			</nav>

			<button className="md:hidden text-2xl text-gray-700 focus:outline-none" onClick={() => setIsMenuOpen((prev) => !prev)}>
				{isMenuOpen ? "✕" : "☰"}
			</button>

			{isMenuOpen && (
				<nav className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4 px-6">
					<a href="" className="block py-2" onClick={() => setIsMenuOpen(false)}>
						Beranda
					</a>
					<a href="/fitur.html" className="block py-2" onClick={() => setIsMenuOpen(false)}>
						Fitur
					</a>
					<a href="" className="block py-2" onClick={() => setIsMenuOpen(false)}>
						Harga
					</a>
				</nav>
			)}
		</header>
	);
};

export default Header;
