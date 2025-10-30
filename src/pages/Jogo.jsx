import Header from "../components/Header";
import Footer from "../components/Footer";
import pandaImg from "../assets/panda-home.png";

function Jogo() {
  return (
    <div className="min-h-screen bg-[#f1f5f9] flex flex-col dark:bg-[#062239]">
      <Header />

      <main className="flex flex-col flex-grow items-center justify-center px-6 pt-32 md:pt-40 pb-12">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-white whitespace-nowrap">
              PANDA <span className="text-blue-600">AVENTURA</span>
            </h1>

            <p className="text-gray-700 leading-relaxed mb-8 dark:text-white text-sm md:text-base">
              Cada personagem ajuda a criança a superar desafios e atividades
              educativas dentro de sua área de especialidade. <br />
              No final de cada missão, o robô oferece feedback positivo e cria
              uma história de recompensa, na qual a criança "salva" o reino do
              aprendizado de um problema como a falta de conhecimento.
            </p>

            <div className="w-full max-w-md h-48 rounded-2xl overflow-hidden shadow-md mb-6">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/GVT851SIbNg"
                title="Vídeo do Panda Aventura"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition flex items-center gap-2 mx-auto md:mx-0">
              Ir para o Gdevelop <span className="text-xl">»</span>
            </button>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={pandaImg}
              alt="Panda aventura"
              className="w-60 md:w-80 lg:w-[800px] object-contain"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Jogo;
