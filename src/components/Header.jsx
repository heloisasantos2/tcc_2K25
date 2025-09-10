import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoKaima from "../assets/logo-kaima.png";
import logoLight from "../assets/logo-light.png";
import { MoonStarsIcon, SunIcon } from '@phosphor-icons/react/dist/ssr';

function Header() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const tagHTML = document.documentElement;
    tagHTML.classList.remove("dark");

    if (theme === "dark") {
      tagHTML.classList.add("dark");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme(prevTheme => prevTheme === "dark" ? "" : "dark");
  }

  return (
    <header className="w-full px-6 md:px-10 py-4 shadow-md fixed top-0 left-0 z-50 bg-[#f1f5f9] flex justify-between items-center dark:bg-[#062239] dark:text-white">
 
      <div className="flex items-center gap-2">
        <img
          src={theme === "dark" ? logoLight : logoKaima}
          alt="Logo"
          className="h-10"
        />
        <Link to="/" className="font-bold text-blue-900 text-lg hover:text-blue-600 transition dark:text-white">
          Início
        </Link>
      </div>

      <nav className="hidden md:flex space-x-6 text-sm text-gray-800 font-medium dark:text-white">
        <Link to="/produtos" className="hover:text-blue-600 transition">Produtos</Link>
        <Link to="/comousar" className="hover:text-blue-600 transition">Como Usar</Link>
        <Link to="/referencias" className="hover:text-blue-600 transition">Referências</Link>
        <Link to="/sobre" className="hover:text-blue-600 transition">Sobre</Link>
        <Link to="/jogo" className="hover:text-blue-600 transition">Jogo</Link>
        <Link to="/cadastro">
          <button className="border border-blue-600 px-4 py-1 rounded-full text-blue-600 hover:bg-blue-100 transition dark:text-white">
            CADASTRAR-SE
          </button>
        </Link>
        <button className="cursor-pointer" onClick={toggleTheme}>
          {theme === "dark" ? (
            <SunIcon size={28} weight="fill" />
          ) : (
            <MoonStarsIcon size={28} weight="fill" />
          )}
        </button>
      </nav>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 rounded-lg text-gray-800 dark:text-white focus:outline-none"
      >
        {!menuOpen && (
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
        {menuOpen && (
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        )}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#f1f5f9] dark:bg-[#062239] border-t border-gray-200 dark:border-white/10 shadow-md md:hidden">
          <nav className="flex flex-col items-center gap-4 py-6 text-sm font-medium text-gray-800 dark:text-white">
            <Link to="/produtos" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition">Produtos</Link>
            <Link to="/comousar" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition">Como Usar</Link>
            <Link to="/referencias" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition">Referências</Link>
            <Link to="/sobre" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition">Sobre</Link>
            <Link to="/jogo" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition">Jogo</Link>
            <Link to="/cadastro" onClick={() => setMenuOpen(false)}>
              <button className="border border-blue-600 px-4 py-1 rounded-full text-blue-600 hover:bg-blue-100 transition dark:text-white">
                CADASTRAR-SE
              </button>
            </Link>
            <button className="cursor-pointer" onClick={toggleTheme}>
              {theme === "dark" ? (
                <SunIcon size={28} weight="fill" />
              ) : (
                <MoonStarsIcon size={28} weight="fill" />
              )}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
