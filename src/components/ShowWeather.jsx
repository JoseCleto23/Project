import React from 'react';
import { ClipLoader } from 'react-spinners';

const ShowWeather = ({ dataCity, showError, isLoading }) => {
  return (

    <>

      {

         isLoading ? <ClipLoader color="rgb(7, 236, 206)" />
          : showError ?  <p className='error'>{showError}</p>
            : dataCity && <div className='results'>

              <div className='date-firt'>

                <h2>{dataCity.name}</h2>
                <p>
                  {new Date(Date.now()).toDateString()}
                </p>
              </div>
              <div className='date-second'>

                <img src={`https://openweathermap.org/img/wn/${dataCity.weather[0].icon}@2x.png`} alt="icon weather" />
                <p className='temp'>{parseInt(dataCity.main.temp - 273.15)} °C</p>
                <p className='description'>{dataCity.weather[0].description}</p>

              </div>

            </div>
      }
      
    </>

  )
}

export default ShowWeather
