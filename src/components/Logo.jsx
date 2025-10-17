import React from 'react';

const Logo = ({ size = 200, variant = 'full', className = '' }) => {
  const scale = size / 200; // Escala basada en el tamaño original de 200px
  
  return (
    <div className={`logo-container ${className}`} style={{ width: size, height: size * 0.6 }}>
      <svg
        width={size}
        height={size * 0.6}
        viewBox="0 0 200 120"
        xmlns="http://www.w3.org/2000/svg"
        className="tomotomo-logo"
      >
        {/* Fondo azul cian */}
        <rect width="200" height="120" fill="#00BCD4" rx="10"/>
        
        {/* Textura sutil del fondo */}
        <defs>
          <pattern id="texture" patternUnits="userSpaceOnUse" width="4" height="4">
            <rect width="4" height="4" fill="#00BCD4"/>
            <circle cx="2" cy="2" r="0.5" fill="#00E5FF" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="200" height="120" fill="url(#texture)"/>
        
        {/* Primer "tomo" */}
        <g transform="translate(20, 30)">
          {/* Letra "t" */}
          <text
            x="0"
            y="40"
            fontSize="32"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
            fill="white"
            stroke="black"
            strokeWidth="2"
            textAnchor="start"
          >
            t
          </text>
          
          {/* Libro con personaje manga */}
          <g transform="translate(25, 0)">
            {/* Libro abierto */}
            <path
              d="M0 20 L0 60 L30 60 L30 20 L15 10 Z"
              fill="white"
              stroke="black"
              strokeWidth="2"
            />
            
            {/* Páginas del libro */}
            <path
              d="M2 22 L28 22 L28 58 L2 58 Z"
              fill="#F5F5F5"
            />
            
            {/* Líneas de texto japonés */}
            <line x1="5" y1="25" x2="25" y2="25" stroke="black" strokeWidth="0.5"/>
            <line x1="5" y1="28" x2="20" y2="28" stroke="black" strokeWidth="0.5"/>
            <line x1="5" y1="31" x2="22" y2="31" stroke="black" strokeWidth="0.5"/>
            <line x1="5" y1="34" x2="18" y2="34" stroke="black" strokeWidth="0.5"/>
            
            {/* Personaje manga */}
            <g transform="translate(15, 10)">
              {/* Cabeza */}
              <circle cx="0" cy="0" r="8" fill="#FFE0B2" stroke="black" strokeWidth="1"/>
              
              {/* Cabello */}
              <path
                d="M-6 -8 Q0 -12 6 -8 Q6 -4 0 -2 Q-6 -4 -6 -8 Z"
                fill="black"
              />
              
              {/* Ojos */}
              <circle cx="-3" cy="-2" r="2" fill="white" stroke="black" strokeWidth="0.5"/>
              <circle cx="3" cy="-2" r="2" fill="white" stroke="black" strokeWidth="0.5"/>
              <circle cx="-3" cy="-2" r="1" fill="black"/>
              <circle cx="3" cy="-2" r="1" fill="black"/>
              
              {/* Sonrisa */}
              <path
                d="M-3 2 Q0 5 3 2"
                fill="none"
                stroke="black"
                strokeWidth="1"
              />
              
              {/* Mejillas sonrojadas */}
              <circle cx="-5" cy="1" r="1.5" fill="#FFB3BA" opacity="0.7"/>
              <circle cx="5" cy="1" r="1.5" fill="#FFB3BA" opacity="0.7"/>
            </g>
          </g>
          
          {/* Letra "o" */}
          <text
            x="60"
            y="40"
            fontSize="32"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
            fill="white"
            stroke="black"
            strokeWidth="2"
            textAnchor="start"
          >
            o
          </text>
        </g>
        
        {/* Segundo "tomo" */}
        <g transform="translate(110, 30)">
          {/* Letra "t" */}
          <text
            x="0"
            y="40"
            fontSize="32"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
            fill="white"
            stroke="black"
            strokeWidth="2"
            textAnchor="start"
          >
            t
          </text>
          
          {/* Libro con personaje manga */}
          <g transform="translate(25, 0)">
            {/* Libro abierto */}
            <path
              d="M0 20 L0 60 L30 60 L30 20 L15 10 Z"
              fill="white"
              stroke="black"
              strokeWidth="2"
            />
            
            {/* Páginas del libro */}
            <path
              d="M2 22 L28 22 L28 58 L2 58 Z"
              fill="#F5F5F5"
            />
            
            {/* Líneas de texto japonés */}
            <line x1="5" y1="25" x2="25" y2="25" stroke="black" strokeWidth="0.5"/>
            <line x1="5" y1="28" x2="20" y2="28" stroke="black" strokeWidth="0.5"/>
            <line x1="5" y1="31" x2="22" y2="31" stroke="black" strokeWidth="0.5"/>
            <line x1="5" y1="34" x2="18" y2="34" stroke="black" strokeWidth="0.5"/>
            
            {/* Personaje manga */}
            <g transform="translate(15, 10)">
              {/* Cabeza */}
              <circle cx="0" cy="0" r="8" fill="#FFE0B2" stroke="black" strokeWidth="1"/>
              
              {/* Cabello */}
              <path
                d="M-6 -8 Q0 -12 6 -8 Q6 -4 0 -2 Q-6 -4 -6 -8 Z"
                fill="black"
              />
              
              {/* Ojos */}
              <circle cx="-3" cy="-2" r="2" fill="white" stroke="black" strokeWidth="0.5"/>
              <circle cx="3" cy="-2" r="2" fill="white" stroke="black" strokeWidth="0.5"/>
              <circle cx="-3" cy="-2" r="1" fill="black"/>
              <circle cx="3" cy="-2" r="1" fill="black"/>
              
              {/* Sonrisa */}
              <path
                d="M-3 2 Q0 5 3 2"
                fill="none"
                stroke="black"
                strokeWidth="1"
              />
              
              {/* Mejillas sonrojadas */}
              <circle cx="-5" cy="1" r="1.5" fill="#FFB3BA" opacity="0.7"/>
              <circle cx="5" cy="1" r="1.5" fill="#FFB3BA" opacity="0.7"/>
            </g>
          </g>
          
          {/* Letra "o" */}
          <text
            x="60"
            y="40"
            fontSize="32"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
            fill="white"
            stroke="black"
            strokeWidth="2"
            textAnchor="start"
          >
            o
          </text>
        </g>
        
        {/* Texto japonés debajo */}
        <text
          x="100"
          y="100"
          fontSize="12"
          fontFamily="Arial, sans-serif"
          fill="white"
          stroke="black"
          strokeWidth="1"
          textAnchor="middle"
        >
          一ヵオネおル
        </text>
      </svg>
    </div>
  );
};

export default Logo;
