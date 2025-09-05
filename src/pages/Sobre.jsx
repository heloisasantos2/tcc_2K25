import React, { useState } from 'react';
import Header from '../components/Header';
import heloisaImg from '../assets/heloisa-img.jpeg';
import marianaImg from '../assets/mariana-img.jpeg';
import manuellaImg from '../assets/manuella-img.jpeg';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Footer from '../components/Footer';

function Sobre() {
  const [imagemAberta, setImagemAberta] = useState(null);

  const pessoas = [
    { nome: 'Manuella Araújo', imagem: manuellaImg },
    { nome: 'Mariana Andrade', imagem: marianaImg },
    { nome: 'Heloísa Santos', imagem: heloisaImg }
  ];

  return (
    <div className="bg-[#f1f5f9] min-h-screen flex flex-col dark:bg-[#062239]">
      <Header />

      <main className="pt-28 px-6 md:px-16 flex flex-col text-center flex-grow">
        <h1 className="text-5xl md:text-4xl font-poppins text-gray-800 mb-12 dark:text-white">
          QUEM NÓS SOMOS?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pessoas.map((pessoa, index) => (
            <div
              key={index}
              className="bg-[#D6E3F3] rounded-xl p-9 shadow-md dark:bg-[#0E2D48]"
            >
              {pessoa.imagem ? (
                <img
                  src={pessoa.imagem}
                  alt={pessoa.nome}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4 cursor-pointer hover:scale-105 transition"
                  onClick={() => setImagemAberta(pessoa.imagem)}
                />
              ) : (
                <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4" />
              )}
              <h3 className="font-semibold text-gray-800 mb-2 dark:text-white">{pessoa.nome}</h3>
              <div className="flex justify-center gap-4">
                <FaInstagram className="text-blue-600 hover:text-pink-500 cursor-pointer w-6 h-6" />
                <FaLinkedin className="text-blue-600 hover:text-blue-800 cursor-pointer w-6 h-6" />
              </div>
            </div>
          ))}
        </div>

        <div className="p-10 inline-block">
          <p className="text-lg font-semibold mb-1 dark:text-white">Entre em contato conosco!</p>
          <a
            href="mailto:kaima.contato@gmail.com"
            className="text-blue-600 underline dark:text-white"
          >
            kaima.contato@gmail.com
          </a>

          <form className="mt-4 flex flex-col items-center gap-2">
            <input
              type="text"
              placeholder="Mensagem"
              className="bg-blue-100 px-4 py-2 rounded-full w-64 text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-1 rounded-full text-sm hover:bg-blue-900 transition dark:bg-text-white"
            >
              ENVIAR
            </button>
          </form>
        </div>
      </main>

      {imagemAberta && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={() => setImagemAberta(null)}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg w-[50%] max-w-[500px] h-auto max-h-[60vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imagemAberta}
              alt="Foto ampliada"
              className="object-contain max-w-full max-h-full rounded"
            />
          </div>
        </div>
)}

    <Footer />
    </div>
  );
}

export default Sobre;
