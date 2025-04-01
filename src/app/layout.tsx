import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { FacebookPixel } from "@/lib/facebookPixel";
import "./globals.css";

// Configuração da fonte
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

// Metadados do site
export const metadata: Metadata = {
  title: "Compre e Pegue | Loja de Móveis Usados em Foz do Iguaçu",
  description:
    "A Compre e Pegue oferece móveis usados de qualidade com preços acessíveis em Foz do Iguaçu.",
  keywords:
    "móveis usados, loja de móveis, Foz do Iguaçu, móveis baratos, móveis de qualidade",
  openGraph: {
    title: "Compre e Pegue | Loja de Móveis Usados em Foz do Iguaçu",
    description:
      "Encontre móveis usados de qualidade para sua casa com preços acessíveis.",
    url: "https://www.comprepeguefoz.com.br",
    type: "website",
    images: [
      {
        url: "/comprepeguelogo.png",
        width: 831,
        height: 831,
        alt: "Compre e Pegue - Loja de Móveis Usados",
      },
    ],
  },
};

// IDs do Google Analytics e Facebook Pixel
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ""; 
const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
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

        {/* Facebook Pixel */}
        {PIXEL_ID && (
          <>
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
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        )}
      </head>
      <body className={poppins.className}>
        {/* Componente que ativa o Facebook Pixel */}
        {PIXEL_ID && <FacebookPixel pixelId={PIXEL_ID} />}
        {children}
      </body>
    </html>
  );
}
