"use client";
import { FaHeart, FaEye, FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "The north coat",
    price: 260,
    oldPrice: 360,
    image: "/coat.png",
    rating: 65,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    price: 960,
    oldPrice: 1160,
    image: "/bag.png",
    rating: 65,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    price: 160,
    oldPrice: 170,
    image: "/cooler.png",
    rating: 65,
  },
  {
    id: 4,
    name: "Small BookSelf",
    price: 360,
    oldPrice: null,
    image: "/bookShelf.png",
    rating: 65,
  },
];

export default function BestSellingProducts() {
  return (
    <section className="py-10 px-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        
        <h2 className="text-3xl font-bold">Best Selling Products</h2>
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className=" rounded-2xl shadow p-4 relative group "
          >
            <div className="relative flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-48 object-contain rounded-2xl shadow p-4 relative "
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
                {product.oldPrice && (
                  <span className="line-through text-gray-400">
                    ${product.oldPrice}
                  </span>
                )}
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}