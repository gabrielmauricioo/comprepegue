import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { products } from "@/data/products"; // Importando do local correto

export function Hero() {
  return (
    <section className="px-4 py-6">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Nossos Produtos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="px-2 shadow-md rounded-lg">
            <CardContent className="flex flex-col items-center text-center space-y-3">
              <div className="relative w-full h-[200px] overflow-hidden rounded-md">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  layout="fill" 
                  objectFit="cover"
                  className="rounded-t-md"
                />
              </div>

              <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.brand}</p>

              <p className="text-lg font-semibold text-green-600">
                {product.price} <span className="text-sm line-through text-gray-400">{product.oldPrice}</span>
              </p>

              <Link href={`/produto/${product.id}`}>
                <Button className="w-full bg-green-500 hover:bg-green-600 transition">
                  Saiba mais
                </Button>
              </Link>

            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
