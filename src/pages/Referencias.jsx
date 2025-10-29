import Header from "../components/Header"; 
import Footer from "../components/Footer"; 

function Referencias() {
    return (
        <div className="bg-[#f1f5f9] min-h-screen flex flex-col dark:bg-[#062239] dark:text-white">
            <Header />

            <main className="pt-32 px-4 sm:px-8 flex flex-col items-center flex-grow">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins text-center mb-8">
                    REFERÊNCIAS
                </h1>

                <div className="bg-[#dce9fa] p-6 sm:p-8 rounded-lg space-y-4 sm:space-y-6 w-[90%] sm:w-[80%] md:w-[70%] mx-auto dark:bg-[#0E2D48]">
                    
                    <div>
                        <p className="font-medium text-sm sm:text-base">
                            1. Artigo: Robótica Educacional como ferramenta de inclusão
                        </p>
                        <a
                            href="https://revistas.ufpr.br/roboticaeducacional"
                            className="text-blue-600 underline text-sm sm:text-base break-words"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://revistas.ufpr.br/roboticaeducacional
                        </a>
                    </div>

                    <div>
                        <p className="font-medium text-sm sm:text-base">
                            2. Artigo: Tecnologias assistivas para crianças com dificuldades de aprendizagem
                        </p>
                        <a
                            href="https://www.scielo.br/artigo-tecnologias-assistivas"
                            className="text-blue-600 underline text-sm sm:text-base break-words"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.scielo.br/artigo-tecnologias-assistivas
                        </a>
                    </div>

                    <div>
                        <p className="font-medium text-sm sm:text-base">
                            3. Publicação: Desenvolvimento Cognitivo e Interação com Robôs
                        </p>
                        <a
                            href="https://www.researchgate.net/interaction-robotica"
                            className="text-blue-600 underline text-sm sm:text-base break-words"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.researchgate.net/interaction-robotica
                        </a>
                    </div>

                    <div>
                        <p className="font-medium text-sm sm:text-base">
                            4. Site oficial GDevelop (jogo utilizado):
                        </p>
                        <a
                            href="https://gdevelop.io"
                            className="text-blue-600 underline text-sm sm:text-base break-words"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://gdevelop.io
                        </a>
                    </div>

                    <div>
                        <p className="font-medium text-sm sm:text-base">
                            5. Fonte de inspiração em Design UI/UX:
                        </p>
                        <a
                            href="https://www.behance.net"
                            className="text-blue-600 underline text-sm sm:text-base break-words"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.behance.net
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Referencias;
