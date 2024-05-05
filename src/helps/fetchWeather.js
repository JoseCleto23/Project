const fetchWeather = async (url,setIsLoading) => {

    let data = null, error = null;

    try {
        const res = await fetch(url);

        if (res.status === 404) {
            throw ("CIUDAD NO ENCONTRADA");
        }
        data = await res.json();
        setIsLoading(false);
    
    } catch (err) {
        error = err;
        //console.log(error);
        setIsLoading(false);
    }
    return {
        data,
        error
    }
}

export default fetchWeather
