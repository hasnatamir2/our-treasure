import BloomingFlower from "../../components/blooming-flower";
import MemoryCard from "../../components/memory-card";
import { images } from "../../content/memories";

export default function Home() {
    return (
        <div className='bg-dark md:pt-10 pt-4 bg-httern flex items-start flex-col md:h-sreen justify-around'>
            <div className='w-full px-4'>
                <h1 className='text-4xl font-extrabold text-center text-pink-800 mb-8 tracking-wide'>
                    To this life and life after 💖
                </h1>
                <p className='text-center text-lg text-gray-600 mb-12 font-medium italic'>
                    A collection of memories wrapped in love and nostalgia.
                </p>
            </div>
            <div className='absolute bottom-0 flex justify-around items-end w-full'>
                <BloomingFlower />
                <BloomingFlower />
                <BloomingFlower />
            </div>
            <MemoryCard memories={images} />
        </div>
    );
}
