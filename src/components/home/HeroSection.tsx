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
        <section className="pt-10 md:pt-4 px-5 text-center relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/landing-img.png"
                    alt="Healthcare background"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 to-blue-100/80"></div>
            </div>

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

                <div className="relative max-w-6xl mx-auto">
                    {/* Circular images */}
                    <div className="hidden md:block absolute w-28 h-24 lg:w-28 lg:h-28 rounded-full border-4 border-white shadow-lg overflow-hidden top-[0%] left-[10%] lg:left-[15%]">
                        <Image
                            src="https://www.claudeusercontent.com/api/placeholder/150/150"
                            alt="Healthcare professional"
                            width={150}
                            height={150}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="hidden md:block absolute w-28 h-24 lg:w-28 lg:h-28 rounded-full border-4 border-white shadow-lg overflow-hidden bottom-[10%] left-[23%] z-10">
                        <Image
                            src="https://www.claudeusercontent.com/api/placeholder/150/150"
                            alt="Dental patient"
                            width={150}
                            height={150}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="hidden md:block absolute w-28 h-24 lg:w-28 lg:h-28 rounded-full border-4 border-white shadow-lg overflow-hidden top-[8%] right-[22%] lg:right-[24%]">
                        <Image
                            src="https://www.claudeusercontent.com/api/placeholder/150/150"
                            alt="Patient in therapy"
                            width={150}
                            height={150}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Rating bubble */}
                    <div className="bubble-box hidden md:block absolute bg-white rounded-full py-3 px-5 shadow-md top-[45%] left-[12%] lg:left-[12%] z-10 transition-transform hover:scale-105">
                        <div className="text-secondary font-semibold text-sm whitespace-nowrap">Rated 4.8+ by 1,000+ patients</div>
                    </div>

                    {/* Phone mockup with map */}
                    <div className="w-[19rem] h-[20rem] md:w-64 md:h-[21rem] lg:w-[24rem] lg:h-[26rem] mx-auto relative p-3 z-10" style={{ paddingBottom: 0 }}>
                        <Image
                            src="/phone.png"
                            alt="Map showing nearby facilities"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Facility card */}
                    <div className="bubble-box-top-left hidden md:block absolute bg-white rounded-xl p-4 lg:p-5 w-52 lg:w-64 shadow-lg right-[10%] bottom-[16%] z-10 text-left transition-transform hover:scale-105">
                        <div className="font-bold text-lg mb-2 text-gray-800">Wellness Rehab Center</div>
                        <div className="flex items-center mb-2">
                            <div className="text-yellow-400 mr-2 text-sm tracking-wider">★★★★<span className="opacity-50">★</span></div>
                            <div className="text-gray-500 text-sm">2.3 mi Away</div>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <div className="bg-gray-100 px-3 py-1.5 rounded-md text-xs text-gray-600 font-medium">Physical Therapy</div>
                            <div className="bg-gray-100 px-3 py-1.5 rounded-md text-xs text-gray-600 font-medium">Elderly Care</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}