'use client';

import { useState, useEffect } from 'react';

/**
 * A hook that tracks window scroll position
 */
export function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        // Add event listener
        window.addEventListener('scroll', handleScroll);

        // Call handler initially to set initial position
        handleScroll();

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPosition;
}