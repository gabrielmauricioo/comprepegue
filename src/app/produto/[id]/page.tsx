import Image from "next/image";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { Funciona } from "@/components/Funciona";
import { Footer } from "@/components/Footer";
import { Header2 } from "@/components/Header2";

export default function Produto({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return notFound(); // Retorna automaticamente para a página 404
  }

  // Número do WhatsApp (adicione seu número no formato internacional)
  const phoneNumber = "+5521983357561"; // Troque pelo seu número
  
  // Mensagem personalizada para o WhatsApp
  const message = encodeURIComponent(
    `Olá! Gostaria de saber mais sobre o produto *${product.name}*, poderia me enviar mais fotos e informações?`
  );

  // Link do WhatsApp
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  return (
    <>
      <Header2 />
      <section className="flex justify-center mt-12 px-4">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-sm">
          {/* Imagem do Produto */}
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />

          {/* Detalhes do Produto */}
          <div className="p-5">
            <h2 className="text-gray-900 text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600 text-sm mt-2">{product.description}</p>

            {/* Características */}
            <div className="mt-4">
              <h3 className="text-gray-800 font-semibold">Características:</h3>
              <ul className="text-sm text-gray-700 mt-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Preço */}
            <div className="mt-4 flex items-center gap-2">
              <span className="text-green-600 text-2xl font-bold">
                {product.price}
              </span>
              <span className="text-gray-400 text-sm line-through">
                {product.oldPrice}
              </span>
            </div>

            {/* Botão de Compra para WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full block bg-green-500 text-white font-semibold py-2 text-center rounded-lg hover:bg-green-600 transition"
            >
              Comprar via WhatsApp
            </a>
          </div>
        </div>
      </section>
      <Funciona />
      <Footer />
    </>
  );
}


// Gerando caminhos estáticos
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
