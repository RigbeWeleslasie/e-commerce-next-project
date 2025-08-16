export default function Footer(){
  return(
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Exclusive</h2>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="flex">
            <input type="email" placeholder="Enter your email" className="p-2 w-full text-black"/>
            <button className="bg-red-500 px-4 py-2">→</button>
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
          <div className="flex gap-2">
            <img src="/google-play.png" alt="Google Play" className="w-24"/>
            <img src="/app-store.png" alt="App Store" className="w-24"/>
          </div>
          <div className="flex gap-4 mt-4 text-white">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
      
      <div className="text-center py-4 border-t border-gray-800 text-gray-500 text-sm">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  )
}
