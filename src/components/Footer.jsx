import React from "react";
import { Facebook, Twitter, Instagram, Mail, FacebookIcon } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">🎬 MovieShop</h3>
          <p className="text-sm text-gray-300">
            Your favorite place for buying movies online. Best quality, best price.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><p href="/" className="hover:text-white">Home</p></li>
            <li><p href="/cart" className="hover:text-white">Cart</p></li>
            <li><p href="/about" className="hover:text-white">About Us</p></li>
            <li><p href="/contact" className="hover:text-white">Contact</p></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-300">
            <p href="#" className="hover:text-white"><FacebookIcon /></p>
            <p href="#" className="hover:text-white"><Twitter /></p>
            <p href="#" className="hover:text-white"><Instagram /></p>
            <p href="mailto:support@movieshop.com" className="hover:text-white"><Mail /></p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} MovieShop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
