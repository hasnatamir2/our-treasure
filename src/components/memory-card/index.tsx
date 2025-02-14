import { useEffect, useRef, useState } from "react";
import { IMemoryCard } from "../../interfaces/memory.interface";
import LazyLoad from "react-lazyload";

interface IMemoryProps {
    memories: IMemoryCard[];
}

export default function MemoryCard({ memories }: IMemoryProps) {
    const galleryRef = useRef<HTMLDivElement>(null);
    const [path, setPath] = useState<string>("");

    useEffect(() => {
        if (galleryRef.current) {
            const galleryWidth = galleryRef.current.scrollWidth;
            const numImages = memories.length;
            const imageWidth = 220; // Width of each image
            const spaceBetweenImages = 30; // Space between images
            const totalWidth = (imageWidth + spaceBetweenImages) * numImages; // Total width of the gallery

            // Start and end points for the string (path)
            const startX = 0;
            const endX = galleryWidth;

            // More exaggerated control points for a deeper curve
            const controlPoint1X = totalWidth * 0.017; // First control point (closer to start)
            const controlPoint2X = totalWidth * 0.16; // Second control point (closer to end)
            const controlPointY = 70; // Deeper curve (increased Y distance for a hanging effect)

            // Create path for the string that will curve more deeply over the images
            const pathString = `M${startX},0 C${controlPoint1X},${controlPointY} ${controlPoint2X},${controlPointY} ${endX},0`;
            setPath(pathString);
        }
    }, [memories]);

    return (
        <div className='relative w-full py-10' ref={galleryRef}>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='175' // Increased height for deeper curve
                viewBox={`0 0 ${galleryRef.current?.scrollWidth || 0} 150`} // Adjusted viewBox for deeper curve
                className='absolute top-0 left-0 w-full'
            >
                <path
                    d={path}
                    stroke='gray'
                    strokeWidth='2'
                    fill='none'
                    strokeLinecap='round'
                />
            </svg>

            {/* Horizontal scroll container */}
            <div className='overflow-x-auto py-8'>
                <div className='flex space-x-8 px-8'>
                    {memories.map((memory, index) => (
                        <div
                            key={memory.id}
                            className='relative flex-shrink-0 md:w-48 lg:w-64] w-[150px] transform hover:scale-105 transition duration-300'
                            style={{
                                transform: `rotate(${
                                    (Math.random() - 0.5) * 10
                                }deg)`, // Apply random tilt to each card
                            }}
                        >
                            {/* Image styled like a retro printed photo */}
                            <LazyLoad height={200} offset={100}>
                                <img
                                    src={memory.photos}
                                    alt={`Retro image ${index + 1}`}
                                    loading='lazy'
                                    className='block w-full h-auto border-4 border-white '
                                    style={{
                                        filter: "contrast(1.1) sepia(0.3)", // Retro image effect
                                    }}
                                />
                            </LazyLoad>

                            <div className='text-center p-2 bg-white shadow-xl flex flex-col'>
                                <p className='font-pacifico text-xs md:text-sm text-gray'>
                                    {memory.title}
                                </p>
                                <p className='text-[10px] font-extralight'>
                                    {memory.date && `(${memory.date})`}
                                </p>
                            </div>

                            {/* Paper clip simulation */}
                            <div className='absolute -top-6 left-1/2 transform -translate-x-1/2'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 100 100'
                                    width='100'
                                    height='100'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                >
                                    <g transform='skewX(-10)'>
                                        <rect
                                            x='10'
                                            y='10'
                                            width='20'
                                            height='40'
                                            fill='url(#brownGradient1)'
                                            stroke='#6D4C41'
                                        />
                                        <rect
                                            x='12'
                                            y='12'
                                            width='16'
                                            height='36'
                                            fill='url(#brownGradient2)'
                                            stroke='#8D6E63'
                                        />
                                    </g>

                                    <g transform='skewX(15)'>
                                        <rect
                                            x='50'
                                            y='10'
                                            width='20'
                                            height='40'
                                            fill='url(#brownGradient3)'
                                            stroke='#5D4037'
                                        />
                                        <rect
                                            x='52'
                                            y='12'
                                            width='16'
                                            height='36'
                                            fill='url(#brownGradient4)'
                                            stroke='#795548'
                                        />
                                    </g>

                                    <defs>
                                        <linearGradient
                                            id='brownGradient1'
                                            x1='0%'
                                            y1='0%'
                                            x2='100%'
                                            y2='0%'
                                        >
                                            <stop
                                                offset='0%'
                                                stopColor='#8D6E63'
                                            />
                                            <stop
                                                offset='100%'
                                                stopColor='#6D4C41'
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id='brownGradient2'
                                            x1='0%'
                                            y1='0%'
                                            x2='100%'
                                            y2='0%'
                                        >
                                            <stop
                                                offset='0%'
                                                stopColor='#A1887F'
                                            />
                                            <stop
                                                offset='100%'
                                                stopColor='#8D6E63'
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id='brownGradient3'
                                            x1='0%'
                                            y1='0%'
                                            x2='100%'
                                            y2='0%'
                                        >
                                            <stop
                                                offset='0%'
                                                stopColor='#795548'
                                            />
                                            <stop
                                                offset='100%'
                                                stopColor='#5D4037'
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id='brownGradient4'
                                            x1='0%'
                                            y1='0%'
                                            x2='100%'
                                            y2='0%'
                                        >
                                            <stop
                                                offset='0%'
                                                stopColor='#8D6E63'
                                            />
                                            <stop
                                                offset='100%'
                                                stopColor='#795548'
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
