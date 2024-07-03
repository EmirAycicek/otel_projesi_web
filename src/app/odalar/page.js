import React from "react";
import RoomCard from "@/components/odalar/page";
import roomsData from "@/mocks/odalar.json";

const Rooms = () => {
  // Slice the room data into three categories
  const guestRooms = roomsData.rooms.slice(0, 5);
  const promotionalRooms = roomsData.rooms.slice(5, 10);
  const luxuryRooms = roomsData.rooms.slice(10, 15);

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-left">Misafir Odaları</h2>
        <div className="flex flex-wrap justify-start">
          {guestRooms.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-left">Kampanyalı Odalar</h2>
        <div className="flex flex-wrap justify-start">
          {promotionalRooms.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-left">Lux Odalar</h2>
        <div className="flex flex-wrap justify-start">
          {luxuryRooms.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;