
import Image from "next/image";

export function Header() {
  

  return (
    <header className="flex flex-col items-center text-center p-4 bg-white shadow-md">
      {/* Logo da empresa */}
      <div className="relative w-36 h-36 mb-4">
        <Image 
          src="./logop.svg"
          alt="Logo da loja"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Texto de boas-vindas */}
      <h1 className="text-lg font-semibold text-gray-800">
        Seja bem-vindo(a) ao nosso Catálogo!✨
      </h1>
      <p className="text-sm text-gray-600">
         Descubra móveis usados e seminovos com preços incríveis em <strong>Foz do Iguaçu</strong>. Transforme sua casa com estilo e economia!
      </p>

      {/* Botão para ver os produtos */}
      <a
        href="#produtos"
        className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-green-600 transition"
      >
        Ver nossos produtos
      </a>
    </header>
    
  )
}
