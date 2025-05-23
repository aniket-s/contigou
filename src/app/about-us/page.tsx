'use client'
import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {
    Star,
    Users,
    Heart,
    Shield,
    Award,
    Target,
    Handshake,
    MapPin,
    Phone,
    Mail,
    CheckCircle,
    Linkedin,
    Twitter,
} from 'lucide-react';

// Type definitions
interface TeamMember {
    name: string;
    title: string;
    image: string;
    bio: string;
    linkedin: string;
    twitter: string;
}

interface CoreValue {
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface Stat {
    number: string;
    label: string;
    description: string;
}

interface Milestone {
    year: string;
    title: string;
    description: string;
}

const AboutUsPage: NextPage = () => {
    const [activeValue, setActiveValue] = useState<number>(0);

    const teamMembers: TeamMember[] = [
        {
            name: "Sarah Johnson",
            title: "Chief Executive Officer",
            image: "https://www.claudeusercontent.com/api/placeholder/600/400",
            bio: "Sarah brings over 15 years of healthcare administration experience, with a passion for improving patient access to quality rehabilitation services. She holds an MBA from Stanford and previously led digital transformation initiatives at major healthcare systems.",
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "Dr. Michael Chen",
            title: "Chief Medical Officer",
            image: "https://www.claudeusercontent.com/api/placeholder/600/400",
            bio: "Dr. Chen is a board-certified physiatrist with 20+ years of experience in rehabilitation medicine. He has published extensively on rehabilitation outcomes and serves on several medical advisory boards.",
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "Emily Rodriguez",
            title: "Chief Technology Officer",
            image: "https://www.claudeusercontent.com/api/placeholder/600/400",
            bio: "Emily is a software engineering leader with expertise in healthcare technology platforms. She previously worked at leading health tech companies and holds a Master's in Computer Science from MIT.",
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "James Thompson",
            title: "VP of Business Development",
            image: "https://www.claudeusercontent.com/api/placeholder/600/400",
            bio: "James has over 12 years of experience in healthcare partnerships and business development. He specializes in building relationships between healthcare providers and technology platforms.",
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "Dr. Lisa Patel",
            title: "Director of Clinical Operations",
            image: "https://www.claudeusercontent.com/api/placeholder/600/400",
            bio: "Dr. Patel is a licensed occupational therapist with extensive experience in rehabilitation program management. She ensures our platform meets the highest clinical standards.",
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "Robert Kim",
            title: "VP of Marketing",
            image: "https://www.claudeusercontent.com/api/placeholder/600/400",
            bio: "Robert leads our marketing and communications efforts, with a focus on patient education and provider outreach. He has 10+ years of experience in healthcare marketing.",
            linkedin: "#",
            twitter: "#"
        }
    ];

    const values: CoreValue[] = [
        {
            title: "Patient-Centered Care",
            description: "We put patients and their families at the center of everything we do, ensuring they have access to the information and resources they need to make informed healthcare decisions.",
            icon: <Heart size={40} />
        },
        {
            title: "Quality & Safety",
            description: "We maintain the highest standards of quality and safety by partnering only with accredited facilities and verified healthcare providers.",
            icon: <Shield size={40} />
        },
        {
            title: "Innovation",
            description: "We continuously innovate to improve the healthcare experience, leveraging technology to make rehabilitation services more accessible and transparent.",
            icon: <Target size={40} />
        },
        {
            title: "Integrity",
            description: "We operate with complete transparency and integrity, providing accurate information and honest guidance throughout the healthcare journey.",
            icon: <CheckCircle size={40} />
        }
    ];

    const stats: Stat[] = [
        { number: "500+", label: "Partner Facilities", description: "Rehabilitation centers nationwide" },
        { number: "50,000+", label: "Patients Helped", description: "Connected to quality care" },
        { number: "95%", label: "Satisfaction Rate", description: "Patient satisfaction score" },
        { number: "24/7", label: "Support Available", description: "Customer service" }
    ];

    const milestones: Milestone[] = [
        { year: "2018", title: "Company Founded", description: "ContigoU was established with a mission to simplify rehabilitation facility search and selection." },
        { year: "2019", title: "First 100 Partners", description: "Reached our first milestone of 100 partner rehabilitation facilities across 5 states." },
        { year: "2020", title: "Platform Launch", description: "Launched our comprehensive online platform making it easier for patients to find and compare facilities." },
        { year: "2021", title: "National Expansion", description: "Expanded to serve patients nationwide with over 300 partner facilities." },
        { year: "2022", title: "10,000 Patients Served", description: "Celebrated helping over 10,000 patients find the right rehabilitation care." },
        { year: "2023", title: "Innovation Award", description: "Received the Healthcare Innovation Award for improving patient access to rehabilitation services." },
        { year: "2024", title: "500+ Partners", description: "Reached over 500 partner facilities and 50,000 patients helped nationwide." }
    ];

    const handleValueClick = (index: number): void => {
        setActiveValue(index);
    };

    return (
        <>
            <Head>
                <title>About Us - ContigoU | Quality Rehabilitation Care</title>
                <meta name="description" content="Learn about ContigoU's mission to connect patients with quality rehabilitation facilities. Meet our team and discover our commitment to patient-centered care." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-white">
                {/* Hero Section */}
                <div className="relative py-20 px-8" style={{ background: 'linear-gradient(135deg, #17839c 0%, #1b5a8a 100%)' }}>
                    <div className="max-w-screen-xl mx-auto text-center text-white">
                        <h1 className="text-5xl font-bold mb-6">About ContigoU</h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            We're dedicated to making quality rehabilitation care accessible to everyone. Our mission is to connect patients with the right rehabilitation facilities, providing the information and support needed to make informed healthcare decisions.
                        </p>
                        <div className="flex justify-center space-x-6">
                            <button className="px-8 py-3 bg-white font-semibold rounded-lg shadow-lg transition transform hover:scale-105" style={{ color: '#17839c' }}>
                                Our Mission
                            </button>
                            <button className="px-8 py-3 font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#17839c] transition">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="py-16 px-8 bg-gray-50">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-4xl font-bold mb-2" style={{ color: '#17839c' }}>{stat.number}</div>
                                    <div className="text-xl font-semibold mb-1">{stat.label}</div>
                                    <div className="text-gray-600">{stat.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mission & Vision Section */}
                <div className="py-20 px-8">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <Image
                                    src="https://www.claudeusercontent.com/api/placeholder/600/400"
                                    alt="Healthcare professionals collaborating"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-xl"
                                    priority
                                />
                            </div>
                            <div>
                                <h2 className="text-4xl font-bold mb-6" style={{ color: '#17839c' }}>Our Mission</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    At ContigoU, we believe that every patient deserves access to quality rehabilitation care. Our mission is to bridge the gap between patients and rehabilitation facilities by providing a comprehensive, easy-to-use platform that empowers informed healthcare decisions.
                                </p>
                                <p className="text-lg text-gray-700 mb-8">
                                    We understand that finding the right rehabilitation facility can be overwhelming, especially during times of medical need. That's why we've created a trusted resource that simplifies the search process while maintaining the highest standards of quality and transparency.
                                </p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#17839c' }}>
                                        <Heart className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Patient-First Approach</p>
                                        <p className="text-gray-600">Every decision we make puts patient needs first</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vision Section */}
                <div className="py-20 px-8 bg-gray-50">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold mb-6" style={{ color: '#17839c' }}>Our Vision</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    We envision a healthcare ecosystem where finding quality rehabilitation care is seamless, transparent, and accessible to all. Our goal is to become the most trusted platform for rehabilitation facility search and selection nationwide.
                                </p>
                                <p className="text-lg text-gray-700 mb-8">
                                    Through technology and partnerships with leading healthcare providers, we're working to eliminate barriers to quality care and improve outcomes for patients throughout their rehabilitation journey.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <CheckCircle className="mr-3" style={{ color: '#17839c' }} size={20} />
                                        <span>Nationwide coverage of rehabilitation facilities</span>
                                    </div>
                                    <div className="flex items-center">
                                        <CheckCircle className="mr-3" style={{ color: '#17839c' }} size={20} />
                                        <span>Real-time availability and transparent pricing</span>
                                    </div>
                                    <div className="flex items-center">
                                        <CheckCircle className="mr-3" style={{ color: '#17839c' }} size={20} />
                                        <span>Personalized care recommendations</span>
                                    </div>
                                    <div className="flex items-center">
                                        <CheckCircle className="mr-3" style={{ color: '#17839c' }} size={20} />
                                        <span>Seamless coordination with healthcare providers</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <Image
                                    src="https://www.claudeusercontent.com/api/placeholder/600/400"
                                    alt="Modern rehabilitation facility"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="py-20 px-8">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-6" style={{ color: '#17839c' }}>Our Core Values</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                These values guide every decision we make and shape how we serve our patients, partners, and community.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {values.map((value, i) => (
                                <div
                                    key={i}
                                    className={`p-8 rounded-lg border-2 cursor-pointer transition-all ${
                                        activeValue === i ? 'border-[#17839c] bg-teal-50' : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                    onClick={() => handleValueClick(i)}
                                >
                                    <div className="flex items-start mb-4">
                                        <div className="mr-4" style={{ color: '#17839c' }}>
                                            {value.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                            <p className="text-gray-700">{value.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="py-20 px-8 bg-gray-50">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-6" style={{ color: '#17839c' }}>Our Journey</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                From our founding to today, we've been committed to improving healthcare access and outcomes.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

                            {milestones.map((milestone, i) => (
                                <div key={i} className={`relative flex items-center mb-8 ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                    <div className={`w-full lg:w-5/12 ${i % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}`}>
                                        <div className="bg-white p-6 rounded-lg shadow-md">
                                            <div className="text-2xl font-bold mb-2" style={{ color: '#17839c' }}>{milestone.year}</div>
                                            <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                                            <p className="text-gray-700">{milestone.description}</p>
                                        </div>
                                    </div>

                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white" style={{ backgroundColor: '#17839c' }}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="py-20 px-8">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-6" style={{ color: '#17839c' }}>Meet Our Team</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Our diverse team brings together healthcare expertise, technology innovation, and a shared commitment to improving patient care.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {teamMembers.map((member, i) => (
                                <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="relative h-64">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                        <p className="mb-3" style={{ color: '#17839c' }}>{member.title}</p>
                                        <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
                                        <div className="flex space-x-3">
                                            <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                                                <Linkedin size={20} />
                                            </a>
                                            <a href={member.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                                                <Twitter size={20} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* How We Help Section */}
                <div className="py-20 px-8 bg-gray-50">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-6" style={{ color: '#17839c' }}>How We Help</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                We've streamlined the process of finding and connecting with quality rehabilitation facilities.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#17839c' }}>
                                    <Target className="text-white" size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Find the Right Fit</h3>
                                <p className="text-gray-700">
                                    Our comprehensive search and filtering system helps you find facilities that match your specific rehabilitation needs, location preferences, and insurance coverage.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#17839c' }}>
                                    <CheckCircle className="text-white" size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Verify Quality</h3>
                                <p className="text-gray-700">
                                    We partner only with accredited facilities and provide detailed information about certifications, specialties, and patient reviews to ensure quality care.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#17839c' }}>
                                    <Handshake className="text-white" size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Connect & Support</h3>
                                <p className="text-gray-700">
                                    We facilitate direct connections with facilities and provide ongoing support throughout the admission process to ensure a smooth transition to care.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Awards & Recognition */}
                <div className="py-20 px-8">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-6" style={{ color: '#17839c' }}>Awards & Recognition</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                We're honored to be recognized for our commitment to improving healthcare access and patient outcomes.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#17839c' }}>
                                    <Award className="text-white" size={24} />
                                </div>
                                <h3 className="font-bold mb-2">Healthcare Innovation Award</h3>
                                <p className="text-gray-600 text-sm">2023 Digital Health Awards</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#17839c' }}>
                                    <Star className="text-white" size={24} />
                                </div>
                                <h3 className="font-bold mb-2">Best Patient Experience</h3>
                                <p className="text-gray-600 text-sm">2023 Healthcare Excellence</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#17839c' }}>
                                    <Users className="text-white" size={24} />
                                </div>
                                <h3 className="font-bold mb-2">Top Workplace</h3>
                                <p className="text-gray-600 text-sm">2024 Bay Area Business Journal</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#17839c' }}>
                                    <Shield className="text-white" size={24} />
                                </div>
                                <h3 className="font-bold mb-2">HIPAA Compliance Excellence</h3>
                                <p className="text-gray-600 text-sm">2024 Privacy & Security</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact CTA Section */}
                <div className="py-20 px-8" style={{ background: 'linear-gradient(135deg, #17839c 0%, #1b5a8a 100%)' }}>
                    <div className="max-w-screen-xl mx-auto text-center text-white">
                        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Whether you're a patient looking for rehabilitation care or a healthcare facility interested in partnering with us, we're here to help.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <button className="px-8 py-4 bg-white font-semibold rounded-lg shadow-lg transition transform hover:scale-105" style={{ color: '#17839c' }}>
                                Find Care Now
                            </button>
                            <button className="px-8 py-4 font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#17839c] transition bg-[#f68b1f]">
                                Partner With Us
                            </button>
                        </div>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                            <div className="text-center">
                                <Phone className="mx-auto mb-3" size={24} />
                                <p className="font-medium">Call Us</p>
                                <p>(888) 123-4567</p>
                            </div>
                            <div className="text-center">
                                <Mail className="mx-auto mb-3" size={24} />
                                <p className="font-medium">Email Us</p>
                                <p>hello@contigou.com</p>
                            </div>
                            <div className="text-center">
                                <MapPin className="mx-auto mb-3" size={24} />
                                <p className="font-medium">Visit Us</p>
                                <p>San Francisco, CA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUsPage;