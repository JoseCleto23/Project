import { useState } from 'react';
import './App.css'
import FormUI from './components/FormUI';
import ShowWeather from './components/ShowWeather';
import { useFetchWeather } from './hooks/useFetchWeather.js';


function App() {

  const [city, setCity] = useState();
  const [dataCity, setDataCity] = useState(null);
  const [showError, setShowError] = useState(null);
  const [isLoading,setIsLoading] = useState(null);
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}`;
  
  const handleChange = evnt => {
    setCity(evnt.target.value);
    
  }
  const handleSubmit = evnt => {
    
    evnt.preventDefault();
    
    if (city.trim() === '') {
      return
    }
    
    setIsLoading(true);
    if (city.length > 0) useFetchWeather(url,setDataCity,setShowError,setIsLoading);
    
     setCity('')
    
  }


  return (
    <div className='container'>
      <FormUI city={city} handleChange={handleChange} handleSubmit={handleSubmit} />
        
      <ShowWeather dataCity={dataCity} showError={showError} isLoading={isLoading} />
      
    </div>
  )
}

export default App
