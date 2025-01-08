import { useEffect } from 'react';
import Script from 'next/script';

// Declaração global para evitar erros de TypeScript
declare global {
  interface Window {
    dataLayer: Array<unknown>; // Substituindo 'any[]' por 'Array<unknown>'
    gtag?: (...args: unknown[]) => void; // Substituindo 'any[]' por 'unknown[]'
  }
}

export const GoogleAnalytics = ({ gaId }: { gaId: string }) => {
  useEffect(() => {
    // Inicializa o dataLayer e gtag, caso ainda não estejam definidos
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    if (!window.gtag) {
      window.gtag = (...args: unknown[]) => {
        window.dataLayer.push(args);
      };
    }

    const handleRouteChange = (url: string) => {
      if (typeof window.gtag === 'function') {
        window.gtag('config', gaId, {
          page_path: url,
        });
      }
    };

    // Adiciona evento de rastreamento em mudanças de rota
    window.addEventListener('popstate', () => handleRouteChange(window.location.pathname));

    return () => {
      window.removeEventListener('popstate', () => handleRouteChange(window.location.pathname));
    };
  }, [gaId]);

  return (
    <>
      {/* Script para carregar o Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      {/* Inicialização do gtag.js */}
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  );
};
