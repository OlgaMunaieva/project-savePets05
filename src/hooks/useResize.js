import { debounce } from 'lodash';

const { useState, useEffect } = require('react');

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    let animationFrameId;

    const handleResize = () => {
      animationFrameId = requestAnimationFrame(() => {
        setWidth(window.innerWidth);
      });
    };
    // Используем debounce для задержки выполнения запроса на сервер
    const debouncedHandleResize = debounce(handleResize, 500);

    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return {
    width,
  };
};
