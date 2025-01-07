import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

export const FacebookPixel = ({ pixelId }: { pixelId: string }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      ReactPixel.init(pixelId);
      ReactPixel.pageView();
    }
  }, [pixelId]);

  return null;
};
