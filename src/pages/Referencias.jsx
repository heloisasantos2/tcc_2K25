import React from "react";
import Header from "../components/Header"; 
import Footer from "../components/Footer"; 

function Referencias() {
    return (
        <div className="bg-[#f1f5f9] min-h-screen flex flex-col dark:bg-[#062239] dark:text-white">
            <Header />

            <main className="pt-40 flex flex-col items-center flex-grow">
                <h1 className="text-6xl font-poppins text-center mb-8">
                    Referências
                </h1>

                <div className="bg-[#dce9fa] p-8 rounded-lg space-y-8 max-w-5xl w-full dark:bg-[#0E2D48]">
                    <div>
                        <p className="font-medium">
                            1. Artigo: Robótica Educacional como ferramenta de inclusão
                        </p>
                        <a
                            href="https://revistas.ufpr.br/roboticaeducacional"
                            className="text-blue-600 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Link: https://revistas.ufpr.br/roboticaeducacional
                        </a>
                    </div>

                    <div>
                        <p className="font-medium">
                            2. Artigo: Tecnologias assistivas para crianças com dificuldades de aprendizagem
                        </p>
                        <a
                            href="https://www.scielo.br/artigo-tecnologias-assistivas"
                            className="text-blue-600 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Link: https://www.scielo.br/artigo-tecnologias-assistivas
                        </a>
                    </div>

                    <div>
                        <p className="font-medium">
                            3. Publicação: Desenvolvimento Cognitivo e Interação com Robôs
                        </p>
                        <a
                            href="https://www.researchgate.net/interaction-robotica"
                            className="text-blue-600 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Link: https://www.researchgate.net/interaction-robotica
                        </a>
                    </div>

                    <div>
                        <p className="font-medium">4. Site oficial GDevelop (jogo utilizado):</p>
                        <a
                            href="https://gdevelop.io"
                            className="text-blue-600 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Link: https://gdevelop.io
                        </a>
                    </div>

                    <div>
                        <p className="font-medium">5. Fonte de inspiração em Design UI/UX:</p>
                        <a
                            href="https://www.behance.net"
                            className="text-blue-600 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Link: https://www.behance.net
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Referencias;
