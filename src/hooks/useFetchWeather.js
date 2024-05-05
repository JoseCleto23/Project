import fetchWeather from "../helps/fetchWeather";

export const useFetchWeather = async (url, setDataCity, setShowError, setIsLoading) => {

  const getData = async () => {
    
    const { data, error } = await fetchWeather(url, setIsLoading);

    if (data) {
      setDataCity(data);
    } else {
      setShowError(error)
    }

  }

  getData();
 
}
