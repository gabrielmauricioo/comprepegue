import { Agendar } from "@/components/Agendar";
import { Benefits } from "@/components/Benefits";
import { Footer } from "@/components/Footer";
import { Footer2 } from "@/components/Footer2";
import { Funciona } from "@/components/Funciona";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Questions } from "@/components/Questions";
import { Sobre } from "@/components/Sobre";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Benefits/>
      <Sobre/>
      <Funciona/>
      <Testimonials/>
      <Agendar/>
      <Questions/>
      <Footer/>
      <Footer2/> 
    </>
  );
}