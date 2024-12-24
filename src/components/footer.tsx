import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react"; // Import icons

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white py-6">
      {/* Upper Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        <div>
          <h3 className="text-lg font-bold mb-2">Get Help</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white">Order Status</a></li>
            <li><a href="/" className="text-gray-400 hover:text-white">Shipping</a></li>
            <li><a href="/" className="text-gray-400 hover:text-white">Returns</a></li>
            <li><a href="/" className="text-gray-400 hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">About Nike</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white">News</a></li>
            <li><a href="/" className="text-gray-400 hover:text-white">Careers</a></li>
            <li><a href="/" className="text-gray-400 hover:text-white">Investors</a></li>
            <li><a href="/" className="text-gray-400 hover:text-white">Sustainability</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Legal</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="/" className="text-gray-400 hover:text-white">Terms of Use</a></li>
            <li><a href="/" className="text-gray-400 hover:text-white">Accessibility</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition"
            >
              <Facebook size={24} />
            </a>

            {/* Twitter Icon */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <Twitter size={24} />
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-600 transition"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
        © 2024 Nike. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;