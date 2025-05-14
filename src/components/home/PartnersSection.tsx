// components/home/PartnersSection.tsx
import PartnerCard from '@/components/ui/PartnerCard';
import { Partner } from '@/types';
import Image from 'next/image';

// Sample data
const partners: Partner[] = [
    {
        id: 'partner-1',
        title: 'Emergency Response Services',
        description: 'Immediate medical assistance with fully equipped ambulances and trained paramedics available 24/7.',
        icon: '<path d="M19 7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm-2 0v10H7V7h10zm-5 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>',
        badgeText: 'Available 24/7',
        badgeColor: 'red',
        stats: [
            { label: 'Response Time', value: 'Under 10 min' },
            { label: 'Coverage', value: 'City-wide' },
            { label: 'Specialists', value: '4+ per vehicle' }
        ],
        linkText: 'Partner Details',
        linkColor: 'red'
    },
    {
        id: 'partner-2',
        title: 'Medical Equipment Partners',
        description: 'Access to cutting-edge diagnostic and treatment equipment from leading global manufacturers.',
        icon: '<path d="M19 8a1 1 0 0 0-1-1h-4.2a1 1 0 0 0-.8.4L11.7 9H5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5.3l1.3 1.6a1 1 0 0 0 .8.4H17a1 1 0 0 0 1-1v-2h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1V8zm0 2v4h-1v3h-4.7l-1.3-1.6a1 1 0 0 0-.8-.4H6v-5h6.3l1.3-1.6a1 1 0 0 0 .8-.4H17v1h1z"/>',
        badgeText: 'Advanced Technology',
        badgeColor: 'blue',
        stats: [
            { label: 'Devices', value: '500+ Types' },
            { label: 'Maintenance', value: 'Regular' },
            { label: 'Accuracy', value: '99.8%' }
        ],
        linkText: 'Partner Details',
        linkColor: 'blue'
    },
    {
        id: 'partner-3',
        title: 'Insurance Network Providers',
        description: 'Seamless coverage with major insurance companies to minimize out-of-pocket expenses for patients.',
        icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>',
        badgeText: 'Direct Billing',
        badgeColor: 'green',
        stats: [
            { label: 'Providers', value: '40+ Companies' },
            { label: 'In Network', value: 'All treatments' },
            { label: 'Claims', value: 'Expedited' }
        ],
        linkText: 'Partner Details',
        linkColor: 'green'
    },
];

export default function PartnersSection() {
    return (
        <div id="partners-section" className="max-w-6xl mx-auto px-5 py-10">
            <h1 className="text-primary text-3xl font-semibold text-center mb-10">Our Featured Partners</h1>

            {/* Stats Section */}
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20 mb-12">
                <div className="text-center">
                    <div className="text-primary text-3xl font-bold mb-1">35+</div>
                    <div className="text-gray-600 text-sm">Partner Facilities</div>
                </div>

                <div className="text-center">
                    <div className="text-primary text-3xl font-bold mb-1">24/7</div>
                    <div className="text-gray-600 text-sm">Service Availability</div>
                </div>

                <div className="text-center">
                    <div className="text-primary text-3xl font-bold mb-1">98%</div>
                    <div className="text-gray-600 text-sm">Patient Satisfaction</div>
                </div>
            </div>

            {/* Partner Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {partners.map(partner => (
                    <PartnerCard key={partner.id} partner={partner} />
                ))}
            </div>

            {/* Testimonial Section */}
            <div className="max-w-6xl mx-auto">
                <div className="bg-blue-50 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
                    {/* Left Side - Heading */}
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <h2 className="text-4xl md:text-5xl font-bold text-teal-700 leading-tight" style={{ fontSize: "32px" }}>
                            What Our Customer Say About Us
                        </h2>
                    </div>

                    {/* Right Side - Stats and CTA */}
                    <div className="md:w-1/2 flex flex-col items-end space-y-6">
                        {/* Doctor CTA */}
                        <div className="flex items-center">
                            {/* Profile Images */}
                            <div className="flex -space-x-3 mr-4">
                                {[1, 2, 3, 4].map((num) => (
                                    <div
                                        key={num}
                                        className={`w-10 h-10 rounded-full border-2 border-white bg-${
                                            num === 1 ? 'red' : num === 2 ? 'yellow' : num === 3 ? 'blue' : 'green'
                                        }-200 overflow-hidden relative`}
                                    >
                                        <Image
                                            src="https://www.claudeusercontent.com/api/placeholder/40/40"
                                            alt={`Doctor profile ${num}`}
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-teal-700 text-lg font-medium mr-4">Talk to over 215 doctor</p>

                            {/* Arrow Button */}
                            <button className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center">
                            {/* Stars */}
                            <div className="flex text-yellow-400 mr-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Rating Text */}
                            <span className="text-teal-700 font-bold mr-2">(4.8)</span>
                            <span className="text-teal-600 text-sm">12k+ ratings on google</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}