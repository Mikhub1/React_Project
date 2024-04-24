import Weather from './Weather';
import "./App.css"
import sun from './images/sun.jpg'
import Button from "./Button"


function App(){
  return (
    <div>
    <div><Weather></Weather></div>
    <img src = {sun} alt= ''/>
    <p></p>
    <p></p>
    <input id="city" name="city" type="text"></input>
    <Button color="danger" onClick={() => setalertVisibility(true)}>Weather Info</Button>
    <p></p>
    <div id = "box"> The details for the city is stated below</div>
</div>

)
}
export default App
