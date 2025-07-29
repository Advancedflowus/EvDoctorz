import React from 'react';
import logoEmpresa from '../assets/logoEmpresa.png';

interface FooterCreditsProps {
  text?: string;
}

const FooterCredits: React.FC<FooterCreditsProps> = ({ text = 'Powered By' }) => {
  return (
    <div className="w-full bg-cream text-gray-300 text-center py-2 flex items-center justify-center gap-2">
      <span className="text-sm font-bitter text-white font-semibold">{text}</span>
      <a
        href="http://www.advancedflow.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <img
          src={logoEmpresa}
          alt="Logo Empresa"
          className="h-6 md:h-6 inline-block align-middle hover:opacity-80 transition-opacity"
        />
      </a>
    </div>
  );
};

export default FooterCredits;
