import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { products } from "@/data/products"; 

export function Hero() {
  return (
    <section className="px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Nossos Produtos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card
            key={product.id}
            className="shadow-lg rounded-xl overflow-hidden bg-white transition-transform hover:scale-105"
          >
            <div className="relative w-[373px] h-[430px] mx-auto bg-gray-200">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={373} 
                height={430} 
                objectFit="cover" 
                className="rounded-t-xl"
              />
            </div>

            <CardContent className="flex flex-col items-center text-center p-5 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.brand}</p>

              <p className="text-xl font-bold text-green-600">
                {product.price} 
                <span className="text-sm line-through text-gray-400 ml-2">
                  {product.oldPrice}
                </span>
              </p>

              <Link href={`/produto/${product.id}`} className="w-full">
                <Button className="w-full bg-green-500 hover:bg-green-600 transition font-medium py-2 rounded-lg">
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
