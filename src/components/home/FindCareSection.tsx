'use client';

import { useState } from 'react';
import { Tab, RehabProgram } from '@/types';

// Sample data
const tabs: Tab[] = [
    {
        id: 'rehab',
        label: 'Rehabilitation Programs',
        content: {
            title: 'Rehabilitation Programs',
            description: 'ContigoU is making it easier to find and compare rehabilitation facilities that address your specific needs. Our network includes facilities specializing in physical rehabilitation, stroke recovery, traumatic brain injury, spinal cord injury, and many other conditions requiring comprehensive inpatient care.'
        }
    },
    {
        id: 'provider',
        label: 'Provider Directory',
        content: {
            title: 'Provider Directory',
            description: 'Find qualified healthcare providers specializing in rehabilitation services in your area.'
        }
    },
    {
        id: 'insurance',
        label: 'Insurance Information',
        content: {
            title: 'Insurance Information',
            description: 'Learn about insurance coverage options for rehabilitation services.'
        }
    },
    {
        id: 'resources',
        label: 'Patient Resources',
        content: {
            title: 'Patient Resources',
            description: 'Access helpful guides, articles, and tools for patients and caregivers.'
        }
    },
    {
        id: 'costs',
        label: 'Cost Estimates',
        content: {
            title: 'Cost Estimates',
            description: 'Get estimated costs for common rehabilitation services and treatments.'
        }
    }
];

const rehabPrograms: RehabProgram[] = [
    {
        id: 'physical',
        title: 'Physical Rehabilitation',
        description: 'Specialized programs for recovery from surgeries, injuries, and other physical conditions.'
    },
    {
        id: 'neurological',
        title: 'Neurological Rehabilitation',
        description: 'Specialized care for stroke recovery, traumatic brain injury, and other neurological conditions.'
    },
    {
        id: 'geriatric',
        title: 'Geriatric Rehabilitation',
        description: 'Specialized rehabilitation programs designed for the unique needs of elderly patients.'
    }
];

export default function FindCareSection() {
    const [activeTab, setActiveTab] = useState('rehab');

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-5 py-6 sm:py-10">
            <h1 className="text-primary text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Find the Right Care</h1>
            <div className="w-12 sm:w-16 h-1 bg-secondary mb-6 sm:mb-8"></div>

            <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 relative">
                {/* Mobile Tab Selector (Dropdown style) */}
                <div className="block lg:hidden w-full mb-4">
                    <select
                        className="w-full py-3 px-4 bg-gray-200 text-gray-600 rounded-full
                                  font-medium focus:outline-none focus:ring-2 focus:ring-secondary"
                        value={activeTab}
                        onChange={(e) => setActiveTab(e.target.value)}
                    >
                        {tabs.map(tab => (
                            <option key={tab.id} value={tab.id}>
                                {tab.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Desktop Left Sidebar / Tabs */}
                <div className="hidden lg:block w-full lg:w-72 flex-shrink-0">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`tab-button block w-full py-4 px-5 mb-4 text-left text-base font-medium ${
                                activeTab === tab.id ? 'bg-secondary text-white' : 'bg-gray-200 text-gray-600'
                            } rounded-full hover:bg-opacity-90 transition-colors`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Right Content Area */}
                <div className="flex-grow lg:pl-8 xl:pl-10">
                    {tabs.map(tab => (
                        <div
                            key={tab.id}
                            className={`tab-content ${activeTab === tab.id ? 'block' : 'hidden'}`}
                        >
                            <h2 className="text-primary text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-5">{tab.content.title}</h2>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-10">
                                {tab.content.description}
                            </p>

                            {tab.id === 'rehab' && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                    {rehabPrograms.map(program => (
                                        <div
                                            key={program.id}
                                            className="border border-gray-200 rounded-lg overflow-hidden
                                                      relative pt-8 pb-12 px-4 sm:px-5 transition-transform
                                                      hover:-translate-y-1 hover:shadow-md"
                                        >
                                            <div className="absolute top-0 left-0 right-0 h-2.5 bg-secondary">
                                                <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2
                                                             w-12 h-12 bg-primary rounded-full flex items-center
                                                             justify-center text-white"></div>
                                            </div>
                                            <h3 className="text-primary text-lg sm:text-xl font-semibold mt-4 mb-3 sm:mb-4 text-center">
                                                {program.title}
                                            </h3>
                                            <p className="text-gray-600 text-center text-xs sm:text-sm">
                                                {program.description}
                                            </p>
                                            <button className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2
                                                             text-xl sm:text-2xl text-primary hover:text-secondary
                                                             transition-colors"
                                                    aria-label="Show more">
                                                &#8964;
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}