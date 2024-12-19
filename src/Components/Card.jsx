import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidDownArrow } from "react-icons/bi";

const Card = ({ searchQuery }) => {
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [showRegionDropdown, setShowRegionDropdown] = useState(false);
  const navigate = useNavigate();

  const getCountries = async () => {
    const data = await fetch("https://restcountries.com/v2/all");
    const jsonData = await data.json();
    setCountries(jsonData);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const handleClick = (code) => {
    navigate(`details/${code}`);
  };

  // Get unique regions
  const regions = [...new Set(countries.map(country => country.region))].filter(Boolean);

  // Filter countries based on search query and selected region
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="bg-slate-400 p-10">
      <div className="flex justify-between">
        <div className="font-bold text-5xl">Countries</div>
        <div className="relative">
          <div 
            className="flex items-center bg-slate-100 rounded-md h-fit p-2 cursor-pointer"
            onClick={() => setShowRegionDropdown(!showRegionDropdown)}
          >
            <div className="mr-3 text-xl text-slate-950">
              {selectedRegion || "Filter By Region"}
            </div>
            <BiSolidDownArrow />
          </div>
          
          {showRegionDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-slate-100 rounded-md shadow-lg z-10">
              <div 
                className="p-2 hover:bg-slate-200 cursor-pointer"
                onClick={() => {
                  setSelectedRegion("");
                  setShowRegionDropdown(false);
                }}
              >
                All Regions
              </div>
              {regions.map((region) => (
                <div
                  key={region}
                  className="p-2 hover:bg-slate-200 cursor-pointer"
                  onClick={() => {
                    setSelectedRegion(region);
                    setShowRegionDropdown(false);
                  }}
                >
                  {region}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-[60px] flex flex-wrap justify-center gap-x-10 gap-y-10">
        {filteredCountries.map((country) => (
          <div
            key={country.alpha3Code}
            onClick={() => handleClick(country.alpha3Code)}
            className="h-fit w-[350px] pb-4 bg-slate-100 rounded-b-md"
          >
            <img
              className="h-[200px] w-[350px] cursor-pointer"
              src={country.flags.png}
              alt={`${country.name} flag`}
            />
            <div className="mt-4 text-center text-[26px] font-bold">
              {country.name}
            </div>
            <div className="pl-3 mt-3 text-xl">
              <span className="font-bold text-xl">Population: </span>
              {country.population}
            </div>
            <div className="pl-3 text-xl">
              <span className="font-bold">Region: </span>
              {country.region}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
