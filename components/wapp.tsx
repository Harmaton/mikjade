"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export function WhatsAppFloatingButton() {
  useEffect(() => {
    // Ensure the icon is always floating on the screen
    const style = document.createElement("style");
    style.innerHTML = `
      .whatsapp-button {
        position: fixed;
        bottom: 40px; /* Increased spacing */
        right: 40px; /* Increased spacing */
        background-color: #25D366;
        color: white;
        border-radius: 50px;
        padding: 12px 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        z-index: 9999;
        font-size: 16px;
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: bold;
        transition: background-color 0.3s ease-in-out;
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
  const message = "Hi, I’d like to get a quote for your services.";

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <MessageCircle size={20} />
      Get a Quote
    </Link>
  );
}
