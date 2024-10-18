import React, { useEffect, useState, ChangeEvent } from "react";

const Header = () => {
  const [country, setCountry] = useState<string>(''); 
  const [city,setCity]= useState <string>('')

  const setCountryChange = (value: string) => { 
    setCountry(value);
  };

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => { 
    setCountryChange(e.target.value);
  };

  const handleCityChange =(e:ChangeEvent<HTMLInputElement>)=>{
    setCity(e.target.value)

  }

  return (
    <header className="flex gap-4 bg-slate-600 p-2">

      <select name="country" id="countryId" onChange={handleCountryChange}>
        <option value="ar">Argentina</option>
        <option value="es">España</option>
        <option value="us">Estados Unidos</option>
      </select>


      <input type="text" onChange={handleCityChange} />

      <p> {country} - {city} </p>
    </header>
  );
};

export default Header;

