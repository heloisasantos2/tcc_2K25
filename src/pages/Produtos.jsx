import React from 'react';
import Header from '../components/Header';

import lcdImg from '../assets/lcd.png';
import arduinoImg from '../assets/arduinouno.png';
import vozImg from '../assets/voz.png';
import servoImg from '../assets/servo.png';
import jumpersImg from '../assets/jumpers.png';
import fonteImg from '../assets/fonte-alimentacao.png';
import filamentoImg from '../assets/filamento.png';
import pandaImg from '../assets/panda-home.png';
import Footer from '../components/Footer';

function Produtos() {
  const produtos = [
    { nome: 'LCD 16x2 com interface I2C', imagem: lcdImg, preco: 35 },
    { nome: 'Arduino Uno R3', imagem: arduinoImg, preco: 80 },
    { nome: 'Módulo de Reconhecimento de Voz', imagem: vozImg, preco: 120 },
    { nome: 'Servo SG90', imagem: servoImg, preco: 25 },
    { nome: 'Jumpers', imagem: jumpersImg, preco: 15 },
    { nome: 'Fonte de alimentação 5V', imagem: fonteImg, preco: 25 },
    { nome: 'Filamento PLA para impressora 3D', imagem: filamentoImg, preco: 120 },
  ];

  const valorTotal = produtos.reduce((acc, produto) => acc + produto.preco, 0);

  return (
    <div className="bg-[#f1f5f9] min-h-screen flex flex-col dark:bg-[#062239]">
      <Header />

      <main className="pt-28 px-6 md:px-16 text-center flex flex-col flex-grow">
        <h1 className="text-5xl font-poppins mb-8 dark:text-white">
            Produtos <span className="text-blue-500">Utilizados</span>
            </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
          {produtos.map((produto, index) => (
            <div key={index} className="flex items-center bg-blue-200 rounded-xl p-4 shadow-md dark:bg-[#0E2D48]">
              <img src={produto.imagem} alt={produto.nome} className="w-12 h-12 mr-4" />
              <span className="flex-1 text-left dark:text-white">{produto.nome}</span>
              <span className="font-bold dark:text-white">R$ {produto.preco},00</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
            <img src={pandaImg} alt="Panda" className="w-90 h-70" />
            <div className="text-left">
                <h2 className="text-xl font-poppins dark:text-white">
                    Projeto <span className="text-blue-500">KAIMA</span>
                </h2>
                <p className="text-lg font-semibold dark:text-white">Valor Final: R$ {valorTotal},00</p>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Produtos;
