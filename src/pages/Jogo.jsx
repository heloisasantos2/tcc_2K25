import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pandaImg from "../assets/panda-home.png";

function Jogo() {
  return (
    <div className="min-h-screen bg-[#f1f5f9] flex flex-col dark:bg-[#062239]">
      <Header />

      <main className="flex flex-col flex-grow items-center justify-center px-6 py-12">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 dark:text-white">
              PANDA AVENTURA
            </h1>

            <p className="text-gray-700 leading-relaxed mb-8 dark:text-white">
              Cada personagem ajuda a criança a superar desafios e atividades
              educativas dentro de sua área de especialidade. <br />
              No final de cada missão, o robô oferece feedback positivo e cria
              uma história de recompensa, na qual a criança "salva" o reino do
              aprendizado de um problema como a falta de conhecimento.
            </p>

            <div className="w-full max-w-md h-48 bg-[#cfdcf6] rounded-2xl flex items-center justify-center shadow-md mb-6 dark:bg-[#0E2D48]">
              <span className="text-gray-600">[ espaço para o vídeo ]</span>
            </div>

            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition flex items-center gap-2">
              Ir para o Gdevelop <span className="text-xl">»</span>
            </button>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={pandaImg}
              alt="Panda aventura"
              className="w-80 md:w-[800px]"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Jogo;
