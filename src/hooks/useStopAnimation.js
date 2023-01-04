import { useEffect, useState } from 'react';

/**
 * useStopAnimation React Hook
 * Adds the class .resize-animation-stopper to the body whenever
 * the window is being resized and removes it when resizing stops.
 * This prevents unwanted animations from triggering
 * as a result of the changing window size.
 */

export const useStopAnimation = () => {
  const [resizeTimer, setResizeTimer] = useState('');

  useEffect(() => {
    const stopAnimation = () => {
      document.body.classList.add('resize-animation-stopper');
      clearTimeout(resizeTimer);

      setResizeTimer(
        setTimeout(() => {
          document.body.classList.remove('resize-animation-stopper');
        }, 400)
      );
    };

    window.addEventListener('resize', stopAnimation);

    return () => window.removeEventListener('resize', stopAnimation);
  }, []);
};
