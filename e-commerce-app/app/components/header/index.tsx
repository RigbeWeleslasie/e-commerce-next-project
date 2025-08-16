"use client";
import { FaApple} from "react-icons/fa";
export default function Header() {
  return (
    <>
    <div className="min-h-screen bg-white">
      <main className="flex px-4 py-6">

        <aside className="w-1/5 pr-6">
          <ul className="space-y-2 border-r border-gray-400 pr-2">

            {[
              "Woman's Fashion",
              "Men's Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Medicine",
              "Sports & Outdoor",
              "Baby's & Toys",
              "Groceries & Pets",
              "Health & Beauty",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="text-black hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <div className="w-4/5 pt-4">
          <div className="relative bg-black text-white p-3 rounded-lg max-w-8xl ">
            <div className="flex gap-100 items-center">
              <div>
                <div className="flex items-center gap-2">
                 
                <FaApple size={50} className="text-white"/>
                 <p className="text-1xl font-light">iphone 14 Series</p>
                </div>
                <h1 className="text-3xl font-bold">iPhone 14 Series</h1>
                <p className="text-2xl">Up to 10% off Voucher</p>
                <p className="mt-4 text-white font-bold underline px-4 py-2 rounded">
                  Shop Now →
                </p>
              </div>
              <div>
                <img
                  src="/iphone14.png"
                  alt="iPhone 14"
                  className="w-100 h-auto"
                />
              </div>
            </div>
      
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
