'use client';
import { useState } from "react";
import Link from "next/link";
import { GridContainer } from "../GridContainer";
import Image from "next/image";

export function Header2() {
  

  return (
    <header className="flex flex-col items-center text-center p-4 bg-white shadow-md pb-10">
      {/* Logo da empresa */}
      <div className="relative w-36 h-36 mb-4">
      <Image 
        src="/logop.svg" // Agora o caminho é absoluto
        alt="Logo da loja"
        width={150} // Defina a largura da imagem
        height={150} // Defina a altura da imagem
        objectFit="contain"
      />
      </div>

      {/* Texto de boas-vindas */}
      <h1 className="text-lg font-semibold text-gray-800">
        Seja bem-vindo(a)!
      </h1>
      <p className="text-sm text-gray-600">
        Loja de móveis usados e produtos seminovos localizada em <strong>Foz do Iguaçu</strong>
      </p>

      {/* Botão para ver os produtos */}
      <a
        href="http://192.168.1.14:3000/"
        className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-green-600 transition"
      >
        Voltar
      </a>
    </header>
    
  )
}
