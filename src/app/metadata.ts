import type { Metadata, Viewport } from 'next';

// Base metadata that will be used across the site
export const baseMetadata: Metadata = {
    title: {
        template: '%s | ContigoU Health Services',
        default: 'ContigoU Health Services',
    },
    description: 'Connecting Patients to Healthcare Solutions. Find and compare inpatient rehabilitation facilities in your area.',
    keywords: ['healthcare', 'rehabilitation', 'inpatient care', 'health services', 'medical facilities', 'healthcare platform'],
    authors: [{ name: 'ContigoU Team' }],
    creator: 'ContigoU',
    publisher: 'ContigoU Health Services',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://contigou.com',
        siteName: 'ContigoU Health Services',
        title: 'ContigoU Health Services',
        description: 'Connecting Patients to Healthcare Solutions. Find and compare inpatient rehabilitation facilities in your area.',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'ContigoU Health Services',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ContigoU Health Services',
        description: 'Connecting Patients to Healthcare Solutions. Find and compare inpatient rehabilitation facilities in your area.',
        images: ['/images/twitter-image.jpg'],
        creator: '@ContigoU',
    },
    robots: {
        index: true,
        follow: true,
    },
};

// Viewport configuration
export const viewport: Viewport = {
    themeColor: '#4aadb5',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
};