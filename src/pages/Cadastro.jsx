import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Cadastro() {
  return (
    <div className="min-h-screen bg-[#f1f5f9] flex flex-col dark:bg-[#062239]">
      <Header />

      <main className="flex flex-col flex-grow items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl p-8 relative">
          <h1 className="text-5xl font-poppins text-center text-gray-800 mb-10 mt-12 dark:text-white">
            CADASTRAR-<span className="text-blue-500">SE</span>
          </h1>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nome"
              className="bg-[#D6E3F3] placeholder-gray-800 text-sm rounded-lg px-4 py-2 outline-none dark:bg-[#0E2D48] dark:placeholder-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-[#D6E3F3] placeholder-gray-800 text-sm rounded-lg px-4 py-2 outline-none dark:bg-[#0E2D48] dark:placeholder-white"
            />
            <input
              type="password"
              placeholder="Senha"
              className="bg-[#D6E3F3] placeholder-gray-800 text-sm rounded-lg px-4 py-2 outline-none dark:bg-[#0E2D48] dark:placeholder-white"
            />
            <input
              type="password"
              placeholder="Confirmar Senha"
              className="bg-[#D6E3F3] placeholder-gray-800 text-sm rounded-lg px-4 py-2 outline-none dark:bg-[#0E2D48] dark:placeholder-white"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300dark:placeholder-white "
            >
              Cadastrar-se
            </button>
          </form>

          <p className="text-center text-xs mt-4 text-gray-700 dark:text-white">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">
              LOGIN
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Cadastro;
