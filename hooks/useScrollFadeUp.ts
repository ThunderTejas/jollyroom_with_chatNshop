
import { useEffect, useRef, useState, CSSProperties } from 'react';

export default function useScrollFadeUp(options?: IntersectionObserverInit) {
	const ref = useRef<HTMLElement | null>(null);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				// mark visible when at least 10% of the element is in view
				setVisible(entry.intersectionRatio >= 0.1);
			},
			{ threshold: [0, 0.1, 0.5, 1], ...options }
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [ref, options]);

	const style: CSSProperties = {
		transition: 'opacity 400ms ease, transform 400ms ease',
		opacity: visible ? 1 : 0,
		transform: visible ? 'translateY(0)' : 'translateY(-30px)',
		willChange: 'opacity, transform',
	};

	return { ref, style, visible } as const;
}
