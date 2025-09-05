import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoKaima from "../assets/logo-kaima.png"
import logoLight from "../assets/logo-light.png"
import { MoonStarsIcon, SunIcon } from '@phosphor-icons/react/dist/ssr';

function Header() {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "")

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const tagHTML = document.documentElement
        tagHTML.classList.remove("dark")

        if(theme === "dark"){
            tagHTML.classList.add("dark")
        }
    }, [theme])

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "dark" ? "" : "dark")
    }

    return (
        <header className="w-full px-10 py-4 shadow-md fixed top-0 left-0 z-50 bg-[#f1f5f9] flex justify-between justify-around items-center dark:bg-[#062239] dark:text-white">
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

            <nav className="space-x-6 text-sm text-gray-800 font-medium dark:text-white ">
                <Link to="/produtos" className="hover:text-blue-600 transition">
                    Produtos
                </Link>

                <Link to="/comousar" className="hover:text-blue-600 transition">
                    Como Usar
                </Link>

                <Link to="/referencias" className="hover:text-blue-600 transition">
                    Referencias
                </Link>

                <Link to="/sobre" className="hover:text-blue-600 transition">
                    Sobre
                </Link>

                <Link to="/jogo" className="hover:text-blue-600 transition">
                    Jogo
                </Link>

                <Link to="/cadastro">
                    <button className="border border-blue-600 px-4 py-1 rounded-full text-blue-600 hover:bg-blue-100 transition dark:text-white">
                        CADASTRAR-SE
                    </button>
                </Link>

                <button className='cursor-pointer' onClick={toggleTheme}>
                    {theme === "dark" ? (
                        <SunIcon size={32} weight="fill" />
                    ) : (
                        <MoonStarsIcon size={32} weight="fill" />
                    )}
                </button>
            </nav>
        </header>
    );
}

export default Header;
