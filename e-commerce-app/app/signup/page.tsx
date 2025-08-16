import Image from "next/image";
import Button from "../SharedComponents/Button";
import { FaGoogle, FaFacebook, FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import Footer from "../SharedComponents/Footer";
import Navbar from "../SharedComponents/Navbar";
import FlashSales from "../components/flashSales";
export default function Signup() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
    
      <main className="flex flex-col md:flex-row justify-center items-center flex-1 px-8 py-12 gap-12">
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
      

        <div className="max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-2">Create an account</h2>
          <p className="text-gray-500 mb-4">Enter your details below</p>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="border p-3 rounded-md" required />
            <input type="email" placeholder="Email or phone number" className="border p-3 rounded-md" required />
            <input type="password" placeholder="Password" className="border p-3 rounded-md" required />
            <Button text="Create Account" type="submit" />

            <button
              type="button"
              className="w-full py-3 border rounded-md flex justify-center items-center gap-2"
            >
              <FaGoogle size={20} />
              Sign up with Google
            </button>

            <p className="mt-4">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 underline">
                Login
              </Link>
            </p>
          </form>
        </div>
        </div>
      </main>
    </div>
  );
}
