'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface SearchPanelProps {
    onClose?: () => void;
}

export default function SearchPanel({ onClose }: SearchPanelProps) {
    const [query, setQuery] = useState('');
    const [suggestions] = useState([
        'Rehabilitation services',
        'Physical therapy',
        'Find a doctor',
        'Telehealth appointments',
        'Insurance coverage',
        'Patient portal login',
        'Payment options',
        'Locations near me'
    ]);
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    // Focus the input when the component mounts
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    // Filter suggestions when query changes
    useEffect(() => {
        if (query.trim() === '') {
            setFilteredSuggestions([]);
            return;
        }

        // Simulate loading
        setIsLoading(true);

        const timer = setTimeout(() => {
            const filtered = suggestions.filter(
                suggestion => suggestion.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredSuggestions(filtered);
            setIsLoading(false);
        }, 300); // Small delay for better UX

        return () => clearTimeout(timer);
    }, [query, suggestions]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        if (query.trim()) {
            // Redirect to search page with query parameter
            router.push(`/search?query=${encodeURIComponent(query.trim())}`);

            // Close the search panel
            if (onClose) {
                onClose();
            }
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setQuery(suggestion);
        // Redirect immediately when clicking a suggestion
        router.push(`/search?query=${encodeURIComponent(suggestion)}`);

        // Close the search panel
        if (onClose) {
            onClose();
        }
    };

    const handlePopularSearchClick = (tag: string) => {
        setQuery(tag);
        // Redirect immediately when clicking a popular search
        router.push(`/search?query=${encodeURIComponent(tag)}`);

        // Close the search panel
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className="py-4">
            <form onSubmit={handleSearch} className="relative">
                <div className="flex items-center border-2 border-teal-500 rounded-lg focus-within:ring-2 focus-within:ring-teal-300 overflow-hidden">
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for services, doctors, locations..."
                        className="w-full px-4 py-3 focus:outline-none text-gray-700"
                        aria-label="Search"
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 flex items-center justify-center hover:from-teal-600 hover:to-teal-700 transition-colors"
                        aria-label="Submit search"
                    >
                        {isLoading ? (
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Search suggestions */}
                {filteredSuggestions.length > 0 && (
                    <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden">
                        <div className="p-2 bg-gray-50 text-gray-500 text-sm font-medium">
                            Suggestions
                        </div>
                        <ul>
                            {filteredSuggestions.map((suggestion, index) => (
                                <li key={index}>
                                    <button
                                        type="button"
                                        onClick={() => handleSuggestionClick(suggestion)}
                                        className="w-full text-left px-4 py-2 hover:bg-teal-50 text-gray-700 transition-colors"
                                    >
                                        {suggestion}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </form>

            <div className="mt-4 flex flex-wrap gap-2">
                <div className="text-sm text-gray-500 mr-2">Popular searches:</div>
                {['Find a doctor', 'Insurance', 'Locations', 'COVID-19'].map((tag, index) => (
                    <button
                        key={index}
                        onClick={() => handlePopularSearchClick(tag)}
                        className="px-3 py-1 bg-gray-100 hover:bg-teal-50 text-gray-700 hover:text-teal-600 rounded-full text-sm transition-colors"
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}