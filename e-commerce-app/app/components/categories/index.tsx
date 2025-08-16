"use client";
import { useRef, useState } from "react";
import { FaMobileAlt, FaDesktop, FaHeadphones, FaGamepad, FaCamera } from "react-icons/fa";
import { MdWatch } from "react-icons/md";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const categories = [
  { id: 1, name: "Phones", icon: <FaMobileAlt size={30} /> },
  { id: 2, name: "Computers", icon: <FaDesktop size={30} /> },
  { id: 3, name: "SmartWatch", icon: <MdWatch size={30} /> },
  { id: 4, name: "Camera", icon: <FaCamera size={30} /> },
  { id: 5, name: "HeadPhones", icon: <FaHeadphones size={30} /> },
  { id: 6, name: "Gaming", icon: <FaGamepad size={30} /> },
   { id: 6, name: "Gaming", icon: <FaGamepad size={30} /> },
];

export default function Category() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full py-8 pl-4 border-t border-b border-l border-solid">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-8 bg-pink-600 rounded"></div>
        <span className="text-pink-600 font-semibold">Categories</span>
      </div>

      <div className="relative w-full">
        <h2 className="text-2xl font-bold mb-6">Browse By Category</h2>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex space-x-2">
          <button onClick={() => scroll("left")} className="bg-white shadow-md p-2 rounded-full z-10">
            <BsArrowLeft size={20} />
          </button>
          <button onClick={() => scroll("right")} className="bg-white shadow-md p-2 rounded-full z-10">
            <BsArrowRight size={20} />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-38 overflow-x-auto scrollbar-hide scroll-smooth px-10">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => setSelectedId(cat.id)}
            className={`min-w-[150px] h-[120px] flex flex-col justify-center items-center border rounded-md shadow-sm cursor-pointer hover:shadow-lg transition ${
             selectedId === cat.id ? "text-white border-white shadow-2xl bg-red-600" : ""
            }`}
          >
            {cat.icon}
            <span className="mt-2 font-medium">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
