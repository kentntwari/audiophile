import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  const scrollToTop = useCallback(() => {
    if (pathname) return window.scrollTo(0, 0);
  }, [pathname]);

  return scrollToTop;
};

export default useScrollToTop;
