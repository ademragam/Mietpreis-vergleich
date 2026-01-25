// src/components/StadtCard.jsx
import React from 'react';

const StadtCard = ({ stadt, forecast_years, forecast_prices, imgSrc }) => {
  return (
    <div className="border p-6 rounded-lg shadow-lg bg-white">
      {/* Stadtname und Bild */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold mb-2">{stadt}</h2>
        <img
          src={imgSrc}
          alt={`Bild von ${stadt}`}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>

      {/* Prognosepreise */}
      <div className="text-left">
        <h3 className="font-semibold mb-2">Prognosepreise:</h3>
        <ul className="list-none space-y-2">
          {forecast_years.map((jahr, idx) => (
            <li key={idx} className="text-lg">
              Jahr {jahr}: <span className="font-bold">{forecast_prices[idx].toFixed(2)} €</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StadtCard;
