import { env } from "@/config/env";

export function sendWhatsAppMessage(){
  const message = "Olá, gostaria de agendar uma consulta.";
  const phoneNumber = env.WHATSAPP
  // Formata o número e a mensagem para que possam ser usados na URL
  const formattedMessage = encodeURIComponent(message); // Ex: Olá, preciso de ajuda

  // Detecta se é dispositivo móvel (incluindo tablets)
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // URL para envio de mensagem no WhatsApp
  const whatsappUrl = isMobile 
    ? `whatsapp://send?phone=${phoneNumber}&text=${formattedMessage}` // Tenta abrir o app do WhatsApp no celular
    : `https://wa.me/${phoneNumber}?text=${formattedMessage}`; // Usa o WhatsApp Web se for desktop

  // Tenta abrir a URL do WhatsApp
  window.open(whatsappUrl, "_blank");
}