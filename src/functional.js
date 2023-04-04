import React, { useState, useEffect } from "react";

function Accordion() {
  const [countries, setCountries] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/capital")
      .then((res) => res.json())
      .then((data) => setCountries(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="coutry">
      {countries.map((country, index) => (
        <div key={index}>
          <button onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
            {country.name}
          </button>
          {index === activeIndex && (
            <div>
              <p> Capital : {country.capital}</p>
              <p> iso2 : {country.iso2}</p>
              <p> iso3 : {country.iso3}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
