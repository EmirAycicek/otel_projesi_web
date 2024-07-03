import React from 'react';
import MenuItem from '../menuitem/page';
import { GiSunflower } from "react-icons/gi";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
            <Link href={"/"}>
                <GiSunflower className='h-12 w-12'/>
            </Link>
            
            <h1 className="text-2xl font-bold">SunFlower Hotel</h1>
        </div>

        {/* Menu Items */}
        <nav className="flex space-x-6">
          <MenuItem title="Ana Sayfa" address='/'/>
          <MenuItem title="Odalar" address='/odalar'/>
          <MenuItem title="Yeme İçme-Spa" address='/yemespa'/>
          <MenuItem title="Etkinlikler" address='/etkinlikler'/>
          <MenuItem title="Bize Ulaşın" address='/bizeulasin'/>
        </nav>
      </div>
    </header>
  );
}
