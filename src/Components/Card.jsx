import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidDownArrow } from "react-icons/bi";

const Card = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  const getCountries = async () => {
    const data = await fetch("https://restcountries.com/v2/all");
    const jsonData = await data.json();
    setCountries(jsonData);
    console.log(jsonData);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const handleClick = (code) => {
    navigate(`details/${code}`);
  };

 
  return (
    <div className=" bg-slate-400 p-10">
      <div className="flex justify-between">
        <div className="font-bold text-5xl ">Countries</div>
        <div className="flex items-center bg-slate-100 rounded-md h-fit p-2  ">
          <div className="mr-3 text-xl text-slate-950">
            Filter By Region
          </div>
          <div className="cursor-pointer">
          <BiSolidDownArrow onClick={countries.map((data)=>{data.name})}
           /></div>
        </div>
      </div>
      <div className="mt-[60px]  flex flex-wrap  justify-center gap-x-10 gap-y-10 ">
        {countries.map((country) => (
          <div
            onClick={() => {
              handleClick(country.alpha3Code);
            }}
            className=" h-fit w-[350px] pb-4 bg-slate-100 rounded-b-md"
          >
            <img
              className="h-[200px] w-[350px] cursor-pointer "
              src={country.flags.png}
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
