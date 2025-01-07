import Image from "next/image";
import { Card } from "../ui/card";

interface ItemFuncionaProps {
  passo: string;
  titulo: string;
  texto: string;
  url: string;
  alt: string;
}

export function ItemFunciona({ passo, titulo, texto, url, alt }: ItemFuncionaProps) {
  return (
    <Card className="flex sm:flex-row justify-between w-[340px] h-[400px] xl:w-[846px] xl:h-[256px] xl:shadow-custom-card shadow-custom-card-2 mb-6 place-items-center">
      <div className="flex flex-col justify-center xl:ml-14 mx-auto">
        <h4 className="text-[18px] text-center xl:text-left">{passo}</h4>
        <h3 className="text-2xl mt-2 text-center xl:text-left">{titulo}</h3>
        <p className="w-full xl:max-w-[524px] max-w-[300px] mx-auto  mt-4 leading-[140%] text-[#4A4A4A] text-center xl:text-left">{texto}</p>
      </div>

      {/* A imagem só será exibida em telas médias e maiores */}
      <Image
        className="hidden sm:block"
        src={url}
        width={216}
        height={256}
        alt={alt}
      />
    </Card>
  );
}
