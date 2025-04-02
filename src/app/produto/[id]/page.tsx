import { Metadata } from "next";
import Image from "next/image";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { Funciona } from "@/components/Funciona";
import { Footer } from "@/components/Footer";
import { Header2 } from "@/components/Header2";

interface ProdutoPageProps {
  params?: { id?: string };
}

export default async function Produto({ params }: ProdutoPageProps) {
  if (!params?.id) {
    return notFound();
  }

  const productId = Number(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return notFound();
  }

  // Número do WhatsApp
  const phoneNumber = "+5545999541641"; 
  const message = encodeURIComponent(
    `Olá! Gostaria de saber mais sobre o produto *${product.name}*, poderia me enviar mais fotos e informações?`
  );
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  return (
    <>
      <Header2 />
      <section className="flex justify-center mt-12 px-4">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-sm">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <div className="p-5">
            <h2 className="text-gray-900 text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600 text-sm mt-2">{product.description}</p>

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

            <div className="mt-4 flex items-center gap-2">
              <span className="text-green-600 text-2xl font-bold">
                {product.price}
              </span>
              {product.oldPrice && (
                <span className="text-gray-400 text-sm line-through">
                  {product.oldPrice}
                </span>
              )}
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full block bg-green-500 text-white font-semibold py-2 text-center rounded-lg hover:bg-green-600 transition"
            >
              Fale com nossos consultures
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

// Gerando metadados dinâmicos
export async function generateMetadata({ params }: ProdutoPageProps): Promise<Metadata> {
  if (!params?.id) {
    return {
      title: "Produto não encontrado",
      description: "O produto que você procura não foi encontrado.",
    };
  }

  const productId = Number(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return {
      title: "Produto não encontrado",
      description: "O produto que você procura não foi encontrado.",
    };
  }

  return {
    title: `Comprar ${product.name} | Loja`,
    description: product.description,
  };
}
