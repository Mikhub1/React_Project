import React, { FormEvent, useEffect, useRef, useState } from "react";
import "./App.css";
import Generate_Url from "./Url";

// Modify the code to return to a default city details that can be overwritten 
// when a new city input is given
//



// Define the structure of the weather data
interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    main: string;
  }[];
}

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const [city, setCity] = useState("Ibadan");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");
  //const [apiUrl, setApiUrl] = useState("");

  const fetchWeatherData = (city: string) => {
    // Call Generate_Url function to get the complete URL
    const apiUrl = Generate_Url() + city;
    console.log(apiUrl);
  
  // Make a GET request using the Fetch API
  fetch(apiUrl)
      .then((response) => {
    //if (!response.ok) {
      // Throw an error if response is not ok
      //we handle the response by checking if it's okay using the response.ok property. If the response is okay,
      //we convert it to JSON and process the user data.
      //throw new Error("Network response was not ok");
      //}
      return response.json();
      })
      .then((cityData) => {
        // checking validity of response
        if (!cityData.main || !cityData.weather) {
          throw new Error("Invalid response received");
        }
        // Set weather data to state
        setWeatherData({
          main: cityData.main,
          weather: cityData.weather,
        });
        setError(""); // Reset error state
      })
      .catch((error) => {
        setError("Error fetching weather data: " + error.message);
        console.error("Error fetching weather data:", error);
      });

    }
      
      useEffect(() => {
        // Fetch weather data for the default city when the component mounts
        fetchWeatherData("Ibadan");
      }, []);

      const handleSubmit =  (event: FormEvent) => {
        event.preventDefault();
        if (nameRef.current !== null) {
          const newCity = nameRef.current.value;
          setCity(newCity);
          fetchWeatherData(newCity);
        }
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">
          City:
        </label>
        <input ref={nameRef} id="city" className="form-control" placeholder={"Ibadan"}/>
        <button type="submit">Weather Info</button>
      </div>
      <div id="box">
        {weatherData && 
        (
          <>
            <h2>Weather Details for {city}</h2>
            <p>Temperature: {weatherData.main.temp} K</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Weather: {weatherData.weather[0].main}</p>
          </>
        )}
        {error && <p>{error}</p>}
      </div>
    </form>
  );
};

export default Form;
