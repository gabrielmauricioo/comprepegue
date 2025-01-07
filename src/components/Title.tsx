import Image from "next/image";
import { Badge } from "./ui/badge";


interface ItemTitleProps {
  texto: string
}


export function Title({texto}: ItemTitleProps){
  return(
    <Badge className="px-6 py-2 bg-blue-light rounded-2xl gap-2 ">
      <Image
        src="/circle-icon.svg"
        width={7}
        height={7}
        alt="icone"
     />
     <p className="text-black font-normal text-base">{texto}</p>
    </Badge>
    
  )
}