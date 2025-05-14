'use client';

import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function BackToTopButton() {
    const scrollPosition = useScrollPosition();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const showButton = scrollPosition > 300;

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 w-12 h-12 bg-secondary text-white rounded-full shadow-lg flex items-center justify-center transform transition-transform duration-300 hover:bg-orange-500 ${showButton ? 'scale-100' : 'scale-0'}`}
            aria-label="Back to top"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6"/>
            </svg>
        </button>
    );
}