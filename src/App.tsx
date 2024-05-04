import Weather from './Weather';
import "./App.css"
import sun from './images/sun.jpg'
import Form from './Form';
import React from "react"


function App(){

  return (
    <div>
    <div><Weather></Weather></div>
    <img src = {sun} alt= ''/>
    <p></p>
    <p></p>
    <Form ></Form>
    <p></p>
</div>

)
}
export default App


