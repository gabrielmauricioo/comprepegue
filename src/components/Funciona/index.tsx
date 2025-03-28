
import { MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Funciona() {
  const whatsappNumber = "5521983357561"; // Substitua pelo seu número de WhatsApp
  const message = encodeURIComponent("Olá! Tenho algumas dúvidas sobre como comprar na *Compre e Pegue*.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-md rounded-2xl md:max-w-lg md:p-6">
      <div className="text-center py-8">
        <Badge className="bg-green-500 text-white px-3 py-1 rounded-full text-lg text-center">Como funciona</Badge>
      </div>

      <p className="text-gray-700 mb-4 text-sm md:text-lg">
        Comprar com a gente é simples, rápido e seguro! Veja como funciona o processo:
      </p>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-sm md:text-base">1️⃣ Escolha o seu produto</h3>
          <p className="text-gray-600 text-xs md:text-sm">
            Navegue pelo nosso catálogo e selecione o item desejado. Você poderá visualizar todas as especificações antes de decidir sua compra.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-sm md:text-base">2️⃣ Entre em contato pelo WhatsApp</h3>
          <p className="text-gray-600 text-xs md:text-sm">
            Ao clicar em "Comprar", você será automaticamente direcionado para o WhatsApp de um dos nossos atendentes.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-sm md:text-base">3️⃣ Finalize sua compra com segurança</h3>
          <p className="text-gray-600 text-xs md:text-sm">
            Nosso atendimento é rápido e personalizado para garantir a melhor experiência.
          </p>
        </div>
      </div>

      <div className="mt-6 border-t pt-4 items-center text-center">
        <h3 className="font-semibold text-sm md:text-base">📦 Retirada e Entrega</h3>
        <p className="text-gray-600 text-xs md:text-sm">
          Oferecemos opções de retirada e envio, dependendo do produto e da sua localização.
        </p>
      </div>

      <div className="mt-6 text-center flex flex-col items-center">
        <p className="text-gray-700 font-semibold text-sm md:text-base">Dúvidas?</p>
        <p className="text-gray-600 text-xs md:text-sm mb-3 max-w-xs text-center">
          Estamos à disposição para ajudar! Clique no botão abaixo e fale com a gente no WhatsApp. 🚀
        </p>
        
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Tirar dúvidas</span>
        </a>
      </div>
    </div>
  );
}
