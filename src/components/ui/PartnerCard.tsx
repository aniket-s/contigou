import Link from 'next/link';
import { Partner } from '@/types';

interface PartnerCardProps {
    partner: Partner;
}

export default function PartnerCard({ partner }: PartnerCardProps) {
    return (
        <div className="bg-[#f1f9fc] rounded-lg shadow-md flex flex-col overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="flex justify-between items-start p-5 relative">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md z-10">
                    <svg
                        className={`w-8 h-8 text-${partner.linkColor}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        dangerouslySetInnerHTML={{ __html: partner.icon }}
                    />
                </div>
                <div className={`absolute top-5 right-0 text-xs font-medium py-1 px-5 bg-${partner.linkColor}-50 text-${partner.linkColor}-500 rounded-l-full`}>
                    {partner.badgeText}
                </div>
            </div>

            <div className="px-5 pb-5 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 min-h-[50px]">{partner.title}</h3>

                <p className="text-gray-600 text-sm mb-5 flex-grow">
                    {partner.description}
                </p>

                <div className="mt-auto mb-5 bg-white p-2">
                    {partner.stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`flex justify-between py-2 ${index < partner.stats.length - 1 ? 'border-b border-gray-100' : ''}`}
                        >
                            <div className="text-gray-500 text-sm">{stat.label}</div>
                            <div className="text-gray-800 text-sm font-medium">{stat.value}</div>
                        </div>
                    ))}
                </div>

                <Link
                    href={`/partners/${partner.id}`}
                    className={`block text-center py-3 border border-${partner.linkColor}-500 text-${partner.linkColor}-500 rounded-lg font-medium text-sm hover:bg-${partner.linkColor}-500 hover:text-white transition-colors`}
                >
                    Partner Details &nbsp;›
                </Link>
            </div>
        </div>
    );
}