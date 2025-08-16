import Link from "next/link"; // or from "react-router-dom" if you are using react-router
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="">
      <header className="relative flex justify-end items-center px-4 py-2 bg-black text-white">
        <div className="absolute left-1/2 transform -translate-x-1/2 text-sm">
          Summer Sale For All Swim Suits and Free Express Delivery - OFF 50%{" "}
          <span className="underline cursor-pointer">Shop Now</span>
        </div>
        <select className="bg-black text-white pr-8 cursor-pointer">
          <option>English</option>
        </select>
      </header>

      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <h2 className="text-lg font-bold">Exclusive</h2>

        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/" className="hover:text-red-500">Home</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-red-500">Contact</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-red-500">About</Link>
          </li>
          <li>
            <Link href="/signup" className="hover:text-red-500">Sign Up</Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <div className="flex items-center border-none">
            <input
              type="text"
              placeholder="What are you looking for"
              className="outline-none px-2 py-1"
            />
            <FaSearch className="text-gray-500" />
          </div>
          <FaHeart className="text-gray-600 hover:text-red-500 cursor-pointer" size={20} />
          <FaShoppingCart className="text-gray-600 hover:text-red-500 cursor-pointer" size={20} />
        </div>
      </nav>
    </div>
  );
}
