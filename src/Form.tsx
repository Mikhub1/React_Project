import React, { FormEvent, useRef, useState } from "react";
import "./App.css";
import Generate_Url from "./Url";


const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const [city, setCity] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) {
      setCity(nameRef.current.value);
    }
   // Specify the API endpoint for user data
    const apiUrl = Generate_Url + city;

    // Make a GET request using the Fetch API
    fetch(apiUrl)
      
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(userData => {
        // Process the retrieved user data
        setCity(userData)
        console.log('User Data:', userData);
      })

 };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="city" className="form-label"></label>
        <input ref={nameRef} id="city" className="form-control"></input>

        <button color="danger" type="submit">Weather Info</button>
        <div id="box">{city}</div>
      </div>
    </form>
  );
};

export default Form;