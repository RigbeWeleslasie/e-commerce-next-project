'use client';
import { FaHeart, FaEye, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Kids Electric Car",
    price: 960,
    image: "/car.png",
    rating: 5,
    reviews: 65,
    colors: ["bg-red-600", "bg-black"],
    isNew: true,
  },
  {
    id: 2,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    image: "/Cleats.png",
    rating: 5,
    reviews: 35,
    colors: ["bg-lime-400", "bg-pink-600"],
    isNew: false,
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    image: "/gamepad.png",
    rating: 4.5,
    reviews: 55,
    colors: ["bg-black", "bg-pink-600"],
    isNew: true,
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    price: 660,
    image: "/satinJacket.png",
    rating: 4.5,
    reviews: 55,
    colors: ["bg-teal-800", "bg-pink-600"],
    isNew: false,
  },
];

function renderStars(rating: number) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {Array.from({ length: fullStars }).map((_, idx) => (
        <FaStar key={"full-" + idx} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {Array.from({ length: emptyStars }).map((_, idx) => (
        <FaStar key={"empty-" + idx} className="text-gray-300" />
      ))}
    </div>
  );
}

export default function ProductGrid() {
  const [selectedColors, setSelectedColors] = useState<{ [key: number]: string }>({});

  const toggleColor = (productId: number, color: string) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: color,
    }));
  };

  return (
    <section className="p-6 bg-white w-full mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-gray-50 rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            {product.isNew && (
              <span className="absolute top-3 left-3 bg-green-400 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            )}
            <div className="absolute top-3 right-3 flex space-x-2">
              <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">
                <FaHeart />
              </button>
              <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">
                <FaEye />
              </button>
            </div>
            <img src={product.image} alt={product.name} className="mx-auto h-48 object-contain" />
            <h3 className="mt-4 font-semibold text-base">{product.name}</h3>
            <div className="flex items-center justify-between mt-1">
              <span className="text-pink-600 font-bold text-lg">${product.price}</span>
              <div className="flex items-center">
                {renderStars(product.rating)}
                <span className="ml-2 text-gray-500 text-sm">({product.reviews})</span>
              </div>
            </div>
            <div className="flex items-center mt-2 space-x-3">
              {product.colors.map((color) => {
                const isSelected = selectedColors[product.id] === color;
                return (
                  <button
                    key={color}
                    className={`w-5 h-5 rounded-full border-2 ${color} ${
                      isSelected ? "border-black" : "border-transparent"
                    }`}
                    onClick={() => toggleColor(product.id, color)}
                    aria-label={`Select color ${color}`}
                    type="button"
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
       <div className="flex justify-center mt-6">
        <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600">
          View All Products
        </button>
      </div>
    </section>
  );
}
