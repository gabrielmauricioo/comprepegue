import Image from "next/image"
import {
  Card,
  CardContent,
  CardTitle,
} from "../ui/card"
import { 
  
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle
 } from "../ui/dialog"

 interface ItemBenefitsProps {
  url: string
  titulo: string
  description: string
  dialogTitle: string
  dialogDescription: string
 }



export function ItemBenefits({url, titulo, description, dialogTitle, dialogDescription}: ItemBenefitsProps){
  return(
    
      <Card className="flex flex-col items-center  w-[305px] justify-center ">
        <CardContent className="flex flex-col items-center mt-10">
            <Image
              src={url}
              width={87}
              height={87}
              alt="Icone de ansiedade"
              className="mb-4"
            />
            <p className="text-black text-[18px] mb-3">{titulo}</p>
            <p className="text-gray-500 text-center">{description}</p>
            <Dialog>
              <DialogTrigger>
                <CardTitle className="text-sm text-blue-dark font-medium mt-4 hover:opacity-40 transition-opacity">Saiba mais →</CardTitle>
              </DialogTrigger>
              <DialogContent className=" p-12 bg-white rounded-lg">
                <DialogHeader>
                  <DialogTitle className="text-center mb-5">{dialogTitle}</DialogTitle>
                  <DialogDescription className="text-center">
                   {dialogDescription}
                  </DialogDescription>
              </DialogHeader>
            </DialogContent>
            </Dialog>
          </CardContent>  
      </Card>  
  )
}