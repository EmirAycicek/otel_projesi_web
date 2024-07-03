import React from "react";


const YemeSpaCard = ({ title, description, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 jus">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-4 flex justify-center">
        <button className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded ">
          Masa Rezervasyonu Yapın
        </button>
      </div>
    </div>
  );
};

export default YemeSpaCard;
