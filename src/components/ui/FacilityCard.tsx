import Link from 'next/link';
import { Facility } from '@/types';
import Image from "next/image";

interface FacilityCardProps {
    facility: Facility;
}

export default function FacilityCard({ facility }: FacilityCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-5 w-full sm:w-[calc(50%-12px)] xl:w-[calc(25%-18px)] min-w-[260px] transition-transform hover:-translate-y-1 hover:shadow-xl">
            {/* Facility logo and top rated badge */}
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                    <Image src="/cont-logo.png" width="120" height="60" alt="ContigoU Logo" className="h-8"/>
                </div>
                {facility.isTopRated && (
                    <div className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">Top Rated</div>
                )}
            </div>

            {/* Facility image placeholder */}
            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                    src={facility.imageUrl || "https://www.claudeusercontent.com/api/placeholder/400/200"}
                    width={400}
                    height={200}
                    alt={`${facility.name} facility`}
                    className="w-full h-full object-cover"
                />
            </div>

            <h3 className="text-primary text-md font-semibold mb-4 min-h-[37px] leading-tight">{facility.name}</h3>

            <div className="flex items-start mb-1">
                <span className="text-lg mr-2 text-primary">📍</span>
                <span className="text-gray-600 text-sm">{facility.address}</span>
            </div>

            <div className="flex items-center mb-4">
                <span className="text-lg mr-2 text-primary">🕒</span>
                <span className="text-gray-600 text-sm">{facility.distance.time} AWAY ({facility.distance.miles})</span>
            </div>

            <div className="mb-4">
                <span className="text-gray-600 text-sm font-medium mr-2">RATING:</span>
                <span className="bg-secondary text-white px-2 py-1 rounded text-sm font-bold">{facility.rating}</span>
            </div>

            <Link
                href={`/facilities/${facility.id}`}
                className="block w-full py-3 bg-secondary text-white text-center font-medium rounded-full hover:bg-orange-500 transition-colors"
            >
                View Details
            </Link>
        </div>
    );
}