// components/ads/VerticalAdBanner.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

interface VerticalAdBannerProps {
    className?: string;
    stopAt: string; // ID of element where the banner should stop being sticky
}

export default function VerticalAdBanner({ className = '', stopAt }: VerticalAdBannerProps) {
    const [isSticky, setIsSticky] = useState(true);
    const adRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!adRef.current) return;

            // Get the element where we should stop being sticky
            const stopElement = document.getElementById(stopAt);
            if (!stopElement) return;

            // Get the position of the stop element
            const stopPosition = stopElement.getBoundingClientRect().top;

            // If stop element is about to come into view, disable sticky
            if (stopPosition <= window.innerHeight) {
                setIsSticky(false);
            } else {
                setIsSticky(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial render

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [stopAt]);

    return (
        <div
            ref={adRef}
            className={`
        w-52 h-96 bg-white shadow-md rounded-lg flex flex-col items-center justify-center
        border border-gray-200 text-center p-4
        ${isSticky ? 'sticky top-24' : 'relative'}
        ${className}
      `}
        >
            <div className="text-xs uppercase tracking-wide text-gray-400 mb-2">Advertisement</div>
            <div className="text-xl font-medium text-gray-700 mb-4">Place Your Ad Here</div>
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            </div>
            <div className="text-sm text-gray-500 mb-4">
                Vertical Rectangle<br />(300×600)
            </div>
            <button className="bg-secondary text-white py-2 px-4 rounded-full text-sm hover:bg-orange-500 transition-colors">
                Advertise With Us
            </button>
        </div>
    );
}