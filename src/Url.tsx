  import "./Form";
  
  /**
  */
interface Props{
    city: string
} 

function Generate_Url(city: Props){
    
    const base_id = "http://api.openweathermap.org/data/2.5/weather?"
    const api_key = "a1d832c101f04481e98ece5a0a6cb290"

    const Complete_Url = base_id + "appid="+api_key+"&q=" + city

    return (Complete_Url)

}

export default Generate_Url













