import React, { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const [countriesDetails, setCountriesDetails] = useState([]);
  const { code } = useParams();
  console.log(code);
  const navigate = useNavigate();

  const getCountriesDetails = async () => {
    const data = await fetch(
      `https://restcountries.com/v2/alpha/${code}`
    );
    const jsonData = await data.json();
    setCountriesDetails(jsonData);
    console.log(jsonData);
  };



  useEffect(() => {
    getCountriesDetails();
  }, [code]);


console.log(countriesDetails)
  return (
    <div className="">
      <div className="flex p-10">
        <img className=" w-[500px] mr-[150px] " src={countriesDetails.flag} />
        <div className="text-3xl font-bold">
          {countriesDetails.name}

          <div className="font-bold text-xl flex flex-wrap justify-between mt-10 gap-x-[80px] gap-y-1 mr-10 text-[16px]">
            <div>
              Native name:{" "}
              <span className="font-normal">{countriesDetails.nativeName}</span>
            </div>
            <div>
              Population:{" "}
              <span className="font-normal">{countriesDetails.population}</span>
            </div>
            <div>
              Region:{" "}
              <span className="font-normal">{countriesDetails.region}</span>
            </div>
            <div>
              Sub-Region:{" "}
              <span className="font-normal">{countriesDetails.subregion}</span>
            </div>
            <div>
              Capital:{" "}
              <span className="font-normal">{countriesDetails.capital}</span>
            </div>
            <div>
              Languages:{" "}
              <span className="font-normal">{countriesDetails.name}</span>
            </div>
            {/* <div>
              Currencies:{" "}
              <span className="font-normal">{countriesDetails?.currencies[0]?.name}</span>
            </div> */}
            <div>
              Top Level Domain:{" "}
              <span className="font-normal">
                {countriesDetails.topLevelDomain}
              </span>
            </div>
            <div>
              Area: <span className="font-normal">{countriesDetails.area}</span>
            </div>
            <div>
              Calling Code:{" "}
              <span className="font-normal">
                {countriesDetails.callingCodes}
              </span>
            </div>
            {/* <div>Independent: <span className="font-normal">{countriesDetails.independent}</span></div> */}
            <div>
              Border Countries:
              {countriesDetails?.borders?.map((value) => (
               
                <span
                  onClick={() => {
                    navigate("/details/" + value);
                  }}
                  className="font-normal border cursor-pointer rounded-md shadow-md p-2 m-2"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
