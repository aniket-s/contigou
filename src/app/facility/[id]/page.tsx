'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Star, MapPin, Phone, Clock, ChevronLeft, ChevronRight, Heart, ArrowLeft, Share2, Check, Mail,  Calendar,  Award, Shield, MessageSquare, Globe } from 'lucide-react';
import Image from "next/image";

// TypeScript interfaces
interface ReviewDetail {
    stars: number;
    percentage: number;
}

interface Specialty {
    name: string;
    description: string;
}

interface StaffMember {
    name: string;
    title: string;
    image: string;
    credentials: string;
}

interface Testimonial {
    name: string;
    text: string;
    rating: number;
}

interface FAQItem {
    question: string;
    answer: string;
}

interface FacilityData {
    id: number;
    name: string;
    logo: string;
    type: string;
    address: string;
    phone: string;
    email: string;
    website: string;
    rating: number;
    reviews: number;
    reviewDetails: ReviewDetail[];
    distance: string;
    specialties: Specialty[];
    services: string[];
    insurance: string[];
    hours: string;
    images: string[];
    description: string;
    costPerDay: string;
    mapUrl: string;
    certifications: string[];
    acceptingNewPatients: boolean;
    facilityFeatures: string[];
    staff: StaffMember[];
    testimonials: Testimonial[];
    admissionCriteria: string[];
    faq: FAQItem[];
}

type TabType = 'overview' | 'services' | 'staff' | 'reviews' | 'faq';

// Mock data - in a real app, this would come from an API
const mockFacilities: Record<string, FacilityData> = {
    '1': {
        id: 1,
        name: "O'Connor Hospital Rehab Center",
        logo: "https://www.claudeusercontent.com/api/placeholder/80/80",
        type: "Inpatient Rehabilitation",
        address: "2105 Forest Ave, San Jose, CA 95128",
        phone: "(408) 947-2500",
        email: "info@oconnorrehab.org",
        website: "www.oconnorrehab.org",
        rating: 4.8,
        reviews: 126,
        reviewDetails: [
            { stars: 5, percentage: 85 },
            { stars: 4, percentage: 10 },
            { stars: 3, percentage: 3 },
            { stars: 2, percentage: 1 },
            { stars: 1, percentage: 1 }
        ],
        distance: "2.3 mi away",
        specialties: [
            { name: "Physical Therapy", description: "Customized physical therapy programs to help patients recover movement and strength after injury or surgery." },
            { name: "Stroke Recovery", description: "Specialized rehabilitation for stroke survivors focusing on regaining function and independence." },
            { name: "Orthopedic Rehabilitation", description: "Therapy for patients recovering from joint replacements, fractures, and other orthopedic conditions." },
            { name: "Neurological Rehabilitation", description: "Treatment for patients with neurological conditions like Parkinson's, multiple sclerosis, and others." },
            { name: "Cardiac Rehabilitation", description: "Monitored exercise and education for patients recovering from heart-related conditions." },
            { name: "Speech Therapy", description: "Assessment and treatment for patients with communication and swallowing disorders." }
        ],
        services: [
            "24/7 Nursing Care",
            "Physical Therapy (5 days/week)",
            "Occupational Therapy",
            "Speech Therapy",
            "Recreational Therapy",
            "Nutritional Counseling",
            "Case Management",
            "Discharge Planning",
            "Pain Management",
            "Prosthetic Training"
        ],
        insurance: [
            "Medicare",
            "Blue Cross",
            "Aetna",
            "UnitedHealthcare",
            "Cigna",
            "Kaiser Permanente",
            "Humana",
            "Tricare",
            "Workers' Compensation"
        ],
        hours: "Mon-Fri: 7AM-8PM, Sat-Sun: 8AM-5PM",
        images: [
            "https://www.claudeusercontent.com/api/placeholder/1200/600",
            "https://www.claudeusercontent.com/api/placeholder/1200/600",
            "https://www.claudeusercontent.com/api/placeholder/1200/600",
            "https://www.claudeusercontent.com/api/placeholder/1200/600",
            "https://www.claudeusercontent.com/api/placeholder/1200/600",
            "https://www.claudeusercontent.com/api/placeholder/1200/600"
        ],
        description: "O'Connor Hospital Rehabilitation Center offers comprehensive inpatient rehabilitation services with a focus on personalized care plans. Our team of specialists works together to help patients recover from injuries, surgeries, and other conditions requiring intensive rehabilitation. Our facility features state-of-the-art equipment and private rooms to ensure comfort during recovery.\n\nWith over 30 years of experience serving the San Jose community, we pride ourselves on combining clinical excellence with compassionate care. Our interdisciplinary approach ensures that each patient receives coordinated treatment addressing their unique rehabilitation needs.",
        costPerDay: "$1,450",
        mapUrl: "https://www.claudeusercontent.com/api/placeholder/600/400",
        certifications: ["Joint Commission Accredited", "Medicare Certified", "CARF Accredited"],
        acceptingNewPatients: true,
        facilityFeatures: [
            "Private Rooms Available",
            "Semi-Private Rooms",
            "Gym/Rehabilitation Space",
            "Outdoor Therapeutic Area",
            "Dining Room",
            "Family Visiting Areas",
            "WiFi Access",
            "Cable TV",
            "Accessible Bathrooms",
            "Bariatric Equipment"
        ],
        staff: [
            {
                name: "Dr. Sarah Johnson",
                title: "Medical Director",
                image: "https://www.claudeusercontent.com/api/placeholder/100/100",
                credentials: "MD, Board Certified in Physical Medicine & Rehabilitation"
            },
            {
                name: "Michael Chen",
                title: "Lead Physical Therapist",
                image: "https://www.claudeusercontent.com/api/placeholder/100/100",
                credentials: "DPT, Certified Neurological Clinical Specialist"
            },
            {
                name: "Rebecca Martinez",
                title: "Occupational Therapy Coordinator",
                image: "https://www.claudeusercontent.com/api/placeholder/100/100",
                credentials: "OTR/L, Certified Hand Therapist"
            }
        ],
        testimonials: [
            {
                name: "John D.",
                text: "After my stroke, I wasn't sure if I'd ever regain my independence. The team at O'Connor helped me recover beyond what I thought possible. The therapists were knowledgeable and encouraging every step of the way.",
                rating: 5
            },
            {
                name: "Maria S.",
                text: "I had my knee replacement rehab here and was very impressed with the quality of care. The facility is clean and well-maintained, and the staff truly cares about your progress.",
                rating: 5
            },
            {
                name: "Robert T.",
                text: "The physical therapists are excellent. They pushed me just the right amount during my recovery from spinal surgery. I'm now back to most of my regular activities.",
                rating: 4
            }
        ],
        admissionCriteria: [
            "Physician referral required",
            "Medically stable condition",
            "Ability to participate in at least 3 hours of therapy per day",
            "Need for at least two types of therapy (physical, occupational, speech)",
            "Reasonable expectation of improvement",
            "Identified discharge plan"
        ],
        faq: [
            {
                question: "How long is a typical stay at your facility?",
                answer: "The average length of stay is 10-14 days, but this varies based on individual needs and progress. Your care team will provide ongoing assessments and estimates throughout your stay."
            },
            {
                question: "Do you offer outpatient services after discharge?",
                answer: "Yes, we provide outpatient rehabilitation services to continue your recovery after discharge from our inpatient program. This helps ensure a smooth transition and continuity of care."
            },
            {
                question: "What should I bring for an inpatient stay?",
                answer: "We recommend comfortable clothing for therapy sessions, sleepwear, toiletries, and any personal items that would make your stay more comfortable. Please leave valuables at home. A complete packing list will be provided upon admission."
            },
            {
                question: "How often will I receive therapy?",
                answer: "Inpatients typically receive 3-5 hours of therapy per day, 5-7 days per week, depending on your personalized care plan and tolerance level."
            }
        ]
    },
    '2': {
        id: 2,
        name: "Stanford Health Care Rehabilitation",
        logo: "https://www.claudeusercontent.com/api/placeholder/80/80",
        type: "Inpatient Rehabilitation",
        address: "500 Pasteur Dr, Stanford, CA 94305",
        phone: "(650) 723-4000",
        email: "info@stanfordrehab.org",
        website: "www.stanfordrehab.org",
        rating: 4.9,
        reviews: 89,
        reviewDetails: [
            { stars: 5, percentage: 90 },
            { stars: 4, percentage: 7 },
            { stars: 3, percentage: 2 },
            { stars: 2, percentage: 1 },
            { stars: 1, percentage: 0 }
        ],
        distance: "1.8 mi away",
        specialties: [
            { name: "Neurological Rehabilitation", description: "Advanced treatment for traumatic brain injury, spinal cord injury, and other neurological conditions." },
            { name: "Cardiac Rehabilitation", description: "Comprehensive cardiac recovery programs with advanced monitoring and support." },
            { name: "Orthopedic Rehabilitation", description: "Specialized care for joint replacement, sports injuries, and orthopedic surgery recovery." }
        ],
        services: [
            "24/7 Medical Care",
            "Advanced Physical Therapy",
            "Occupational Therapy",
            "Speech-Language Pathology",
            "Neuropsychology",
            "Social Work Services",
            "Recreational Therapy",
            "Nutrition Services",
            "Discharge Planning"
        ],
        insurance: [
            "Medicare",
            "Blue Cross Blue Shield",
            "Aetna",
            "UnitedHealthcare",
            "Cigna",
            "Kaiser Permanente",
            "Anthem"
        ],
        hours: "24/7 Inpatient Care, Outpatient: Mon-Fri 7AM-7PM",
        images: [
            "https://www.claudeusercontent.com/api/placeholder/1200/600",
            "https://www.claudeusercontent.com/api/placeholder/1200/600",
            "https://www.claudeusercontent.com/api/placeholder/1200/600",
            "https://www.claudeusercontent.com/api/placeholder/1200/600"
        ],
        description: "Stanford Health Care Rehabilitation offers world-class rehabilitation services with cutting-edge technology and research-based treatments. Our multidisciplinary team provides personalized care for patients recovering from complex medical conditions, injuries, and surgeries.\n\nAs part of Stanford Medicine, we integrate the latest medical research with compassionate patient care to achieve optimal outcomes for every patient.",
        costPerDay: "$1,650",
        mapUrl: "https://www.claudeusercontent.com/api/placeholder/600/400",
        certifications: ["Joint Commission Accredited", "CARF Accredited", "Magnet Recognition"],
        acceptingNewPatients: true,
        facilityFeatures: [
            "Private Patient Rooms",
            "Advanced Therapy Gym",
            "Aquatic Therapy Pool",
            "Assistive Technology Lab",
            "Family Conference Rooms",
            "Meditation Garden",
            "WiFi Throughout",
            "Patient Library"
        ],
        staff: [
            {
                name: "Dr. Emily Rodriguez",
                title: "Chief Medical Officer",
                image: "https://www.claudeusercontent.com/api/placeholder/100/100",
                credentials: "MD, PhD, Board Certified in Physical Medicine & Rehabilitation"
            },
            {
                name: "David Kim",
                title: "Director of Therapy Services",
                image: "https://www.claudeusercontent.com/api/placeholder/100/100",
                credentials: "DPT, PhD, Neurologic Clinical Specialist"
            }
        ],
        testimonials: [
            {
                name: "Susan L.",
                text: "The care I received was exceptional. The staff went above and beyond to help me regain my strength after my accident.",
                rating: 5
            }
        ],
        admissionCriteria: [
            "Physician referral required",
            "Medical stability",
            "Rehabilitation potential",
            "Need for intensive rehabilitation services"
        ],
        faq: [
            {
                question: "What makes Stanford different?",
                answer: "We combine world-class medical expertise with the latest research and technology to provide the most advanced rehabilitation care available."
            }
        ]
    }
};

const FacilityDetailPage: React.FC = () => {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;


    const [activeTab, setActiveTab] = useState<TabType>('overview');
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const [showContactForm, setShowContactForm] = useState<boolean>(false);
    const [facilityData, setFacilityData] = useState<FacilityData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [notFound, setNotFound] = useState<boolean>(false);

    useEffect(() => {
        if (id) {
            // Simulate API call delay
            setTimeout(() => {
                const facility = mockFacilities[id as string];
                if (facility) {
                    setFacilityData(facility);
                    setNotFound(false);
                } else {
                    setNotFound(true);
                }
                setLoading(false);
            }, 500);
        }
    }, [id]);

    const nextSlide = (): void => {
        if (facilityData) {
            setActiveSlide((prev) => (prev === facilityData.images.length - 1 ? 0 : prev + 1));
        }
    };

    const prevSlide = (): void => {
        if (facilityData) {
            setActiveSlide((prev) => (prev === 0 ? facilityData.images.length - 1 : prev - 1));
        }
    };

    const selectSlide = (index: number): void => {
        setActiveSlide(index);
    };

    const handleTabChange = (tab: TabType): void => {
        setActiveTab(tab);
    };

    const handleBackToSearch = () => {
        router.push('/search'); // or wherever your search page is
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading facility details...</p>
                </div>
            </div>
        );
    }

    if (notFound || !facilityData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Facility Not Found</h1>
                    <p className="text-gray-600 mb-6">The facility you&apos;re looking for doesn&apos;t exist or has been removed.</p>
                    <button
                        onClick={handleBackToSearch}
                        className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                    >
                        Back to Search
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-white">
            {/* Back button and facility name */}
            <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <button
                    onClick={handleBackToSearch}
                    className="flex items-center text-gray-600 hover:text-gray-800"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    <span className="text-sm sm:text-base">Back to search results</span>
                </button>
                <div className="flex items-center gap-3 sm:gap-4">
                    <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm sm:text-base">
                        <Heart size={18}  />
                        <span>Save</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm sm:text-base">
                        <Share2 size={18}  />
                        <span>Share</span>
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mb-6 lg:mb-8">
                {/* Left column with facility images */}
                <div className="w-full lg:w-3/5">
                    {/* Main image carousel */}
                    <div className="relative mb-4 rounded-lg overflow-hidden shadow-md">
                        <Image
                            src={facilityData.images[activeSlide]}
                            alt={`${facilityData.name} view ${activeSlide + 1}`}
                            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                        />

                        {/* Navigation arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 sm:p-2 rounded-full shadow hover:bg-white transition"
                        >
                            <ChevronLeft size={20}  />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 sm:p-2 rounded-full shadow hover:bg-white transition"
                        >
                            <ChevronRight size={20}  />
                        </button>

                        {/* Slide counter */}
                        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/70 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                            {activeSlide + 1} / {facilityData.images.length}
                        </div>
                    </div>

                    {/* Thumbnail strip */}
                    <div className="flex space-x-2 overflow-x-auto pb-2">
                        {facilityData.images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => selectSlide(index)}
                                className={`shrink-0 rounded-md overflow-hidden border-2 ${
                                    activeSlide === index ? 'border-teal-500' : 'border-transparent'
                                }`}
                                style={{ borderColor: activeSlide === index ? '#17839c' : 'transparent' }}
                            >
                                <Image
                                    src={img}
                                    alt={`${facilityData.name} thumbnail ${index + 1}`}
                                    className="w-16 h-10 sm:w-24 sm:h-16 object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right column with facility header details */}
                <div className="w-full lg:w-2/5">
                    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 h-full">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4">
                            <Image
                                src={facilityData.logo}
                                alt={`${facilityData.name} logo`}
                                className="w-12 h-12 sm:w-16 sm:h-16 rounded-md object-cover"
                            />
                            <div>
                                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">{facilityData.name}</h1>
                                <p className="text-sm sm:text-base text-gray-600">{facilityData.type}</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4">
                            <div className="flex text-yellow-400 mr-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill={i < Math.floor(facilityData.rating) ? "currentColor" : "none"}
                                    />
                                ))}
                            </div>
                            <span className="text-gray-700 font-medium text-sm sm:text-base">{facilityData.rating}</span>
                            <span className="text-gray-500 ml-2 text-sm">({facilityData.reviews} reviews)</span>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-start">
                                <MapPin size={18} className="mt-1 mr-3 shrink-0" style={{ color: '#17839c' }} />
                                <div>
                                    <p className="text-gray-700 text-sm sm:text-base">{facilityData.address}</p>
                                    <p className="text-sm font-medium mt-1">
                                        <a
                                            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(facilityData.address)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center"
                                            style={{ color: '#17839c' }}
                                        >
                                            Get Directions
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone size={18} className="mt-1 mr-3 shrink-0" style={{ color: '#17839c' }} />
                                <div>
                                    <p className="text-gray-700 text-sm sm:text-base">{facilityData.phone}</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Clock size={18} className="mt-1 mr-3 shrink-0" style={{ color: '#17839c' }} />
                                <div>
                                    <p className="text-gray-700 text-sm sm:text-base">{facilityData.hours}</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail size={18} className="mt-1 mr-3 shrink-0" style={{ color: '#17839c' }} />
                                <div>
                                    <p className="text-gray-700 text-sm sm:text-base">{facilityData.email}</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Globe size={18} className="mt-1 mr-3 shrink-0" style={{ color: '#17839c' }} />
                                <div>
                                    <p className="text-gray-700 text-sm sm:text-base">{facilityData.website}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3">
                            <button
                                onClick={() => setShowContactForm(true)}
                                className="w-full py-2.5 sm:py-3 px-4 rounded-lg font-medium text-white text-center text-sm sm:text-base"
                                style={{ backgroundColor: '#f68b1f' }}
                            >
                                Contact This Facility
                            </button>
                            <button className="w-full py-2.5 sm:py-3 px-4 rounded-lg font-medium text-white text-center text-sm sm:text-base"
                                    style={{ backgroundColor: '#17839c' }}>
                                Schedule a Tour
                            </button>
                            <div className="text-center text-green-600 font-medium mt-2 text-sm sm:text-base">
                                {facilityData.acceptingNewPatients
                                    ? 'Currently Accepting New Patients'
                                    : 'Limited Availability - Contact for Details'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs navigation */}
            <div className="border-b mb-6 sm:mb-8">
                <nav className="flex space-x-4 sm:space-x-8 overflow-x-auto">
                    {[
                        { key: 'overview', label: 'Overview' },
                        { key: 'services', label: 'Services & Specialties' },
                        { key: 'staff', label: 'Staff & Credentials' },
                        { key: 'reviews', label: 'Reviews' },
                        { key: 'faq', label: 'FAQ' }
                    ].map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => handleTabChange(tab.key as TabType)}
                            className={`py-3 sm:py-4 px-1 border-b-2 font-medium text-sm sm:text-lg whitespace-nowrap ${
                                activeTab === tab.key
                                    ? 'border-teal-600 text-teal-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                            style={{
                                borderColor: activeTab === tab.key ? '#17839c' : 'transparent',
                                color: activeTab === tab.key ? '#17839c' : ''
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Tab content */}
            <div className="mb-8 sm:mb-12">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
                        <div className="xl:col-span-2">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#17839c' }}>About {facilityData.name}</h2>
                            <div className="prose max-w-none text-gray-700 mb-6 sm:mb-8">
                                {facilityData.description.split('\n\n').map((paragraph, i) => (
                                    <p key={i} className="mb-4 text-sm sm:text-base">{paragraph}</p>
                                ))}
                            </div>

                            <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: '#17839c' }}>Certifications & Accreditations</h3>
                            <div className="flex flex-wrap gap-3 mb-6 sm:mb-8">
                                {facilityData.certifications.map((cert, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center bg-gray-100 px-3 sm:px-4 py-2 rounded-full"
                                    >
                                        <Award size={16}  className="mr-2" style={{ color: '#17839c' }} />
                                        <span className="text-sm sm:text-base">{cert}</span>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: '#17839c' }}>Facility Features</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                                {facilityData.facilityFeatures.map((feature, i) => (
                                    <div key={i} className="flex items-start">
                                        <Check size={16}  className="mt-1 mr-2 shrink-0" style={{ color: '#17839c' }} />
                                        <span className="text-sm sm:text-base">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: '#17839c' }}>Admission Criteria</h3>
                            <ul className="list-disc pl-6 sm:pl-8 mb-6 sm:mb-8 space-y-2">
                                {facilityData.admissionCriteria.map((criteria, i) => (
                                    <li key={i} className="text-sm sm:text-base">{criteria}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="xl:col-span-1 space-y-6">
                            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                                <h3 className="text-lg font-semibold mb-4" style={{ color: '#17839c' }}>Insurance Accepted</h3>
                                <div className="space-y-2">
                                    {facilityData.insurance.map((insurance, i) => (
                                        <div key={i} className="flex items-start">
                                            <Shield size={16}  className="mt-0.5 mr-2 shrink-0" style={{ color: '#17839c' }} />
                                            <span className="text-sm sm:text-base">{insurance}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                                <h3 className="text-lg font-semibold mb-4" style={{ color: '#17839c' }}>Location</h3>
                                <div className="mb-4">
                                    <Image
                                        src={facilityData.mapUrl}
                                        alt="Facility location map"
                                        className="w-full h-32 sm:h-48 object-cover rounded-md mb-3"
                                    />
                                    <a
                                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(facilityData.address)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full py-2 rounded-md text-white font-medium text-sm sm:text-base"
                                        style={{ backgroundColor: '#17839c' }}
                                    >
                                        <MapPin size={14}  className="mr-2" />
                                        Get Directions
                                    </a>
                                </div>
                                <div className="text-gray-700">
                                    <p className="font-semibold mb-1 text-sm sm:text-base">Address:</p>
                                    <p className="text-sm sm:text-base">{facilityData.address}</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                                <h3 className="text-lg font-semibold mb-4" style={{ color: '#17839c' }}>Contact Information</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <Phone size={16}  className="mt-0.5 mr-3 shrink-0" style={{ color: '#17839c' }} />
                                        <div>
                                            <p className="font-medium text-sm sm:text-base">Phone</p>
                                            <p className="text-sm sm:text-base">{facilityData.phone}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Mail size={16}  className="mt-0.5 mr-3 shrink-0" style={{ color: '#17839c' }} />
                                        <div>
                                            <p className="font-medium text-sm sm:text-base">Email</p>
                                            <p className="text-sm sm:text-base">{facilityData.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Globe size={16}  className="mt-0.5 mr-3 shrink-0" style={{ color: '#17839c' }} />
                                        <div>
                                            <p className="font-medium text-sm sm:text-base">Website</p>
                                            <p className="text-sm sm:text-base">{facilityData.website}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Clock size={16}  className="mt-0.5 mr-3 shrink-0" style={{ color: '#17839c' }} />
                                        <div>
                                            <p className="font-medium text-sm sm:text-base">Hours</p>
                                            <p className="text-sm sm:text-base">{facilityData.hours}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Services & Specialties Tab */}
                {activeTab === 'services' && (
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#17839c' }}>Services & Specialties</h2>

                        <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: '#17839c' }}>Specialties</h3>
                        <div className="grid grid-cols-1 gap-y-4 sm:gap-y-6 mb-8 sm:mb-12">
                            {facilityData.specialties.map((specialty, i) => (
                                <div key={i} className="bg-white rounded-lg shadow-sm p-4 sm:p-5 border border-gray-200">
                                    <h4 className="text-base sm:text-lg font-semibold mb-2">{specialty.name}</h4>
                                    <p className="text-gray-700 text-sm sm:text-base">{specialty.description}</p>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: '#17839c' }}>Available Services</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                            {facilityData.services.map((service, i) => (
                                <div key={i} className="flex items-start">
                                    <Check size={16}  className="mt-1 mr-2 shrink-0" style={{ color: '#17839c' }} />
                                    <span className="text-sm sm:text-base">{service}</span>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <button className="py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg font-medium text-white inline-flex items-center text-sm sm:text-base" style={{ backgroundColor: '#f68b1f' }}>
                                <Calendar className="mr-2" size={18}  />
                                Schedule an Assessment
                            </button>
                        </div>
                    </div>
                )}

                {/* Staff & Credentials Tab */}
                {activeTab === 'staff' && (
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#17839c' }}>Our Team</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                            {facilityData.staff.map((member, i) => (
                                <div key={i} className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
                                    <div className="flex flex-col items-center text-center">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-4"
                                        />
                                        <h4 className="text-base sm:text-lg font-semibold">{member.name}</h4>
                                        <p className="text-gray-600 mb-2 text-sm sm:text-base">{member.title}</p>
                                        <p className="text-xs sm:text-sm text-gray-700">{member.credentials}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <button className="py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg font-medium text-white inline-flex items-center text-sm sm:text-base" style={{ backgroundColor: '#f68b1f' }}>
                                <MessageSquare className="mr-2" size={18}  />
                                Contact Our Team
                            </button>
                        </div>
                    </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                    <div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#17839c' }}>Patient Reviews</h2>
                            <button
                                className="py-2 px-4 rounded-lg font-medium text-white text-sm sm:text-base"
                                style={{ backgroundColor: '#f68b1f' }}
                            >
                                Write a Review
                            </button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
                                    <h3 className="text-base sm:text-lg font-semibold mb-4">Rating Summary</h3>
                                    <div className="flex items-center mb-4">
                                        <div className="text-3xl sm:text-4xl font-bold mr-4">{facilityData.rating}</div>
                                        <div>
                                            <div className="flex text-yellow-400 mb-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={18}
                                                        fill={i < Math.floor(facilityData.rating) ? "currentColor" : "none"}
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-gray-600 text-sm sm:text-base">{facilityData.reviews} reviews</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        {facilityData.reviewDetails.map((detail) => (
                                            <div key={detail.stars} className="flex items-center">
                                                <div className="w-8 sm:w-10 text-right mr-2 text-sm sm:text-base">{detail.stars} ★</div>
                                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full rounded-full"
                                                        style={{ width: `${detail.percentage}%`, backgroundColor: '#17839c' }}
                                                    ></div>
                                                </div>
                                                <div className="w-8 sm:w-10 text-left ml-2 text-sm sm:text-base">{detail.percentage}%</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="space-y-4 sm:space-y-6">
                                    {facilityData.testimonials.map((testimonial, i) => (
                                        <div key={i} className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
                                            <div className="flex items-center mb-3">
                                                <div className="flex text-yellow-400 mr-2">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            size={14}
                                                            fill={i < testimonial.rating ? "currentColor" : "none"}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="font-medium text-sm sm:text-base">{testimonial.name}</span>
                                            </div>
                                            <p className="text-gray-700 text-sm sm:text-base">{testimonial.text}</p>
                                        </div>
                                    ))}

                                    <div className="text-center">
                                        <button className="px-4 sm:px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm sm:text-base">
                                            Load More Reviews
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* FAQ Tab */}
                {activeTab === 'faq' && (
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#17839c' }}>Frequently Asked Questions</h2>

                        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                            {facilityData.faq.map((item, i) => (
                                <div key={i} className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
                                    <h3 className="text-base sm:text-lg font-semibold mb-2">{item.question}</h3>
                                    <p className="text-gray-700 text-sm sm:text-base">{item.answer}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                            <h3 className="text-base sm:text-lg font-semibold mb-4" style={{ color: '#17839c' }}>Have More Questions?</h3>
                            <p className="mb-4 text-sm sm:text-base">Our team is available to answer any additional questions you may have about our facility, services, or the rehabilitation process.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                                <button className="py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium text-white text-sm sm:text-base" style={{ backgroundColor: '#17839c' }}>
                                    Contact Us
                                </button>
                                <button className="py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium text-white text-sm sm:text-base" style={{ backgroundColor: '#f68b1f' }}>
                                    Schedule a Tour
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Contact CTA section */}
            <div className="mt-8 sm:mt-12 rounded-lg p-6 sm:p-8 text-white text-center" style={{ background: 'linear-gradient(to right, #17839c, #1b5a8a)' }}>
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to Start Your Recovery Journey?</h2>
                <p className="mb-6 max-w-2xl mx-auto text-sm sm:text-base">Our team is here to help you every step of the way. Contact us today to learn more about our rehabilitation services or to schedule a tour of our facility.</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <button
                        onClick={() => setShowContactForm(true)}
                        className="py-2.5 sm:py-3 px-4 sm:px-6 bg-white font-semibold rounded-lg hover:bg-gray-100 transition text-sm sm:text-base"
                        style={{ color: '#17839c' }}
                    >
                        Contact Us
                    </button>
                    <button className="py-2.5 sm:py-3 px-4 sm:px-6 text-white font-semibold rounded-lg transition text-sm sm:text-base"
                            style={{ backgroundColor: '#f68b1f' }}>
                        Schedule a Tour
                    </button>
                </div>
            </div>

            {/* Contact form modal */}
            {showContactForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg sm:text-xl font-bold" style={{ color: '#17839c' }}>Contact {facilityData.name}</h3>
                            <button
                                onClick={() => setShowContactForm(false)}
                                className="text-gray-500 hover:text-gray-700 text-2xl"
                            >
                                ×
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-gray-700 mb-1 text-sm sm:text-base">First Name*</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md text-sm sm:text-base" />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1 text-sm sm:text-base">Last Name*</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-md text-sm sm:text-base" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1 text-sm sm:text-base">Email Address*</label>
                            <input type="email" className="w-full p-2 border border-gray-300 rounded-md text-sm sm:text-base" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1 text-sm sm:text-base">Phone Number*</label>
                            <input type="tel" className="w-full p-2 border border-gray-300 rounded-md text-sm sm:text-base" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1 text-sm sm:text-base">Reason for Contact*</label>
                            <select className="w-full p-2 border border-gray-300 rounded-md text-sm sm:text-base">
                                <option value="">Please select...</option>
                                <option value="info">General Information</option>
                                <option value="admission">Admission Inquiry</option>
                                <option value="tour">Schedule a Tour</option>
                                <option value="insurance">Insurance Question</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 mb-1 text-sm sm:text-base">Message*</label>
                            <textarea className="w-full p-2 border border-gray-300 rounded-md h-24 sm:h-32 text-sm sm:text-base"></textarea>
                        </div>

                        <div className="mb-6">
                            <label className="flex items-start">
                                <input type="checkbox" className="mt-1 mr-2" />
                                <span className="text-xs sm:text-sm text-gray-600">I consent to having this website store my submitted information so they can respond to my inquiry.</span>
                            </label>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setShowContactForm(false)}
                                className="py-2 px-4 border border-gray-300 rounded-md text-sm sm:text-base"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="py-2 px-4 sm:px-6 rounded-md text-white font-medium text-sm sm:text-base"
                                style={{ backgroundColor: '#f68b1f' }}
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FacilityDetailPage;