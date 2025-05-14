'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle search submission
        console.log('Search for facilities in:', { city, zipcode });
        // Here you would typically redirect to search results page
    };


    return (
        <section
            className="bg-[#8cccf4] pt-10 md:pt-4 px-5 text-center relative overflow-hidden flex flex-col justify-center"
        >
            {/* Content (now with z-10 to position above the background) */}
            <div className="relative z-10">
                <div className="inline-block bg-white/80 text-primary px-5 py-2 rounded-full text-sm font-medium shadow-sm mb-6">
                    Healthcare Simplified
                </div>

                <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 max-w-3xl mx-auto leading-tight">
                    Connecting Patients to Inpatient Rehab
                </h1>

                <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
                    Find and compare inpatient rehabilitation facilities in your area with our easy-to-use search tool. Get connected to the care you need today.
                </p>

                <form className="max-w-3xl mx-auto mb-10" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-md bg-white">
                        <div className="flex items-center flex-1 border-b md:border-b-0 md:border-r border-gray-200">
                            <span className="text-gray-400 pl-6">📍</span>
                            <input
                                type="text"
                                className="w-full py-5 px-3 text-base outline-none text-gray-500"
                                placeholder="Enter city or state"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center flex-1">
                            <span className="text-gray-400 pl-6">📮</span>
                            <input
                                type="text"
                                className="w-full py-5 px-3 text-base outline-none text-gray-500"
                                placeholder="Enter zipcode"
                                value={zipcode}
                                onChange={(e) => setZipcode(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-secondary text-white py-5 px-8 text-lg font-semibold whitespace-nowrap hover:bg-orange-500 transition-colors"
                        >
                            Find Care
                        </button>
                    </div>
                </form>

                <div className="flex md:flex-row justify-center gap-4 md:gap-12 mb-12">
                    <div className="flex items-center text-base text-gray-600 font-medium">
                        <span className="text-primary mr-2">✓</span> Verified facilities
                    </div>
                    <div className="flex items-center text-base text-gray-600 font-medium">
                        <span className="text-yellow-400 mr-2">★</span> Patient reviews
                    </div>
                    <div className="flex items-center text-base text-gray-600 font-medium">
                        <span className="text-secondary mr-2">⚡</span> Instant results
                    </div>
                </div>

                <Image
                    src="/landing-img.png"
                    width={0}
                    height={400}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt=""
                />
            </div>
        </section>
    );
}