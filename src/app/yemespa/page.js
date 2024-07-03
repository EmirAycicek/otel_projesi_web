import React from "react";
import RoomCard from "@/components/yemespa/page";
import data from "@/mocks/yemespa.json";

const YemeIcmeSpa = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-left">Yeme İçme</h2>
        <div className="flex flex-wrap justify-start">
          {data.yemeicme.map((item, index) => (
            <RoomCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-left">Spa Hizmetleri</h2>
        <div className="flex flex-wrap justify-start">
          {data.spa.map((item, index) => (
            <RoomCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default YemeIcmeSpa;
