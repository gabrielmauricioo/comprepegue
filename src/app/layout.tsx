import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Configuração da fonte Montserrat
const montserrat = Montserrat({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

// Metadados do site
export const metadata: Metadata = {
  title: "Psicólogo Bruno Machado",
  description:
    "Bruno Machado, psicólogo, oferece acolhimento e estratégias eficazes para ajudar você a superar desafios e alcançar equilíbrio emocional com confiança!",
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
