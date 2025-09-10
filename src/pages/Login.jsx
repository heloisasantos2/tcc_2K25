import React from 'react'; 
import { Link } from 'react-router-dom';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 

function Login() {
  return (
    <div className="min-h-screen bg-[#f1f5f9] flex flex-col dark:bg-[#062239]">
      <Header />

      <main className="flex flex-col flex-grow items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg sm:max-w-md lg:max-w-lg rounded-2xl p-6 sm:p-8 relative">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-poppins text-center text-gray-800 mb-2 dark:text-white">
            Bem-vindo de volta!
          </h1>
          <p className="text-xs sm:text-sm text-center text-blue-700 mb-6">
            Entre para continuar aprendendo com o Kaima.
          </p>

          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="text-xs sm:text-sm text-gray-700 dark:text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Digite seu email"
                className="mt-1 w-full px-3 sm:px-4 py-2 rounded-md bg-[#D6E3F3] text-gray-900 outline-none text-sm sm:text-base dark:bg-[#0E2D48] dark:placeholder-white"
              />
            </div>

            <div>
              <label htmlFor="senha" className="text-xs sm:text-sm text-gray-700 dark:text-white">
                Senha
              </label>
              <input
                id="senha"
                type="password"
                placeholder="Digite sua senha"
                className="mt-1 w-full px-3 sm:px-4 py-2 rounded-md bg-[#D6E3F3] text-gray-900 outline-none text-sm sm:text-base dark:bg-[#0E2D48] dark:placeholder-white"
              />
            </div>

            <button
              type="submit"
              className="mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition text-sm sm:text-base"
            >
              Entrar
            </button>
          </form>

          <div className="text-center text-xs sm:text-sm mt-4">
            <p className="text-gray-700 dark:text-white">Esqueceu a senha?</p>
            <p className="text-gray-700 mt-1 dark:text-white">
              Ainda não tem conta?{' '}
              <Link to="/cadastro" className="text-blue-600 font-semibold hover:underline">
                CADASTRAR-SE
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
