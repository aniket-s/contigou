"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Users, Building, HelpCircle, Send, CheckCircle, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { NextPage } from 'next';

// Type definitions
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    inquiryType: string;
    subject: string;
    message: string;
    agreeToTerms: boolean;
}

interface ContactOption {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    phone: string;
    email: string;
    hours: string;
}

interface FAQItem {
    question: string;
    answer: string;
}

type InquiryType = 'general' | 'patient' | 'provider' | 'facility' | 'technical' | 'feedback';

const ContactUsPage: NextPage = () => {
    const [selectedInquiry, setSelectedInquiry] = useState<InquiryType>('general');
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: 'general',
        subject: '',
        message: '',
        agreeToTerms: false
    });

    const contactOptions: ContactOption[] = [
        {
            id: 'patients',
            title: 'For Patients & Families',
            description: 'Get help finding the right rehabilitation facility',
            icon: <Users size={32} />,
            phone: '(888) 123-4567',
            email: 'patients@contigou.com',
            hours: '24/7 Support Available'
        },
        {
            id: 'providers',
            title: 'For Healthcare Providers',
            description: 'Partner with us or get referral support',
            icon: <Building size={32} />,
            phone: '(888) 234-5678',
            email: 'providers@contigou.com',
            hours: 'Mon-Fri: 8AM-6PM PST'
        },
        {
            id: 'facilities',
            title: 'For Rehabilitation Facilities',
            description: 'Join our network and reach more patients',
            icon: <Building size={32} />,
            phone: '(888) 345-6789',
            email: 'facilities@contigou.com',
            hours: 'Mon-Fri: 8AM-6PM PST'
        }
    ];

    const faqItems: FAQItem[] = [
        {
            question: "How do I find rehabilitation facilities near me?",
            answer: "Simply use our search tool on the homepage. Enter your location and any specific needs, and we'll show you verified facilities in your area with detailed information about their services."
        },
        {
            question: "Is ContigoU free to use for patients?",
            answer: "Yes, our platform is completely free for patients and families. We don't charge any fees for using our search tools, getting facility information, or connecting with rehabilitation centers."
        },
        {
            question: "How do you verify the quality of facilities?",
            answer: "We partner only with accredited facilities that meet strict quality standards. We verify licensing, certifications, and regularly review patient feedback to ensure high-quality care."
        },
        {
            question: "Can you help with insurance verification?",
            answer: "While we provide general insurance information for each facility, we recommend contacting facilities directly for specific coverage verification. Our support team can also help guide you through this process."
        },
        {
            question: "How quickly can I get connected to a facility?",
            answer: "Many facilities respond within 24 hours. For urgent needs, we offer expedited connections and can help you contact facilities directly during business hours."
        },
        {
            question: "Do you offer support in languages other than English?",
            answer: "Yes, we have multilingual support available. Please let us know your language preference when contacting us, and we'll connect you with an appropriate team member."
        }
    ];

    const handleInputChange = <T extends keyof FormData>(field: T, value: FormData[T]): void => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (): void => {
        // Form submission logic would go here
        alert('Thank you for your message! We will get back to you within 24 hours.');
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        handleInputChange('inquiryType', e.target.value);
    };

    const handleInputChangeEvent = (field: keyof FormData) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const value = e.target.type === 'checkbox'
            ? (e.target as HTMLInputElement).checked
            : e.target.value;
        handleInputChange(field, value as FormData[typeof field]);
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        handleInputChange('agreeToTerms', e.target.checked);
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="py-20 px-8" style={{ background: 'linear-gradient(135deg, #17839c 0%, #1b5a8a 100%)' }}>
                <div className="max-w-screen-xl mx-auto text-center text-white">
                    <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        We're here to help you find the right rehabilitation care. Our dedicated support team is available to answer your questions and guide you through the process.
                    </p>
                    <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <Phone className="mx-auto mb-3" size={28} />
                            <p className="font-medium text-lg">24/7 Patient Support</p>
                            <p className="text-lg">(888) 123-4567</p>
                        </div>
                        <div className="text-center">
                            <Mail className="mx-auto mb-3" size={28} />
                            <p className="font-medium text-lg">Email Support</p>
                            <p className="text-lg">hello@contigou.com</p>
                        </div>
                        <div className="text-center">
                            <MessageSquare className="mx-auto mb-3" size={28} />
                            <p className="font-medium text-lg">Live Chat</p>
                            <p className="text-lg">Available 24/7</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Options Section */}
            <div className="py-20 px-8">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6" style={{ color: '#17839c' }}>How Can We Help You?</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Choose the option that best describes your needs, and we'll connect you with the right team member.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8 mb-16">
                        {contactOptions.map((option: ContactOption) => (
                            <div key={option.id} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#17839c' }}>
                                        <div className="text-white">{option.icon}</div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                                    <p className="text-gray-600">{option.description}</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <Phone size={18} className="mr-3" style={{ color: '#17839c' }} />
                                        <span className="font-medium">{option.phone}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail size={18} className="mr-3" style={{ color: '#17839c' }} />
                                        <span className="font-medium">{option.email}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock size={18} className="mr-3" style={{ color: '#17839c' }} />
                                        <span className="text-gray-600">{option.hours}</span>
                                    </div>
                                </div>

                                <button
                                    className="w-full mt-6 py-3 px-4 rounded-lg font-medium text-white transition"
                                    style={{ backgroundColor: '#f68b1f' }}
                                >
                                    Contact This Team
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="py-20 px-8 bg-gray-50">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6" style={{ color: '#17839c' }}>Send Us a Message</h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and we'll get back to you within 24 hours. For urgent matters, please call our support line.
                            </p>

                            <div className="bg-white rounded-lg shadow-md p-8">
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">First Name *</label>
                                        <input
                                            type="text"
                                            className="w-full p-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none"
                                            value={formData.firstName}
                                            onChange={handleInputChangeEvent('firstName')}
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Last Name *</label>
                                        <input
                                            type="text"
                                            className="w-full p-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none"
                                            value={formData.lastName}
                                            onChange={handleInputChangeEvent('lastName')}
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            className="w-full p-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none"
                                            value={formData.email}
                                            onChange={handleInputChangeEvent('email')}
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="w-full p-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none"
                                            value={formData.phone}
                                            onChange={handleInputChangeEvent('phone')}
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2">Inquiry Type *</label>
                                    <select
                                        className="w-full p-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none"
                                        value={formData.inquiryType}
                                        onChange={handleSelectChange}
                                    >
                                        <option value="general">General Information</option>
                                        <option value="patient">Patient Support</option>
                                        <option value="provider">Healthcare Provider Inquiry</option>
                                        <option value="facility">Facility Partnership</option>
                                        <option value="technical">Technical Support</option>
                                        <option value="feedback">Feedback/Suggestions</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none"
                                        value={formData.subject}
                                        onChange={handleInputChangeEvent('subject')}
                                        placeholder="Brief description of your inquiry"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-2">Message *</label>
                                    <textarea
                                        className="w-full p-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none h-32"
                                        value={formData.message}
                                        onChange={handleInputChangeEvent('message')}
                                        placeholder="Please provide details about your inquiry..."
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="flex items-start">
                                        <input
                                            type="checkbox"
                                            className="mt-1 mr-3"
                                            checked={formData.agreeToTerms}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="text-sm text-gray-600">
                      I agree to ContigoU's <a href="#" className="underline" style={{ color: '#17839c' }}>Privacy Policy</a> and consent to being contacted regarding my inquiry. *
                    </span>
                                    </label>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full py-3 px-6 rounded-lg font-medium text-white flex items-center justify-center transition"
                                    style={{ backgroundColor: '#17839c' }}
                                    disabled={!formData.agreeToTerms}
                                >
                                    <Send size={20} className="mr-2" />
                                    Send Message
                                </button>

                                <p className="text-sm text-gray-500 mt-4 text-center">
                                    We typically respond within 24 hours during business days.
                                </p>
                            </div>
                        </div>

                        {/* Contact Information & Map */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6" style={{ color: '#17839c' }}>Get In Touch</h2>

                            {/* Office Information */}
                            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                                <h3 className="text-xl font-bold mb-4">Our Office</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <MapPin size={20} className="mt-1 mr-3 shrink-0" style={{ color: '#17839c' }} />
                                        <div>
                                            <p className="font-medium">Address</p>
                                            <p className="text-gray-600">123 Healthcare Boulevard<br />Suite 400<br />San Francisco, CA 94105</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Phone size={20} className="mt-1 mr-3 shrink-0" style={{ color: '#17839c' }} />
                                        <div>
                                            <p className="font-medium">Main Office</p>
                                            <p className="text-gray-600">(415) 123-4567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Mail size={20} className="mt-1 mr-3 shrink-0" style={{ color: '#17839c' }} />
                                        <div>
                                            <p className="font-medium">General Inquiries</p>
                                            <p className="text-gray-600">hello@contigou.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Clock size={20} className="mt-1 mr-3 shrink-0" style={{ color: '#17839c' }} />
                                        <div>
                                            <p className="font-medium">Office Hours</p>
                                            <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM PST<br />
                                                Saturday: 9:00 AM - 2:00 PM PST<br />
                                                Sunday: Emergency support only</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                                <div className="h-64 bg-gray-200">
                                    <img
                                        src="/api/placeholder/600/300"
                                        alt="Office location map"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <button
                                        className="w-full py-2 px-4 rounded-md font-medium text-white"
                                        style={{ backgroundColor: '#17839c' }}
                                    >
                                        Get Directions
                                    </button>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-white rounded-lg shadow-md p-8">
                                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center text-white transition hover:opacity-80" style={{ backgroundColor: '#17839c' }}>
                                        <Facebook size={20} />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center text-white transition hover:opacity-80" style={{ backgroundColor: '#17839c' }}>
                                        <Twitter size={20} />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center text-white transition hover:opacity-80" style={{ backgroundColor: '#17839c' }}>
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center text-white transition hover:opacity-80" style={{ backgroundColor: '#17839c' }}>
                                        <Instagram size={20} />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center text-white transition hover:opacity-80" style={{ backgroundColor: '#17839c' }}>
                                        <Youtube size={20} />
                                    </a>
                                </div>
                                <p className="text-gray-600 mt-4 text-sm">
                                    Stay updated with the latest news, health tips, and platform updates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-20 px-8">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6" style={{ color: '#17839c' }}>Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Find quick answers to common questions. If you don't see what you're looking for, don't hesitate to contact us directly.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {faqItems.map((item: FAQItem, i: number) => (
                            <div key={i} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                                <div className="flex items-start mb-3">
                                    <HelpCircle size={20} className="mt-1 mr-3 shrink-0" style={{ color: '#17839c' }} />
                                    <h3 className="text-lg font-semibold">{item.question}</h3>
                                </div>
                                <p className="text-gray-700 ml-8">{item.answer}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="py-3 px-8 rounded-lg font-medium text-white" style={{ backgroundColor: '#f68b1f' }}>
                            View All FAQs
                        </button>
                    </div>
                </div>
            </div>

            {/* Emergency Contact Section */}
            <div className="py-16 px-8 bg-red-50 border-l-4 border-red-500">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4 text-red-700">Emergency Situations</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        If you're experiencing a medical emergency, please call 911 immediately. ContigoU is not an emergency service and cannot provide immediate medical assistance.
                    </p>
                    <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                        <div>
                            <p className="font-bold text-red-700">Medical Emergency</p>
                            <p className="text-2xl font-bold">911</p>
                        </div>
                        <div>
                            <p className="font-bold text-red-700">Crisis Helpline</p>
                            <p className="text-2xl font-bold">988</p>
                        </div>
                        <div>
                            <p className="font-bold text-red-700">Poison Control</p>
                            <p className="text-2xl font-bold">(800) 222-1222</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;