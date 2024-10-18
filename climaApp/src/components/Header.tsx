import React, { useEffect, useState, ChangeEvent } from "react";

const Header = () => {
  const [country, setCountry] = useState<any>({}); 
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
   

  const busqueda =()=>{
    const direction= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c883f448bdedec5534aaeb629aa9ba90`
     
     fetch(`${direction}`)
    .then(response => response.json())
    .then(data=>setCountry(data))
    .catch(error=>console.log(error))
    console.log(country)
  }

  return (
    <header className="flex gap-4 bg-slate-600 p-2">

      <select name="country" id="countryId" onChange={handleCountryChange}>
        <option value="ar">Argentina</option>
        <option value="es">España</option>
        <option value="us">Estados Unidos</option>
      </select>


      <input type="text" onChange={handleCityChange} />
      <button onClick={busqueda}> buscar</button>
      <p>  - {city} </p>
    </header>
  );
};

export default Header;

