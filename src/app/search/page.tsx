'use client'
import React, { useState, useMemo } from 'react';
import {
    Star,
    MapPin,
    Phone,
    Clock,
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    Filter,
    Award,
    Heart,
    ThumbsUp,
    X
} from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

// TypeScript interfaces
interface Facility {
    id: number;
    name: string;
    logo: string;
    type: string;
    address: string;
    phone: string;
    rating: number;
    reviews: number;
    distance: string;
    distanceValue: number; // for sorting
    specialties: string[];
    insurance: string[];
    hours: string;
    images: string[];
    description: string;
    costPerDay: string;
    costValue: number; // for sorting
    mapUrl: string;
    certifications: string[];
    acceptingNewPatients: boolean;
}

interface FilterState {
    facilityTypes: string[];
    specialties: string[];
    insurance: string[];
    distance: string;
    rating: number[];
}

const SearchResultsPage: React.FC = () => {
    const [expandedFacility, setExpandedFacility] = useState<number | null>(null);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [sortBy, setSortBy] = useState<string>('recommended');
    const [searchLocation, setSearchLocation] = useState<string>('San Jose, CA');
    const [searchZipcode, setSearchZipcode] = useState<string>('95128');

    // Filter state
    const [filters, setFilters] = useState<FilterState>({
        facilityTypes: ['Inpatient Rehabilitation', 'Physical Rehabilitation'],
        specialties: ['Physical Therapy'],
        insurance: ['Medicare', 'Blue Cross'],
        distance: 'Within 5 miles',
        rating: [4]
    });

    const facilitiesPerPage = 4;

    // Sample data with additional properties for filtering/sorting
    const allFacilities: Facility[] = [
        {
            id: 1,
            name: "O'Connor Hospital Rehab Center",
            logo: "https://www.claudeusercontent.com/api/placeholder/60/60",
            type: "Inpatient Rehabilitation",
            address: "2105 Forest Ave, San Jose, CA 95128",
            phone: "(408) 947-2500",
            rating: 4.8,
            reviews: 126,
            distance: "2.3 mi away",
            distanceValue: 2.3,
            specialties: ["Physical Therapy", "Stroke Recovery", "Orthopedic Rehabilitation"],
            insurance: ["Medicare", "Blue Cross", "Aetna", "UnitedHealthcare"],
            hours: "Mon-Fri: 7AM-8PM, Sat-Sun: 8AM-5PM",
            images: [
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400"
            ],
            description: "O'Connor Hospital Rehabilitation Center offers comprehensive inpatient rehabilitation services with a focus on personalized care plans. Our team of specialists works together to help patients recover from injuries, surgeries, and other conditions requiring intensive rehabilitation.",
            costPerDay: "$1,450",
            costValue: 1450,
            mapUrl: "https://www.claudeusercontent.com/api/placeholder/300/180",
            certifications: ["Joint Commission Accredited", "Medicare Certified"],
            acceptingNewPatients: true
        },
        {
            id: 2,
            name: "Wellness Rehab Center",
            logo: "https://www.claudeusercontent.com/api/placeholder/60/60",
            type: "Physical Rehabilitation",
            address: "3420 Valley Ave, Oakland, CA 94612",
            phone: "(510) 555-1234",
            rating: 4.7,
            reviews: 98,
            distance: "3.1 mi away",
            distanceValue: 3.1,
            specialties: ["Physical Therapy", "Elderly Care", "Pain Management"],
            insurance: ["Medicare", "Kaiser", "Blue Shield", "Cigna"],
            hours: "Mon-Fri: 8AM-7PM, Sat: 9AM-2PM, Sun: Closed",
            images: [
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400"
            ],
            description: "Wellness Rehab Center specializes in physical rehabilitation with a focus on elderly care and pain management. Our state-of-the-art facility provides a comfortable environment for recovery, and our experienced staff is dedicated to helping each patient achieve their rehabilitation goals.",
            costPerDay: "$1,250",
            costValue: 1250,
            mapUrl: "https://www.claudeusercontent.com/api/placeholder/300/180",
            certifications: ["CARF Accredited", "Medicare Certified"],
            acceptingNewPatients: true
        },
        {
            id: 3,
            name: "Veterans Home of California Rehab",
            logo: "https://www.claudeusercontent.com/api/placeholder/60/60",
            type: "Inpatient Rehabilitation",
            address: "1200 Veterans Cir, Los Angeles, CA 90073",
            phone: "(323) 725-7000",
            rating: 4.6,
            reviews: 87,
            distance: "4.5 mi away",
            distanceValue: 4.5,
            specialties: ["Traumatic Brain Injury", "Spinal Cord Injury", "Amputation Care"],
            insurance: ["VA Benefits", "Medicare", "TRICARE"],
            hours: "24/7 Service",
            images: [
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400"
            ],
            description: "Veterans Home of California Rehabilitation Center provides specialized care for veterans with a focus on traumatic brain injury, spinal cord injury, and amputation care. Our dedicated team of healthcare professionals is committed to supporting veterans through their rehabilitation journey.",
            costPerDay: "$1,350",
            costValue: 1350,
            mapUrl: "https://www.claudeusercontent.com/api/placeholder/300/180",
            certifications: ["VA Certified", "Joint Commission Accredited"],
            acceptingNewPatients: false
        },
        {
            id: 4,
            name: "Imperial Manor Rehabilitation",
            logo: "https://www.claudeusercontent.com/api/placeholder/60/60",
            type: "Physical Rehabilitation",
            address: "750 Martin St, Palo Alto, CA 94301",
            phone: "(650) 723-4000",
            rating: 4.5,
            reviews: 72,
            distance: "5.2 mi away",
            distanceValue: 5.2,
            specialties: ["Neurological Rehabilitation", "Post-Surgery Recovery", "Speech Therapy"],
            insurance: ["Medicare", "Blue Cross", "Cigna", "HealthNet"],
            hours: "Mon-Fri: 7AM-8PM, Sat: 8AM-6PM, Sun: 9AM-5PM",
            images: [
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400"
            ],
            description: "Imperial Manor Rehabilitation offers specialized physical rehabilitation services with a focus on neurological conditions and post-surgical recovery. Our modern facility is equipped with the latest technology to support comprehensive rehabilitation programs.",
            costPerDay: "$1,550",
            costValue: 1550,
            mapUrl: "https://www.claudeusercontent.com/api/placeholder/300/180",
            certifications: ["CARF Accredited", "Joint Commission Accredited"],
            acceptingNewPatients: true
        },
        {
            id: 5,
            name: "Eden River Transitional Care",
            logo: "https://www.claudeusercontent.com/api/placeholder/60/60",
            type: "Inpatient Rehabilitation",
            address: "1133 Thames Dr, San Francisco, CA 94107",
            phone: "(415) 554-7890",
            rating: 4.7,
            reviews: 83,
            distance: "7.8 mi away",
            distanceValue: 7.8,
            specialties: ["Cardiac Rehabilitation", "Pulmonary Rehabilitation", "Joint Replacement Recovery"],
            insurance: ["Medicare", "Blue Shield", "Aetna", "UnitedHealthcare"],
            hours: "24/7 Service",
            images: [
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400"
            ],
            description: "Eden River Transitional Care provides comprehensive inpatient rehabilitation with specialized programs for cardiac and pulmonary rehabilitation. Our facility offers a seamless transition from hospital to home with personalized care plans designed for optimal recovery.",
            costPerDay: "$1,300",
            costValue: 1300,
            mapUrl: "https://www.claudeusercontent.com/api/placeholder/300/180",
            certifications: ["Medicare Certified", "CARF Accredited"],
            acceptingNewPatients: true
        },
        {
            id: 6,
            name: "Pacific Heights Recovery Center",
            logo: "https://www.claudeusercontent.com/api/placeholder/60/60",
            type: "Physical Rehabilitation",
            address: "2300 Pacific Ave, San Francisco, CA 94115",
            phone: "(415) 346-2000",
            rating: 4.9,
            reviews: 112,
            distance: "8.3 mi away",
            distanceValue: 8.3,
            specialties: ["Sports Injury Rehabilitation", "Manual Therapy", "Aquatic Therapy"],
            insurance: ["Medicare", "Blue Cross", "Kaiser", "Cigna", "HealthNet"],
            hours: "Mon-Fri: 6AM-9PM, Sat-Sun: 7AM-7PM",
            images: [
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400",
                "https://www.claudeusercontent.com/api/placeholder/800/400"
            ],
            description: "Pacific Heights Recovery Center specializes in sports injury rehabilitation and offers a variety of therapy options including manual and aquatic therapy. Our experienced therapists work with athletes and active individuals to restore function and prevent future injuries.",
            costPerDay: "$1,400",
            costValue: 1400,
            mapUrl: "https://www.claudeusercontent.com/api/placeholder/300/180",
            certifications: ["Sports Medicine Certified", "APTA Recognized"],
            acceptingNewPatients: true
        }
    ];

    // Get all unique values for filter options
    const allFacilityTypes = [...new Set(allFacilities.map(f => f.type))];
    const allSpecialties = [...new Set(allFacilities.flatMap(f => f.specialties))];
    const allInsurance = [...new Set(allFacilities.flatMap(f => f.insurance))];

    // Filter and sort facilities
    const filteredAndSortedFacilities = useMemo(() => {
        const filtered = allFacilities.filter(facility => {
            // Facility type
            if (filters.facilityTypes.length > 0 && !filters.facilityTypes.includes(facility.type)) {
                return false;
            }
            // Specialties
            if (filters.specialties.length > 0 && !filters.specialties.some(s => facility.specialties.includes(s))) {
                return false;
            }
            // Insurance
            if (filters.insurance.length > 0 && !filters.insurance.some(i => facility.insurance.includes(i))) {
                return false;
            }
            // Distance
            const maxDistance = filters.distance === 'Within 5 miles' ? 5
                : filters.distance === 'Within 10 miles' ? 10
                    : filters.distance === 'Within 25 miles' ? 25 : 999;
            if (facility.distanceValue > maxDistance) {
                return false;
            }
            // Rating
            return !(filters.rating.length > 0 && !filters.rating.some(r => facility.rating >= r));

        });

        // Sort
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'distance':
                    return a.distanceValue - b.distanceValue;
                case 'rating':
                    return b.rating - a.rating;
                case 'cost':
                    return a.costValue - b.costValue;
                case 'specialties':
                    return b.specialties.length - a.specialties.length;
                default:
                    return b.rating * b.reviews - a.rating * a.reviews;
            }
        });

        return filtered;
    }, [filters, sortBy, allFacilities]);

    // Pagination
    const totalPages = Math.ceil(filteredAndSortedFacilities.length / facilitiesPerPage);
    const paginatedFacilities = filteredAndSortedFacilities.slice(
        (currentPage - 1) * facilitiesPerPage,
        currentPage * facilitiesPerPage
    );

    // Filter handlers
    const handleFilterChange = (
        category: keyof FilterState,
        value: string | number,
        checked?: boolean
    ): void => {
        setFilters(prev => {
            const newFilters: FilterState = { ...prev };

            if (category === 'distance') {
                newFilters.distance = value as string;
            }
            else if (category === 'rating') {
                // rating is number[]
                const old = prev.rating;
                newFilters.rating = checked
                    ? [...old, value as number]
                    : old.filter(r => r !== value);
            }
            else if (category === 'facilityTypes') {
                const old = prev.facilityTypes;
                newFilters.facilityTypes = checked
                    ? [...old, value as string]
                    : old.filter(s => s !== value);
            }
            else if (category === 'specialties') {
                const old = prev.specialties;
                newFilters.specialties = checked
                    ? [...old, value as string]
                    : old.filter(s => s !== value);
            }
            else if (category === 'insurance') {
                const old = prev.insurance;
                newFilters.insurance = checked
                    ? [...old, value as string]
                    : old.filter(i => i !== value);
            }

            return newFilters;
        });

        setCurrentPage(1);
    };

    const clearAllFilters = () => {
        setFilters({
            facilityTypes: [],
            specialties: [],
            insurance: [],
            distance: 'Any distance',
            rating: []
        });
        setCurrentPage(1);
    };

    const applyFilters = () => {
        setMobileFiltersOpen(false);
        // Filters are applied automatically via useMemo
    };

    const handleSearch = () => {
        // In a real app, this would trigger a new search
        console.log('Searching for:', searchLocation, searchZipcode);
    };

    const toggleExpand = (id: number): void => {
        if (expandedFacility === id) {
            setExpandedFacility(null);
        } else {
            setExpandedFacility(id);
        }
    };

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={18}
                fill={i < Math.floor(rating) ? "currentColor" : "none"}
            />
        ));
    };

    const FilterSidebar: React.FC = () => (
        <div className="bg-white rounded-lg shadow p-5">
            <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-lg text-gray-800">Filters</h2>
                <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="lg:hidden"
                >
                    <X size={24} />
                </button>
            </div>

            <div className="border-b pb-4 mb-4">
                <h3 className="font-medium text-gray-700 mb-3 flex items-center justify-between">
                    Facility Type
                    <ChevronDown size={16} className="text-gray-500" />
                </h3>
                <div className="space-y-2">
                    {allFacilityTypes.map(type => (
                        <label key={type} className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={filters.facilityTypes.includes(type)}
                                onChange={(e) => handleFilterChange('facilityTypes', type, e.target.checked)}
                            />
                            <span className="text-sm md:text-base">{type}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="border-b pb-4 mb-4">
                <h3 className="font-medium text-gray-700 mb-3 flex items-center justify-between">
                    Specialties
                    <ChevronDown size={16} className="text-gray-500" />
                </h3>
                <div className="space-y-2">
                    {allSpecialties.slice(0, 7).map(specialty => (
                        <label key={specialty} className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={filters.specialties.includes(specialty)}
                                onChange={(e) => handleFilterChange('specialties', specialty, e.target.checked)}
                            />
                            <span className="text-sm md:text-base">{specialty}</span>
                        </label>
                    ))}
                </div>
                <button className="text-sm font-medium mt-2" style={{ color: '#17839c' }}>+ Show more</button>
            </div>

            <div className="border-b pb-4 mb-4">
                <h3 className="font-medium text-gray-700 mb-3 flex items-center justify-between">
                    Insurance Accepted
                    <ChevronDown size={16} className="text-gray-500" />
                </h3>
                <div className="space-y-2">
                    {allInsurance.slice(0, 6).map(insurance => (
                        <label key={insurance} className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={filters.insurance.includes(insurance)}
                                onChange={(e) => handleFilterChange('insurance', insurance, e.target.checked)}
                            />
                            <span className="text-sm md:text-base">{insurance}</span>
                        </label>
                    ))}
                </div>
                <button className="text-sm font-medium mt-2" style={{ color: '#17839c' }}>+ Show more</button>
            </div>

            <div className="border-b pb-4 mb-4">
                <h3 className="font-medium text-gray-700 mb-3 flex items-center justify-between">
                    Distance
                    <ChevronDown size={16} className="text-gray-500" />
                </h3>
                <div className="space-y-2">
                    {['Within 5 miles', 'Within 10 miles', 'Within 25 miles', 'Any distance'].map(distance => (
                        <label key={distance} className="flex items-center">
                            <input
                                type="radio"
                                name="distance"
                                className="mr-2"
                                checked={filters.distance === distance}
                                onChange={() => handleFilterChange('distance', distance)}
                            />
                            <span className="text-sm md:text-base">{distance}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="border-b pb-4 mb-4">
                <h3 className="font-medium text-gray-700 mb-3 flex items-center justify-between">
                    Rating
                    <ChevronDown size={16} className="text-gray-500" />
                </h3>
                <div className="space-y-2">
                    {[5, 4, 3].map(rating => (
                        <label key={rating} className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={filters.rating.includes(rating)}
                                onChange={(e) => handleFilterChange('rating', rating, e.target.checked)}
                            />
                            <div className="flex text-yellow-400">
                                {[...Array(rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                                {[...Array(5 - rating)].map((_, i) => (
                                    <Star key={i} size={16} />
                                ))}
                            </div>
                            <span className="text-gray-500 ml-1 text-sm">& up</span>
                        </label>
                    ))}
                </div>
            </div>

            <button
                onClick={applyFilters}
                className="w-full text-white font-semibold py-3 px-4 rounded-lg transition"
                style={{ backgroundColor: '#17839c' }}
            >
                Apply Filters
            </button>

            <button
                onClick={clearAllFilters}
                className="w-full font-medium py-2 mt-2 transition"
                style={{ color: '#17839c' }}
            >
                Clear All Filters
            </button>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
                {/* Header with search bar */}
                <div className="bg-white rounded-lg shadow p-4 lg:p-6 mb-6 lg:mb-8">
                    <h1 className="text-xl lg:text-2xl font-bold mb-4" style={{ color: '#17839c' }}>
                        Rehabilitation Facilities in {searchLocation}
                    </h1>
                    <div className="flex flex-col md:flex-row items-center gap-3 lg:gap-4">
                        <div className="w-full md:w-1/3">
                            <input
                                type="text"
                                placeholder="Enter city or state"
                                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                                value={searchLocation}
                                onChange={(e) => setSearchLocation(e.target.value)}
                            />
                        </div>
                        <div className="w-full md:w-1/3">
                            <input
                                type="text"
                                placeholder="Enter zipcode"
                                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                                value={searchZipcode}
                                onChange={(e) => setSearchZipcode(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={handleSearch}
                            className="w-full md:w-auto text-white font-semibold py-3 px-6 rounded-lg transition hover:opacity-90"
                            style={{ backgroundColor: '#f68b1f' }}
                        >
                            Find Care
                        </button>
                    </div>
                    <div className="mt-4 text-gray-600 text-sm lg:text-base">
                        <p>Showing {filteredAndSortedFacilities.length} rehabilitation facilities near {searchLocation}</p>
                    </div>
                </div>

                {/* Mobile filter button */}
                <div className="lg:hidden mb-4">
                    <button
                        onClick={() => setMobileFiltersOpen(true)}
                        className="flex items-center gap-2 text-white font-medium px-4 py-2 rounded-lg"
                        style={{ backgroundColor: '#17839c' }}
                    >
                        <Filter size={20} />
                        Filters ({Object.values(filters).flat().length})
                    </button>
                </div>

                {/* Main content */}
                <div className="flex gap-8">
                    {/* Desktop sidebar */}
                    <div className="hidden lg:block w-72 shrink-0">
                        <div className="sticky top-6">
                            <FilterSidebar />
                        </div>
                    </div>

                    {/* Mobile sidebar overlay */}
                    {mobileFiltersOpen && (
                        <div className="lg:hidden fixed inset-0 z-50 flex">
                            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMobileFiltersOpen(false)} />
                            <div className="relative bg-white w-80 max-w-full overflow-y-auto">
                                <FilterSidebar />
                            </div>
                        </div>
                    )}

                    {/* Main content area */}
                    <div className="flex-1">
                        {/* Sort options */}
                        <div className="bg-white rounded-lg shadow p-3 lg:p-4 mb-4 lg:mb-6">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <span className="font-medium text-gray-700 text-sm lg:text-base">Sort by:</span>
                                <div className="flex flex-wrap gap-2 lg:gap-4">
                                    <button
                                        onClick={() => setSortBy('recommended')}
                                        className={`flex items-center px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg font-medium text-sm lg:text-base ${
                                            sortBy === 'recommended' ? 'text-white' : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                        style={sortBy === 'recommended' ? { backgroundColor: '#17839c' } : {}}
                                    >
                                        <ThumbsUp size={16} className="mr-1 lg:mr-2" />
                                        <span className="hidden sm:inline">Recommended</span>
                                        <span className="sm:hidden">Top</span>
                                    </button>
                                    <button
                                        onClick={() => setSortBy('distance')}
                                        className={`flex items-center px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg font-medium text-sm lg:text-base ${
                                            sortBy === 'distance' ? 'text-white' : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                        style={sortBy === 'distance' ? { backgroundColor: '#17839c' } : {}}
                                    >
                                        <MapPin size={16} className="mr-1 lg:mr-2" />
                                        Distance
                                    </button>
                                    <button
                                        onClick={() => setSortBy('rating')}
                                        className={`flex items-center px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg font-medium text-sm lg:text-base ${
                                            sortBy === 'rating' ? 'text-white' : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                        style={sortBy === 'rating' ? { backgroundColor: '#17839c' } : {}}
                                    >
                                        <Star size={16} className="mr-1 lg:mr-2" />
                                        Rating
                                    </button>
                                    <button
                                        onClick={() => setSortBy('specialties')}
                                        className={`hidden sm:flex items-center px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg font-medium text-sm lg:text-base ${
                                            sortBy === 'specialties' ? 'text-white' : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                        style={sortBy === 'specialties' ? { backgroundColor: '#17839c' } : {}}
                                    >
                                        <Award size={16} className="mr-1 lg:mr-2" />
                                        Specialties
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* No results message */}
                        {filteredAndSortedFacilities.length === 0 && (
                            <div className="bg-white rounded-lg shadow p-8 text-center">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">No facilities found</h3>
                                <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
                                <button
                                    onClick={clearAllFilters}
                                    className="text-white font-medium px-6 py-2 rounded-lg"
                                    style={{ backgroundColor: '#17839c' }}
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        )}

                        {/* Facility listing */}
                        <div className="space-y-4">
                            {paginatedFacilities.map((facility) => (
                                <div key={facility.id}>
                                    {/* Main listing card */}
                                    <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
                                        <div className="flex flex-col lg:flex-row">
                                            {/* Facility image */}
                                            <div className="w-full lg:w-64 h-48 lg:h-64 shrink-0 relative">
                                                <Image
                                                    src={facility.images[0]}
                                                    alt={facility.name}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow">
                                                    <Heart size={20} className="text-gray-400 hover:text-red-500 cursor-pointer" />
                                                </div>
                                            </div>

                                            {/* Facility details */}
                                            <div className="flex-1 p-4 lg:p-5 flex flex-col">
                                                <div className="flex flex-col sm:flex-row justify-between mb-2 gap-2">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3">
                                                            <Image
                                                                src={facility.logo}
                                                                alt={`${facility.name} logo`}
                                                                className="w-8 lg:w-10 h-8 lg:h-10 rounded-full object-cover"
                                                            />
                                                            <div>
                                                                <h3 className="text-lg lg:text-xl font-bold text-gray-800">{facility.name}</h3>
                                                                <p className="text-sm lg:text-base text-gray-600">{facility.type}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="rounded-full font-medium h-fit px-3 lg:px-4 py-1.5 lg:py-2 text-white text-sm lg:text-base"
                                                         style={{ backgroundColor: '#17839c' }}>
                                                        {facility.distance}
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4 mb-3">
                                                    <div className="flex items-center">
                                                        <div className="flex text-yellow-400 mr-1">
                                                            {renderStars(facility.rating)}
                                                        </div>
                                                        <span className="text-gray-700 font-medium text-sm lg:text-base">{facility.rating}</span>
                                                        <span className="text-gray-500 ml-1 text-sm">({facility.reviews} reviews)</span>
                                                    </div>
                                                </div>

                                                <div className="space-y-2 mb-3 text-sm lg:text-base">
                                                    <div className="flex items-start">
                                                        <MapPin size={16} className="text-gray-500 mt-0.5 mr-2 shrink-0" />
                                                        <span className="text-gray-700">{facility.address}</span>
                                                    </div>
                                                    <div className="flex items-start">
                                                        <Phone size={16} className="text-gray-500 mt-0.5 mr-2 shrink-0" />
                                                        <span className="text-gray-700">{facility.phone}</span>
                                                    </div>
                                                    <div className="flex items-start">
                                                        <Clock size={16} className="text-gray-500 mt-0.5 mr-2 shrink-0" />
                                                        <span className="text-gray-700">{facility.hours}</span>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-1 mb-3">
                                                    {facility.specialties.slice(0, 2).map((specialty, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-2 py-1 rounded-full text-xs lg:text-sm text-white"
                                                            style={{ backgroundColor: '#17839c' }}
                                                        >
                                                            {specialty}
                                                        </span>
                                                    ))}
                                                    {facility.specialties.length > 2 && (
                                                        <span className="px-2 py-1 text-xs lg:text-sm text-gray-600">
                                                            +{facility.specialties.length - 2} more
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="mt-auto pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                                    <div>
                                                        <div className="font-bold text-gray-800">{facility.costPerDay}</div>
                                                        <div className="text-sm text-gray-600">per day</div>
                                                    </div>

                                                    <div className="flex gap-2 w-full sm:w-auto">
                                                        <button
                                                            onClick={() => toggleExpand(facility.id)}
                                                            className="flex-1 sm:flex-initial border font-medium px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base"
                                                            style={{ borderColor: '#17839c', color: '#17839c' }}
                                                        >
                                                            {expandedFacility === facility.id ? 'Hide' : 'View'} Details
                                                        </button>
                                                        <button className="flex-1 sm:flex-initial text-white font-medium px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base"
                                                                style={{ backgroundColor: '#f68b1f' }}>
                                                            Contact
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right section - Location Map (hidden on mobile) */}
                                            <div className="hidden xl:block w-64 shrink-0 border-l">
                                                <div className="h-full flex flex-col">
                                                    <div className="h-48 bg-gray-100 relative">
                                                        <Image
                                                            src={facility.mapUrl}
                                                            alt={`Map location for ${facility.name}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div className="absolute bottom-3 right-3 left-3">
                                                            <a
                                                                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(facility.address)}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center justify-center text-white rounded-lg w-full py-2 text-sm font-medium shadow-md"
                                                                style={{ backgroundColor: '#17839c' }}
                                                            >
                                                                <MapPin size={16} className="mr-1" />
                                                                Get Directions
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="p-3 flex-1 flex flex-col justify-between">
                                                        <div>
                                                            <h4 className="font-medium text-gray-800 mb-1">Certifications</h4>
                                                            <div className="text-sm text-gray-600">
                                                                {facility.certifications.map((cert, i) => (
                                                                    <div key={i} className="flex items-center mt-1">
                                                                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                                                                        {cert}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className="mt-2 text-center">
                                                            <div className={`text-sm px-3 py-1 rounded-full ${
                                                                facility.acceptingNewPatients
                                                                    ? 'bg-green-100 text-green-800'
                                                                    : 'bg-yellow-100 text-yellow-800'
                                                            }`}>
                                                                {facility.acceptingNewPatients ? 'Accepting New Patients' : 'Limited Availability'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expanded details */}
                                    {expandedFacility === facility.id && (
                                        <div className="bg-white border-t-0 border border-gray-200 rounded-b-lg shadow px-4 lg:px-6 py-4 -mt-1 mb-4">
                                            <h4 className="font-medium text-lg mb-3" style={{ color: '#17839c' }}>Facility Details</h4>
                                            <p className="text-gray-700 mb-4 text-sm lg:text-base">{facility.description}</p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <h5 className="font-medium text-gray-800 mb-2">Specialties</h5>
                                                    <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm lg:text-base">
                                                        {facility.specialties.map((specialty, i) => (
                                                            <li key={i}>{specialty}</li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h5 className="font-medium text-gray-800 mb-2">Insurance Accepted</h5>
                                                    <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm lg:text-base">
                                                        {facility.insurance.map((insurance, i) => (
                                                            <li key={i}>{insurance}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="mt-4 flex flex-col sm:flex-row justify-end gap-3">
                                                <Link   href={`/facility/${facility.id}`} className="text-white font-medium px-6 py-2 rounded-lg" style={{ backgroundColor: '#17839c' }}>
                                                    View Full Profile
                                                </Link>
                                                <button className="text-white font-medium px-6 py-2 rounded-lg" style={{ backgroundColor: '#f68b1f' }}>
                                                    Schedule a Tour
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-6 lg:mt-8">
                                <div className="flex items-center gap-1 lg:gap-2">
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                        disabled={currentPage === 1}
                                        className="bg-white border border-gray-300 rounded-md p-1.5 lg:px-3 lg:py-1 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>

                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i + 1}
                                            onClick={() => setCurrentPage(i + 1)}
                                            className={`rounded-md w-8 h-8 flex items-center justify-center text-sm lg:text-base font-medium ${
                                                currentPage === i + 1
                                                    ? 'text-white'
                                                    : 'bg-white border border-gray-300 hover:bg-gray-50'
                                            }`}
                                            style={currentPage === i + 1 ? { backgroundColor: '#17839c' } : {}}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                        disabled={currentPage === totalPages}
                                        className="bg-white border border-gray-300 rounded-md p-1.5 lg:px-3 lg:py-1 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <ChevronRight size={18} />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultsPage;