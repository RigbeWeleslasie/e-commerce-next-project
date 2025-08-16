import Image from "next/image";
import Link from "next/link";
import Navbar from "../SharedComponents/Navbar";
import Footer from "../SharedComponents/Footer";
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex flex-1">
        <div className="w-1/2 flex justify-center items-center bg-[#E3F6F5]">
          <Image
            src="/images/iphone14.png" 
            alt="Shopping Cart"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-center px-20">
          <h2 className="text-3xl font-semibold mb-2">Log in to Exclusive</h2>
          <p className="text-gray-500 mb-8">Enter your details below</p>
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="border-b border-gray-300 py-2 mb-6 focus:outline-none focus:border-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-b border-gray-300 py-2 mb-6 focus:outline-none focus:border-black"
          />
          <div className="flex justify-between items-center">
            <button className="bg-[#DB4444] text-white px-8 py-3 rounded hover:bg-red-600">
              Log In
            </button>
            <Link href="/forgot-password" className="text-[#DB4444] hover:underline">
              Forget Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}






