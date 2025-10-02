// components/FullscreenModal.tsx
'use client';

import React, { useEffect, useState } from 'react';

export default function FullscreenModal() {
  const [isVisible, setIsVisible] = useState(true);

  const enterFullscreen = () => {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if ((elem as any).webkitRequestFullscreen) {
      (elem as any).webkitRequestFullscreen();
    } else if ((elem as any).msRequestFullscreen) {
      (elem as any).msRequestFullscreen();
    }

    setIsVisible(false); // Fecha o modal após entrar em fullscreen
  };

  // Impede scroll enquanto o modal estiver aberto
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fullscreen-modal font-bricolage text-black">
      <div className="modal-content">
        <h2>Bem-vindo!</h2>
        <p>Para a melhor experiência, entre em modo tela cheia.</p>
        <button onClick={enterFullscreen}>Entrar em tela cheia</button>
      </div>
      <style jsx>{`
        .fullscreen-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          backdrop-filter: blur(8px);
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        }

        button {
          margin-top: 1rem;
          padding: 0.5rem 1.5rem;
          font-size: 1rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
