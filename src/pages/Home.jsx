import Header from '../components/Header';
import Footer from '../components/Footer';
import panda from "../assets/panda-home.png";

function Home() {
  return (
    <div className="bg-[#f1f5f9] min-h-screen flex flex-col dark:bg-[#062239]">
      <Header />

      {/* AQUI: diminui o gap */}
      <main className="pt-20 md:pt-24 pb-12 px-4 md:px-6 w-full flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-poppins text-gray-800 leading-tight dark:text-white">
            Tecnologia com <br /> empatia: <span className="text-blue-500">Kaima</span>,<br />
            o robô que <br /> entende e ajuda <br /> a aprender
          </h1>

          <p className="text-gray-500 mt-4 mb-6 text-sm md:text-base dark:text-white">
            Um assistente interativo para apoiar o desenvolvimento de crianças com dificuldades de aprendizagem.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-300 dark:text-white">
            SAIBA MAIS
          </button>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          
          {/* AQUI: leve aproximação da imagem -> puxamos um pouco para a esquerda */}
          <div className="relative flex items-center justify-center md:-ml-6">
            <div className="absolute inset-0 rounded-full blur-[80px] bg-blue-600 opacity-30 scale-[1.25]" />
          
            <img
              src={panda}
              alt="Kaima o Panda"
              className="relative z-10 
                w-[65vw] max-w-[530px] md:max-w-[600px] object-contain"
            />
          </div>

        </div>

      </main>

      <section className="mt-16 px-4 md:px-8 py-16 w-full flex flex-col lg:flex-row items-start gap-12">
        <div className="flex-1">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold mb-4 font-poppins dark:text-white">
            O QUE É O <span className="text-blue-500">KAIMA?</span>
          </h2>
          <p className="text-sm md:text-base text-gray-900 mb-6 dark:text-white">
            Kaima é um robô assistente com inteligência artificial, desenvolvido especialmente para crianças com dificuldades de aprendizagem — em específico, Dislexia. Ele conversa, propõe atividades educativas para o incentivo da fala e acompanha o progresso de forma divertida.
          </p>
        </div>

        <div className="flex-1">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold mb-4 font-poppins dark:text-white">
            NOSSO <span className="text-blue-500">DIFERENCIAL:</span>
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-sm md:text-base text-gray-900 dark:text-white">
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
