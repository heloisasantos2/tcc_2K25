import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return ( 
        <footer className="w-full bg-gray-800 text-gray-200 py-6 mt-10 dark:bg-[#0E2D48] dark:text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">© {new Date().getFullYear()} - Meu Projeto. Todos os direitos reservados.</p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:contato@email.com" className="hover:text-white">
            Contato
          </a>
        </div>
      </div>
    </footer>
    );
}

export default Footer;