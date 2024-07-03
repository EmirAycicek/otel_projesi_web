import React from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

function RoomCard({ room = {}, isCompact = true }) {
  const { name, type, price, image } = room;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 bg-white">
      <img className="w-full" src={image} alt={type} />
      <h1 className="font-bold text-xl mb-2">{name}</h1>
      <p className="text-gray-700 text-base">Type: {type}</p>
      <p className="text-gray-700 text-base">Price: ${price}</p>
      <div className="flex justify-between items-center mt-4">
        <Link href={`/room/${name.replace(/\s+/g, '-').toLowerCase()}`}>
          
        </Link>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default RoomCard;