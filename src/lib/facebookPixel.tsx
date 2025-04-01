"use client";
import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const options = {
  autoConfig: true, // Configuração automática do Pixel
  debug: false, // Defina como true para ver logs no console
};

export const FacebookPixel = ({ pixelId }: { pixelId: string }) => {
  useEffect(() => {
    if (typeof window !== "undefined" && pixelId) {
      ReactPixel.init(pixelId, undefined, options);
      ReactPixel.pageView();
    }
  }, [pixelId]);

  return null;
};
