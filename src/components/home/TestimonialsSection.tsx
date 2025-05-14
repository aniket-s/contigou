'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { Testimonial } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample data
const testimonials: Testimonial[] = [
    {
        id: 'testimonial-1',
        title: 'Best Treatment',
        content: 'After my knee surgery, I was worried about finding the right rehabilitation facility. ContigoU made it easy to compare options in my area. I found a great center just 10 minutes from my home with specialized knee rehabilitation programs. My recovery has been faster than expected!',
        rating: 5,
        author: {
            name: 'Sarah Johnson',
            age: 48,
            treatment: 'Knee Rehabilitation',
            image: 'https://www.claudeusercontent.com/api/placeholder/400/400'
        }
    },
    {
        id: 'testimonial-2',
        title: 'Amazing Support',
        content: 'Finding specialized care for my father after his stroke was overwhelming until we found ContigoU. The platform helped us identify facilities with neurological rehabilitation expertise and compare them based on patient reviews and outcomes. The staff at the facility we chose have been incredible!',
        rating: 5,
        author: {
            name: 'Michael Davis',
            age: 52,
            treatment: 'Neurological Care',
            image: 'https://www.claudeusercontent.com/api/placeholder/400/400'
        }
    },
    {
        id: 'testimonial-3',
        title: 'Life-Changing Service',
        content: 'ContigoU transformed our experience in seeking rehabilitation care for my mother following her hip replacement. The detailed information about each facility, including rehabilitation programs and insurance acceptance, made the decision process straightforward. Highly recommend this service!',
        rating: 5,
        author: {
            name: 'Jennifer Smith',
            age: 45,
            treatment: 'Hip Rehabilitation',
            image: 'https://www.claudeusercontent.com/api/placeholder/400/400'
        }
    }
];

export default function TestimonialsSection() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);
    const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Handle responsive behavior
    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(window.innerWidth >= 992 ? 2 : 1);
        };

        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate max possible index
    const maxSlideIndex = testimonials.length - slidesPerView;

    // Memoize the stopAutoplay function
    const stopAutoplay = useCallback(() => {
        if (autoplayTimerRef.current) {
            clearInterval(autoplayTimerRef.current);
            autoplayTimerRef.current = null;
        }
    }, []);

    // Memoize the startAutoplay function with proper dependencies
    const startAutoplay = useCallback(() => {
        stopAutoplay();
        autoplayTimerRef.current = setInterval(() => {
            setActiveSlide(prev =>
                prev >= maxSlideIndex ? 0 : prev + 1
            );
        }, 5000);
    }, [maxSlideIndex, stopAutoplay]);

    // Autoplay functionality with corrected dependencies
    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, [activeSlide, slidesPerView, startAutoplay, stopAutoplay]);

    // Navigation functions
    const nextSlide = () => {
        setActiveSlide(prev =>
            prev >= maxSlideIndex ? 0 : prev + 1
        );
        startAutoplay(); // Reset autoplay timer
    };

    const prevSlide = () => {
        setActiveSlide(prev =>
            prev <= 0 ? maxSlideIndex : prev - 1
        );
        startAutoplay(); // Reset autoplay timer
    };

    const goToSlide = (index: number) => {
        setActiveSlide(index);
        startAutoplay(); // Reset autoplay timer
    };

    // Calculate slider dimensions
    const slideWidth = 100 / slidesPerView;
    const translateX = activeSlide * slideWidth;

    return (
        <div className="max-w-6xl mx-auto px-5 py-5 md:py-10">
            <div className="relative pb-12">
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    {/* Testimonials Carousel */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${translateX}%)`,
                                width: `${testimonials.length * slideWidth}%`
                            }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="px-4"
                                    style={{ width: `${slideWidth}%` }}
                                >
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-8">
                    {Array.from({ length: maxSlideIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-3 w-3 rounded-full mx-1 transition-colors ${
                                activeSlide === index ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}