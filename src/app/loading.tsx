export default function Loading() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center">
            <div className="relative h-24 w-24">
                <div className="absolute top-0 left-0 right-0 bottom-0 animate-ping rounded-full bg-primary opacity-20"></div>
                <div className="absolute top-[12.5%] left-[12.5%] right-[12.5%] bottom-[12.5%] animate-ping rounded-full bg-primary opacity-40 delay-150"></div>
                <div className="absolute top-[25%] left-[25%] right-[25%] bottom-[25%] animate-ping rounded-full bg-primary opacity-60 delay-300"></div>
                <div className="absolute top-[37.5%] left-[37.5%] right-[37.5%] bottom-[37.5%] animate-ping rounded-full bg-primary opacity-80 delay-500"></div>
            </div>
            <p className="mt-6 text-lg text-gray-600">Loading...</p>
        </div>
    );
}