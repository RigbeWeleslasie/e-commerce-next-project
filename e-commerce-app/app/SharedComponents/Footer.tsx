import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa"

export default function Footer(){
  return(
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Exclusive</h2>
          <p className="mb-2 font-bold">Subscribe</p>
          <p className="text-sm mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-gray-500 rounded-md overflow-hidden text-red w-40">
            <input type="email" placeholder="Enter your email" className="bg-transparent px-3 py-2 p-2 w-full outline-none text-sm placeholder-gray-400"/>
            <button className="bg-gray-800 px-2 py-2 hover:bg-gray-800 transition">→</button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Support</h2>
          <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Account</h2>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Link</h2>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Download App</h2>
          <p className="mb-4 text-gray-400 text-sm">Save $3 with App New User Only</p>
        <div className="flex items-center gap-4">
          <img src="/qr-code.png" alt="QR code"  className="w-30 h-30 bg-white p-1 rounded"/>
          <div className="flex flex-col gap-2">
            <a href="#" className="flex items-center gap-2 border border-gray-500 rounded-xl px-3 py-2 bg-black-transparent text-white text-sm hover:bg-gray-900 transition w-41">
            <img src="/play.png"className="w-8 h-auto"/>
            <span><span className="text-[10px] uppercase">Get it on</span><span className="font-bold text-1xl">Google Play</span></span>
            </a>
           <a href="#" className="flex items-center gap-2 border border-gray-500 rounded-lg px-3 py-2 bg-black-transparent text-white text-sm hover:bg-gray-900 transition w-41">
            <img src="/apple.png"  className="w-8 h-auto bg-white p-1 rounded"/>
            <span>Download on the <span className="font-bold text-1xl"> App Store</span></span>
            </a>
          </div>

         
        </div>



          <div className="flex gap-4 mt-4 text-white text-xl">
             <FaFacebookF className="cursor-pointer hover:text-gray-400"/>
             <FaTwitter className="cusror-pointer hover:text-gray-400"/>
             <FaInstagram className="cusror-pointer hover:text-gray-400"/>
             <FaLinkedin className="cusror-pointer hover:text-gray-400"/>
          </div>
        </div>
      </div>
      
      <div className="text-center py-4 border-t border-gray-800 text-gray-500 text-sm">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  )
}
