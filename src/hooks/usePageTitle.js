import { useEffect } from 'react';

const SITE_NAME = 'New Al Khan Engineering Works';

export function usePageTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Cosmetic & Pharmaceutical Machinery`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }

    return () => {
      document.title = `${SITE_NAME} | Cosmetic & Pharmaceutical Machinery`;
    };
  }, [title, description]);
}
