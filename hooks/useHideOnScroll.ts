import { useEffect, useRef, useState } from 'react';

/**
 * Detects scroll direction and returns whether the header should be hidden.
 * Hides when scrolling down past a small threshold, shows when scrolling up.
 */
export default function useHideOnScroll({ threshold = 80, tolerance = 5 } = {}) {
    const [hidden, setHidden] = useState(false);
    const lastY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
    const ticking = useRef(false);

    useEffect(() => {
        const handle = () => {
            const currentY = window.scrollY;

            // ignore tiny scrolls
            if (Math.abs(currentY - lastY.current) <= tolerance) {
                ticking.current = false;
                return;
            }

            if (currentY > lastY.current && currentY > threshold) {
                // scrolling down
                setHidden(true);
            } else {
                // scrolling up
                setHidden(false);
            }

            lastY.current = currentY;
            ticking.current = false;
        };

        const onScroll = () => {
            if (!ticking.current) {
                ticking.current = true;
                requestAnimationFrame(handle);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [threshold, tolerance]);

    return hidden;
}
