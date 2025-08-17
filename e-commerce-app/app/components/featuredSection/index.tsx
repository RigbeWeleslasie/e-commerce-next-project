import React from 'react';
import Image from 'next/image';

const FeaturedSection = () => {
  return (
    <section className="py-10 bg-gray-100 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-8 bg-pink-600 rounded"></div>
            <span className="text-pink-600 font-semibold">Featured</span>
          </div>
          <h1 className="text-3xl font-bold">New Arrival</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="w-full md:w-1/2 bg-black text-white p-6 rounded-lg flex flex-col items-center">
            <Image
              src="/playstation.png"
              alt="PlayStation 5"
              width={200}
              height={200}
              className="mb-4"
              priority={true} 
            />
            <h2 className="text-2xl font-semibold mb-2">PlayStation 5</h2>
            <p className="mb-4 text-center">Black and White version of the PS5 coming out on sale.</p>
            <p className="text-2xl font-bold cursor-pointer hover:text-pink-600">Shop Now</p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="bg-black text-white p-6 rounded-lg flex flex-col md:flex-row items-center gap-4">
              <div className='text-center md:text-left'>
                <h2 className="text-2xl font-semibold mb-2">Women's Collections</h2>
                <p className="mb-4">Featured woman collections that give you another vibe.</p>
                <p className="text-xl font-bold cursor-pointer hover:text-pink-600">Shop Now</p>
              </div>
              <Image
                src="/womens-collection.png"
                alt="Women's Collections"
                width={200}
                height={200}
                className="rounded"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-black text-white p-6 rounded-lg flex flex-col items-center flex-1">
                <Image
                  src="/speakers.png"
                  alt="Speakers"
                  width={200}
                  height={200}
                  className="mb-4"
                />
                <h2 className="text-2xl font-semibold mb-2">Speakers</h2>
                <p className="mb-4 text-center">Amazon wireless speakers.</p>
                <p className="text-2xl font-bold cursor-pointer hover:text-pink-600">Shop Now</p>
              </div>
              <div className="bg-black text-white p-6 rounded-lg flex flex-col items-center flex-1">
                <Image
                  src="/perfume.png"
                  alt="Perfume"
                  width={200}
                  height={200}
                  className="mb-4"
                />
                <h2 className="text-2xl font-semibold mb-2">Perfume</h2>
                <p className="mb-4 text-center">GUCCI INTENSE OUD EDP</p>
                <p className="text-2xl font-bold cursor-pointer hover:text-pink-600">Shop Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
