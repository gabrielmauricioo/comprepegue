'use client';
import { useState } from "react";
import Link from "next/link";
import { GridContainer } from "../GridContainer";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="mt-10">
      <GridContainer>
        <div className="flex items-center justify-between py-4">
          {/* Botão para o menu hambúrguer (mobile) - Centralizado */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden focus:outline-none absolute left-1/2 transform -translate-x-1/2"
          >
            <Image
              src="/ham-icon.svg"
              width={24}
              height={24}
              alt="Ícone do menu hambúrguer"
            />
          </button>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex justify-center w-full">
            <ul className="flex gap-14">
              <li>
                <Link href="#home" className="text-base hover:text-[#8C8C8C]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="text-base hover:text-[#8C8C8C]">
                  Sobre mim
                </Link>
              </li>
              <li>
                <Link href="#funciona" className="text-base hover:text-[#8C8C8C]">
                  Como funciona
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className="text-base hover:text-[#8C8C8C]">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#duvidas" className="text-base hover:text-[#8C8C8C]">
                  Dúvidas
                </Link>
              </li>
            </ul>
          </nav>

          {/* Menu Mobile */}
          <nav
            className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } w-[70vw] z-50 md:hidden`}
          >
            <div className="flex flex-col items-start p-6">
              <button 
                onClick={closeMenu} 
                className="self-end mb-4 focus:outline-none"
              >
                <Image
                  src="/close-icon.svg"
                  width={24}
                  height={24}
                  alt="Ícone para fechar o menu"
                />
              </button>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="#home" className="text-base hover:text-[#8C8C8C]" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#sobre" className="text-base hover:text-[#8C8C8C]" onClick={closeMenu}>
                    Sobre mim
                  </Link>
                </li>
                <li>
                  <Link href="#funciona" className="text-base hover:text-[#8C8C8C]" onClick={closeMenu}>
                    Como funciona
                  </Link>
                </li>
                <li>
                  <Link href="#depoimentos" className="text-base hover:text-[#8C8C8C]" onClick={closeMenu}>
                    Depoimentos
                  </Link>
                </li>
                <li>
                  <Link href="#duvidas" className="text-base hover:text-[#8C8C8C]" onClick={closeMenu}>
                    Dúvidas
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </GridContainer>
    </header>
  );
}
