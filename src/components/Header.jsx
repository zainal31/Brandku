const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 px-4">
      <h1 className="text-blue-700 font-bold text-clifford">Brandku</h1>
      <nav className="flex items-center gap-8">
        <a href="">Beranda</a>
        <a href="/fitur.html">Fitur</a>
        <a href="">Harga</a>
      </nav>
    </header>
  );
};

export default Header;
