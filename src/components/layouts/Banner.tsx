'use client';

import { useState, useRef, useEffect } from 'react';

export default function Banner() {
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const infoRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                infoRef.current &&
                buttonRef.current &&
                !infoRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsInfoOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-gray-100 border-b border-gray-200">
            <div className="container mx-auto px-4 py-2">
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                        <span className="mr-2">🇺🇸</span>
                        <span>An official website of ContiguU Health Services</span>
                    </div>
                    <div className="relative">
                        <button
                            ref={buttonRef}
                            className="flex items-center text-blue-600 hover:text-blue-800"
                            onClick={() => setIsInfoOpen(!isInfoOpen)}
                        >
                            Here&apos;s how you know
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 ml-1 transition-transform ${isInfoOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div
                            ref={infoRef}
                            className={`absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg p-4 z-1000 text-gray-700 ${isInfoOpen ? 'block' : 'hidden'}`}
                        >
                            <p className="mb-2">Official websites use .gov</p>
                            <p className="mb-4">A .gov website belongs to an official government organization in the United States.</p>
                            <p className="mb-2">Secure websites use HTTPS</p>
                            <p>A lock or https:// means you&apos;ve safely connected to the .gov website.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}