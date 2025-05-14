/*
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface DropdownOption {
    label: string;
    href: string;
}

interface NavigationItem {
    label: string;
    options: DropdownOption[];
}

const navigationItems: NavigationItem[] = [
    {
        label: 'Inpatient Rehab',
        options: [
            { label: 'Rehab Programs', href: '#' },
            { label: 'Facilities', href: '#' },
            { label: 'Services', href: '#' },
        ],
    },
    {
        label: 'Outpatient Services',
        options: [
            { label: 'Physical Therapy', href: '#' },
            { label: 'Occupational Therapy', href: '#' },
            { label: 'Speech Therapy', href: '#' },
        ],
    },
    {
        label: 'Provider Directory',
        options: [
            { label: 'Find a Doctor', href: '#' },
            { label: 'Specialists', href: '#' },
            { label: 'Clinics', href: '#' },
        ],
    },
    {
        label: 'Payment & Insurance',
        options: [
            { label: 'Accepted Insurance', href: '#' },
            { label: 'Billing', href: '#' },
            { label: 'Financial Assistance', href: '#' },
        ],
    },
    {
        label: 'Patient Resources',
        options: [
            { label: 'Forms', href: '#' },
            { label: 'Patient Portal', href: '#' },
            { label: 'Education', href: '#' },
        ],
    },
];

export default function Navigation() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <nav className="bg-white border-b border-gray-200 hidden md:block">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    {navigationItems.map((item) => (
                        <div
                            key={item.label}
                            className="relative group"
                            onMouseEnter={() => setOpenDropdown(item.label)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button className="py-4 px-4 text-teal-600 hover:text-teal-800 flex items-center">
                                {item.label}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded shadow-lg z-10 ${openDropdown === item.label ? 'block' : 'hidden'}`}
                            >
                                {item.options.map((option) => (
                                    <Link
                                        key={option.label}
                                        href={option.href}
                                        className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                                    >
                                        {option.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}*/
