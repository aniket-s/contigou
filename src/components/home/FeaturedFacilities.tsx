import Link from 'next/link';
import FacilityCard from '@/components/ui/FacilityCard';
import { Facility } from '@/types';

// Sample data
const facilities: Facility[] = [
    {
        id: 'facility-1',
        name: "O'CONNOR HOSPITAL D/P SNF",
        address: "2105 FOREST AVENUE, SJ 95128",
        distance: {
            time: "5 MIN",
            miles: "0.50 MI"
        },
        rating: 3.5,
        isTopRated: true
    },
    {
        id: 'facility-2',
        name: "KERN RIVER TRANSITIONAL CARE",
        address: "5151 CHRISTMAS TREE LN, 93306",
        distance: {
            time: "5 MIN",
            miles: "0.60 MI"
        },
        rating: 3.0,
        isTopRated: true
    },
    {
        id: 'facility-3',
        name: "VETERANS HOME OF CALIFORNIA-WEST LOS ANGELES",
        address: "11500 NIMITZ AVE, 90049",
        distance: {
            time: "5 MIN",
            miles: "0.60 MI"
        },
        rating: 3.5,
        isTopRated: true
    },
    {
        id: 'facility-4',
        name: "IMPERIAL MANOR",
        address: "1555 1ST STREET, 92251",
        distance: {
            time: "6 MIN",
            miles: "0.60 MI"
        },
        rating: 3.5,
        isTopRated: true
    }
];

export default function FeaturedFacilities() {
    return (
        <section className="bg-gradient-to-b from-[#fbfdfe] to-[#f0f9fe]">
            <div className="max-w-7xl mx-auto px-5 py-10 md:py-16">
                <h2 className="text-primary text-3xl font-semibold text-center mb-10">Featured Facilities</h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {facilities.map(facility => (
                        <FacilityCard key={facility.id} facility={facility} />
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="/facilities"
                        className="inline-block py-3 px-8 bg-primary text-white font-medium rounded-full hover:bg-blue-700 transition-colors"
                    >
                        View All Facilities
                    </Link>
                </div>
            </div>
        </section>
    );
}