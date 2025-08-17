'use client';
import { FaHeart, FaEye, FaStar } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRef, useState } from "react";

const products = [
  {
    id: 1,
    name: "Breed Dry Dood",
    price: 100,
    image: "/dogFood.png",
    rating: 35,
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: 360,
    image: "/canonCamera.png",
    rating: 95,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    image: "/gamingLaptop.png",
    rating: 325,
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: 500,
    image: "/satinJacket.png",
    rating: 145,
  },

];

export default function ExploringProduct() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 px-6 bg-white w-full">
      <div className="flex flex-col mb-6 w-full">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-8 bg-pink-600 rounded"></div>
          <span className="text-pink-600 font-semibold">Our Products</span>
        </div>

        <div className="relative w-full">
          <h2 className="text-2xl font-bold mb-6">Browse By Category</h2>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex space-x-2 z-10">
            <button
              onClick={() => scroll("left")}
              className="bg-white shadow-md p-2 rounded-full"
            >
              <BsArrowLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-white shadow-md p-2 rounded-full"
            >
              <BsArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        ref={scrollRef}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl shadow p-4 relative group bg-white"
          >
            <div className="relative flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-48 object-contain rounded-2xl shadow p-4"
              />
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">
                  <FaHeart />
                </button>
                <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">
                  <FaEye />
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-pink-600 font-bold text-lg">
                  ${product.price}
                </span>
              </div>
              <div className="flex items-center gap-1 mt-2 text-yellow-500">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
                <span className="ml-2 text-gray-600 text-sm">
                  ({product.rating})
                </span>
              </div>
              {product.id === 2 && (
                <button className="bg-black text-white py-2 mt-3 w-full rounded hover:bg-gray-800">
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
