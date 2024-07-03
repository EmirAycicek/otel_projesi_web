import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import { GiSunflower } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-2xl hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl hover:text-gray-400">
            <FaYoutube />
          </a>
          <a href="#" className="text-2xl hover:text-gray-400">
            <FaFacebook />
          </a>
        </div>

        {/* Hotel Contact Info */}
        <div className="text-right">
            <div className='flex items-center space-x-3'>
                <GiSunflower className='h-5 w-5' />
                <p className="text-lg font-bold">SunFlower Hotel</p>
            </div>
          
          <p className="text-sm">123 Otel Sokağı, Tatil Kasabası</p>
          <p className="text-sm">Telefon: +90 123 456 78 90</p>
        </div>
      </div>
    </footer>
  );
}
