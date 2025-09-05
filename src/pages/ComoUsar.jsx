import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logoKaima from "../assets/logo-kaima.png";
import logoLight from "../assets/logo-light.png";
import pandaHome from "../assets/panda-home.png"; // parece não ser usado, mas mantive caso precise

function ComoUsar() {
  const [theme, setTheme] = useState("light");

  // Recupera o tema salvo no localStorage (somente no client)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  // Aplica o tema no <html> e salva no localStorage
  useEffect(() => {
    const tagHTML = document.documentElement;
    tagHTML.classList.remove("dark", "light");
    tagHTML.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Alterna entre dark e light
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  const passos = [
    {
      titulo: "1 Passo - Ligue o robô:",
      texto:
        "Pressione o botão de energia localizado na parte superior de trás do KAIMA.",
    },
    {
      titulo: "2 Passo - Ative o comando de voz:",
      texto: 'Diga "Olá, Robô" para ativar o comando de voz.',
    },
    {
      titulo: "3 Passo - Siga as instruções:",
      texto:
        "O KAIMA irá fornecer as instruções e guiar a criança por comando de voz.",
    },
    {
      titulo: "4 Passo - Finalize a sessão:",
      texto: "Desligue-o pelo mesmo botão de ligar.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f1f5f9] dark:bg-[#062239] dark:text-white">
      {/* Botão opcional para alternar tema */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 rounded bg-gray-200 dark:bg-gray-700 text-sm"
      >
        Alternar Tema
      </button>

      <Header />

      <main className="pt-28 flex flex-col flex-grow items-center">
        <div className="text-center">
          <h1 className="text-5xl font-poppins">
            Como usar o <span className="text-blue-500">KAIMA</span>
          </h1>
          <p className="mt-2 text-gray-700 dark:text-white">
            Nesta página você encontra um passo a passo <br /> para utilizar o
            KAIMA.
          </p>
        </div>

        <div className="mt-8 w-full max-w-xl flex flex-col gap-4">
          {passos.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-[#004AAD] text-white rounded-xl p-6 shadow-md dark:bg-[#0E2D48]"
            >
              <img
                src={theme === "dark" ? logoLight : logoKaima}
                alt="Logo"
                className="h-10"
              />
              <div>
                <h2 className="font-semibold">{item.titulo}</h2>
                <p className="text-sm">{item.texto}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <h2 className="font-semibold">VÍDEO INSTRUÇÃO:</h2>
          <div className="mt-4 bg-[#004AAD] w-56 h-28 flex items-center justify-center rounded-2xl shadow-md">
            <button className="text-white text-2xl">
              <FaPlay />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ComoUsar;
