'use client'
import Image from "next/image";
import { useState } from "react";


interface ItemQuestionsProps {
  title: string
  response: string

}

export function ItemQuestions({title, response}: ItemQuestionsProps){
  const [open, setOpen] = useState(false);
  function handleOpenQuestion() {
    setOpen(!open)
  }

  return(
    <div className="w-full first:pt-0 pt-6 pb-8">
      <button className="w-full flex items-center justify-between" onClick={handleOpenQuestion}>
        <h3 className="text-base font-medium">{title}</h3>
        {
          open ? <Image src='/circle-min-icon.svg' width={24} height={24} alt="j"/>:
          <Image src='/circle-max-icon.svg' width={24} height={24} alt="j"/>
        }
      </button>
      {
        open && <p className="mt-2 text-[#4A4A4A] leading-7 pr-12 ">{response}</p>
      }
      
    </div>
  )
}