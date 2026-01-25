import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, MapPin, Euro, Calendar } from 'lucide-react';

const forecastData = [
  {
    "stadt": "Bretzfeld",
    "forecast_years": [2025, 2026, 2027, 2028, 2029, 2030],
    "forecast_prices": [10.93, 11.34, 11.74, 12.15, 12.56, 12.97]
  },
  {
    "stadt": "Dorzbach",
    "forecast_years": [2025, 2026, 2027, 2028, 2029, 2030],
    "forecast_prices": [10.33, 10.98, 11.62, 12.27, 12.91, 13.56]
  },
  {
    "stadt": "Forchtenberg",
    "forecast_years": [2025, 2026, 2027, 2028, 2029, 2030],
    "forecast_prices": [11.33, 12.04, 12.75, 13.46, 14.17, 14.88]
  },
  {
    "stadt": "Ingelfingen",
    "forecast_years": [2025, 2026, 2027, 2028, 2029, 2030],
    "forecast_prices": [11.11, 11.58, 12.06, 12.53, 13.00, 13.48]
  },
  {
    "stadt": "Krautheim",
    "forecast_years": [2025, 2026, 2027, 2028, 2029, 2030],
    "forecast_prices": [11.11, 11.58, 12.06, 12.53, 13.00, 13.48]
  },
  {
    "stadt": "Kunzelsau",
    "forecast_years": [2025, 2026, 2027, 2028, 2029, 2030],
    "forecast_prices": [11.11, 11.58, 12.06, 12.53, 13.00, 13.48]
  },
  {
    "stadt": "Kupferzell",
    "forecast_years": [2025, 2026, 2027, 2028, 2029, 2030],
    "forecast_prices": [10.88, 11.27, 11.67, 12.06, 12.45, 12.85]
  },
  {
    "stadt": "Mulfingen",
    "forecast_years": [2025, 2026, 2027, 2028, 2029, 2030],
    "forecast_prices": [10.80, 11.60, 12.39, 13.19, 13.98, 14.77]
  },
  {
    "stadt": "Neuenstein",
    "forecast_years": [2025, 2026, 2027, 2028, 2029, 2030],
    "forecast_prices": [11.38, 11.85, 12.31, 12.78, 13.25, 13.72]
  },
  {
    "stadt": "Niedernhall",
    "forecast_years": [2025, 2026, 2027, 2028, 2029, 2030],
    "forecast_prices": [10.71, 11.16, 11.60, 12.05, 12.50, 12.95]
  },
  {
    "stadt": "Öhringen",
    "forecast_years": [2025, 2026, 2027, 2028, 2029, 2030],
    "forecast_prices": [11.59, 12.02, 12.44, 12.87, 13.29, 13.72]
  },
  {
    "stadt": "Pfedelbach",
    "forecast_years": [2025, 2026, 2027, 2028, 2029, 2030],
    "forecast_prices": [10.92, 11.32, 11.72, 12.12, 12.53, 12.93]
  },
  {
    "stadt": "Schöntal",
    "forecast_years": [2025, 2026, 2027, 2028, 2029, 2030],
    "forecast_prices": [9.20, 9.53, 9.86, 10.20, 10.53, 10.86]
  },
  {
    "stadt": "Waldenburg",
    "forecast_years": [2025, 2026, 2027, 2028, 2029, 2030],
    "forecast_prices": [10.05, 10.35, 10.65, 10.95, 11.25, 11.55]
  },
  {
    "stadt": "Weissbach",
    "forecast_years": [2025, 2026, 2027, 2028, 2029, 2030],
    "forecast_prices": [10.09, 10.66, 11.23, 11.80, 12.38, 12.95]
  },
  {
    "stadt": "Zweiflingen",
    "forecast_years": [2025, 2026, 2027, 2028, 2029, 2030],
    "forecast_prices": [12.10, 12.82, 13.54, 14.26, 14.97, 15.69]
  }
];

const cityColors = [
  '#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6',
  '#ec4899', '#14b8a6', '#f97316', '#06b6d4', '#84cc16',
  '#6366f1', '#f43f5e', '#22c55e', '#eab308', '#a855f7', '#d946ef'
];

const Mietprognosen = () => {
  const [selectedCities, setSelectedCities] = useState(['Kunzelsau', 'Öhringen']);

  const toggleCitySelection = (stadt) => {
    setSelectedCities((prev) => {
      if (prev.includes(stadt)) {
        return prev.filter((item) => item !== stadt);
      } else {
        return [...prev, stadt];
      }
    });
  };

  const prepareChartData = () => {
    const years = forecastData[0].forecast_years;
    return years.map((year, idx) => {
      const dataPoint = { year };
      selectedCities.forEach((city) => {
        const cityData = forecastData.find((d) => d.stadt === city);
        if (cityData) {
          dataPoint[city] = cityData.forecast_prices[idx];
        }
      });
      return dataPoint;
    });
  };

  const calculateStats = (cityName) => {
    const cityData = forecastData.find((d) => d.stadt === cityName);
    const increase = cityData.forecast_prices[5] - cityData.forecast_prices[0];
    const percentIncrease = ((increase / cityData.forecast_prices[0]) * 100).toFixed(1);
    return { increase: increase.toFixed(2), percentIncrease };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-12 h-12 mr-3" />
            <h1 className="text-5xl md:text-6xl font-bold">Mietpreis-Prognosen</h1>
          </div>
          <p className="text-xl md:text-2xl text-center text-blue-100 max-w-3xl mx-auto">
            Entdecken Sie die Mietpreisentwicklung in den Städten Hohenlohekreis bis 2030
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* City Selection */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
          <div className="flex items-center mb-6">
            <MapPin className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Städte auswählen</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {forecastData.map((stadtData, index) => (
              <button
                key={index}
                onClick={() => toggleCitySelection(stadtData.stadt)}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCities.includes(stadtData.stadt)
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {stadtData.stadt}
              </button>
            ))}
          </div>
        </div>

        {/* Chart Section */}
        {selectedCities.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
            <div className="flex items-center mb-6">
              <Calendar className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Preisentwicklung im Vergleich</h2>
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={prepareChartData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" stroke="#6b7280" />
                <YAxis stroke="#6b7280" label={{ value: '€/m²', angle: -90, position: 'insideLeft' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: 'none', 
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }} 
                />
                <Legend />
                {selectedCities.map((city, idx) => (
                  <Line
                    key={city}
                    type="monotone"
                    dataKey={city}
                    stroke={cityColors[forecastData.findIndex(d => d.stadt === city)]}
                    strokeWidth={3}
                    dot={{ r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* City Cards */}
        {selectedCities.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <Euro className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Detaillierte Prognosen</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCities.map((cityName, index) => {
                const cityData = forecastData.find((stadt) => stadt.stadt === cityName);
                const stats = calculateStats(cityName);
                const colorIndex = forecastData.findIndex(d => d.stadt === cityName);
                
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="h-3" style={{ backgroundColor: cityColors[colorIndex] }}></div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{cityData.stadt}</h3>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600 font-medium">Preissteigerung</span>
                          <span className="text-2xl font-bold text-blue-600">+{stats.percentIncrease}%</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          +{stats.increase} €/m² (2025-2030)
                        </div>
                      </div>

                      <div className="space-y-3">
                        {cityData.forecast_years.map((jahr, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                          >
                            <span className="text-gray-600 font-medium">{jahr}</span>
                            <span className="text-lg font-bold text-gray-800">
                              {cityData.forecast_prices[idx].toFixed(2)} €/m²
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {selectedCities.length === 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Keine Stadt ausgewählt</h3>
            <p className="text-gray-600">Wählen Sie mindestens eine Stadt aus, um die Prognosen zu sehen</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mietprognosen;