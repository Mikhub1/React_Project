import React, { FormEvent, useRef, useState } from "react";
import "./App.css";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const [city, setCity] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) {
      setCity(nameRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="city" className="form-label"></label>
        <input ref={nameRef} id="city" className="form-control" />

        <button color="danger" type="submit">Weather Info</button>
        <div id="box">{city}</div>
      </div>
    </form>
  );
};

export default Form;