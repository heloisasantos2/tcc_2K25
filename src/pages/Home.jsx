import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="bg-[#f1f5f9] min-h-screen flex flex-col dark:bg-[#062239]">
      <Header />

      <div className="h-40" />

      <main className="pb-12 px-6 md:px-8 lg:px-16 w-full mx-auto flex flex-row items-center gap-12 max-w-[1200px]">
        <div className="flex-1">
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-poppins text-gray-800 leading-tight dark:text-white">
            Tecnologia com <br /> empatia: <span className="text-blue-500">Kaima</span>,<br />
            o robô que <br /> entende e ajuda <br /> a aprender
          </h1>
          <p className="text-gray-500 mt-4 mb-6 text-sm max-w-md dark:text-white">
            Um assistente interativo para apoiar o desenvolvimento de crianças com dificuldades de aprendizagem.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-300 dark:text-white">
            SAIBA MAIS
          </button>
        </div>

        <img
          src="../src/assets/panda-home.png"
          alt="Kaima o Panda"
          className="w-[500px] max-w-none"
        />
    </main>


      <section className="mt-16 px-6 md:px-8 lg:px-16 py-16 w-full mx-auto flex flex-col lg:flex-row items-start gap-12 max-w-[1200px]">
        <div className="max-w-xl">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold mb-4 font-poppins dark:text-white">
            O QUE É O <span className="text-blue-500">KAIMA?</span>
          </h2>
          <p className="text-sm text-gray-900 mb-6 dark:text-white ">
            Kaima é um robô assistente com inteligência artificial, desenvolvido especialmente para crianças com dificuldades de aprendizagem — em específico, Dislexia. Ele conversa, propõe atividades educativas para o incentivo da fala e acompanha o progresso de forma divertida.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-300">
            FAZER DOWNLOAD DO APLICATIVO
          </button>
        </div>

        <div className="max-w-xl">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold mb-4 font-poppins dark:text-white">
            NOSSO <span className="text-blue-500">DIFERENCIAL:</span>
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-sm text-gray-900 dark:text-white">
            <li>A proposta é oferecer um ambiente divertido, afetivo e inclusivo, facilitando o processo de aprendizagem.</li>
            <li>Atividades pensadas para ajudar com dificuldades específicas.</li>
            <li>Empatia como fator-chave: Kaima entende os desafios da criança.</li>
            <li>Criação de conexões afetivas com as crianças, mesmo diante de dificuldades.</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
