import React from 'react';
import Link from "next/link"

export default function MenuItem({ title, address }) {
  return (
    <Link href={address} className="text-white hover:text-gray-300 transition duration-300">
      {title}
    </Link>
  );
}
