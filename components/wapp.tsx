'use client'

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';


export function WhatsAppFloatingButton() {
  useEffect(() => {
    // Ensure the icon is always floating on the screen
    const style = document.createElement('style');
    style.innerHTML = `
      .whatsapp-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #25D366;
        color: white;
        border-radius: 50%;
        padding: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        z-index: 9999;
        font-size: 30px;
      }
      .whatsapp-button:hover {
        background-color: #128C7E;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const phoneNumber = "+254726629335"; 
  const message = "Hi, please tell me more about your services";

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <MessageCircle />
    </Link>
  );
}
