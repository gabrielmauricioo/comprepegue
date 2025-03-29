import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Configuração da fonte Montserrat

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

// Metadados do site
export const metadata: Metadata = {
  title: "Compre e Pegue | Loja de Móveis Usados em Foz do Iguaçu",
  description:
    "A Compre e Pegue oferece uma vasta seleção de móveis usados em excelente estado e prdutos seminovos com preços acessíveis e qualidade garantida. Encontre móveis para todos os ambientes da sua casa em Foz do Iguaçu e transforme seu espaço com estilo e economia.",
  keywords: "móveis usados, loja de móveis, Foz do Iguaçu, móveis baratos, móveis de qualidade, móveis para casa, móveis de segunda mão",
  openGraph: {
    title: "Compre e Pegue | Loja de Móveis Usados em Foz do Iguaçu",
    description:
      "Encontre móveis usados de qualidade para sua casa com preços acessíveis na Compre e Pegue, em Foz do Iguaçu.",
    url: "https://www.comprepeguefoz.com.br", // substitua com o seu link real
    type: "website",
    images: [
      {
        url: "/comprepeguelogo.png", // substitua com o link da sua imagem
        width: 831,
        height: 831,
        alt: "Compre e Pegue - Loja de Móveis Usados",
      },
    ],
  },
  
};

// IDs do Google Analytics e Facebook Pixel
const GA_ID = "G-XXXXXXXXXX"; // Substitua pelo seu ID do Google Analytics
const PIXEL_ID = "XXXXXXXXXXXXXXX"; // Substitua pelo seu ID do Facebook Pixel

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Script do Google Analytics */}
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Script do Facebook Pixel */}
        {PIXEL_ID && (
          <Script
            id="facebook-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}
      </head>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
