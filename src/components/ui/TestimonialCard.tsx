import Image from 'next/image';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
    testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden h-full">
            <div className="w-full md:w-2/5 bg-gray-200 relative">
                <div className="w-full h-full aspect-square relative">
                    <Image
                        src={testimonial.author.image}
                        alt="Testimonial video thumbnail"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/30 rounded-full flex items-center justify-center cursor-pointer z-10 hover:bg-white/50 transition-colors play-button">
                    <div className="w-0 h-0 border-t-[18px] border-t-transparent border-l-[30px] border-l-white border-b-[18px] border-b-transparent ml-2"></div>
                </div>
            </div>
            <div className="w-full md:w-3/5 p-6 md:p-8 border border-primary rounded-b-lg md:rounded-bl-none md:rounded-r-lg relative flex flex-col">
                <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index} className={`text-yellow-400 text-xl`}>★</span>
                    ))}
                </div>
                <h3 className="text-xl font-bold mb-4">{testimonial.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                    {testimonial.content}
                </p>
                <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                        <Image
                            src={testimonial.author.image}
                            alt={`${testimonial.author.name} profile`}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <div className="text-primary font-medium">{testimonial.author.name}</div>
                        <div className="text-gray-500 text-sm">{testimonial.author.age}, {testimonial.author.treatment}</div>
                    </div>
                </div>
                <div className="absolute right-5 bottom-5 text-6xl text-secondary opacity-70 font-serif">&quot;</div>
            </div>
        </div>
    );
}