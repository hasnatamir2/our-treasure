import React from "react";
import MemoryCard from "../../components/memory-card";
import { memories } from "../../content/memories";
const LazyBloomingFlower = React.lazy(() => import('../../components/blooming-flower'));

export default function Home() {
    return (
        <div className='bg-blac md:pt-10 pt-4 flex items-start flex-col md:h-sreen justify-around'>
            <div className='w-full px-4'>
                <h1 className='text-4xl font-extrabold text-center text-pink-800 mb-8 tracking-wide'>
                    To this life and life after 💖 My 💎
                </h1>
                <p className='text-center text-md text-gray-600 mb-12 font-medium italic'>
                    Celebrate our everlasting love with this enchanting blooming
                    flower animation, symbolizing the beauty and growth of our
                    bond. Happy Valentine's Day, my dearest.
                </p>
            </div>
            <div className='fixed bottom-0 flex justify-around items-end w-full'>
                <LazyBloomingFlower />
                <LazyBloomingFlower />
                <LazyBloomingFlower />
            </div>
            <MemoryCard memories={memories} />
        </div>
    );
}
