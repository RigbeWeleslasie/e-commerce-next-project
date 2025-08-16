'use client'
import { useState,useRef, useEffect } from "react";
import { FaHeart, FaEye, FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
interface Product {
  id: number;
  discount: string;
  image: string;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  addToCart: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function FlashSales() {
  const [time, setTime] = useState<TimeLeft>({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  const products: Product[] = [
    {
      id: 1,
      discount: "-40%",
      image: "/gamepad.png",
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      rating: 4.5,
      reviews: 88,
      addToCart: false,
    },
    {
      id: 2,
      discount: "-35%",
      image: "/wiredKeyboard.png",
      name: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      rating: 3.5,
      reviews: 75,
      addToCart: true,
    },
    {
      id: 3,
      discount: "-30%",
      image: "/gamingmonitor.png",
      name: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      rating: 4.5,
      reviews: 99,
      addToCart: false,
    },
    {
      id: 4,
      discount: "-25%",
      image: "/confortchair.png",
      name: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      rating: 4.5,
      reviews: 99,
      addToCart: false,
    },
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <div className="flex text-yellow-400">
        {Array.from({ length: fullStars }, (_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {halfStar && <FaStarHalfAlt />}
        {Array.from({ length: emptyStars }, (_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
      </div>
    );
  };

  return (
    <section className="bg-white p-6 w-full mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col items-start mb-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-8 bg-pink-600 rounded"></div>
          <span className="text-pink-600 font-semibold">Today's</span>
        </div>
        <div>
          <h2 className="text-3xl font-bold">Flash Sales</h2>
        </div>
        </div>
        <div className="flex flex-col items-center text-center text-lg font-bold space-y-1">
          <div className="text-center text-lg font-bold">
             <div className="flex justify-center gap-4">
              <span>Days:</span>
              <span>Hours:</span>
              <span>Minutes:</span>
              <span>Seconds</span>
            </div>
            <div className="flex justify-center gap-8 mb-1">
              <span>{String(time.days).padStart(2, "0")}</span>
              <span>:</span>
              <span>{String(time.hours).padStart(2, "0")}</span>
              <span>:</span>
              <span>{String(time.minutes).padStart(2, "0")}</span>
              <span>:</span>
              <span>{String(time.seconds).padStart(2, "0")}</span>
            </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex space-x-2">
                    <button onClick={() => scroll("left")} className="bg-white shadow-md p-2 rounded-full z-10">
                      <BsArrowLeft size={20} />
                    </button>
                    <button onClick={() => scroll("right")} className="bg-white shadow-md p-2 rounded-full z-10">
                      <BsArrowRight size={20} />
                    </button>
           </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="relative border p-4 rounded-lg hover:shadow-lg transition"
          >
            <span className="absolute top-3 left-3 bg-red-500 text-white text-sm px-2 py-1 rounded">
              {item.discount}
            </span>
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">
                <FaHeart />
              </button>
              <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">
                <FaEye />
              </button>
            </div>
            <img
              src={item.image}
              alt={item.name}
              className="mx-auto h-32 object-contain"
            />
             {item.addToCart && (
              <button className="bg-black text-white py-2 mt-3 w-full rounded hover:bg-gray-800">
                Add To Cart
              </button>
            )}
            <h3 className="mt-4 font-semibold">{item.name}</h3>
            <div className="flex gap-2 items-center">
              <span className="text-red-500 font-bold">${item.price}</span>
              <span className="line-through text-gray-500">
                ${item.oldPrice}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {renderStars(item.rating)}
              <span className="text-gray-500 text-sm">({item.reviews})</span>
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
