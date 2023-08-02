import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const debouncedHandleResize = debounce(handleResize, 500);

    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [handleResize]);

  useEffect(() => {}, [width]);

  return {
    width,
  };
};
