import { useCallback, useContext, useEffect, useState } from 'react';
import { LocationContext } from '../context';

// const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;

// const apiKey = "9c210f744e53064e3a11b466319b0164";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: '',
    climate: '',
    temperature: '',
    maxTemperature: '',
    minTemperature: '',
    humidity: '',
    cloudPercentage: '',
    wind: '',
    time: '',
    longitude: '',
    latitude: '',
  });

  const [loading, setLoading] = useState({
    state: false,
    message: '',
  });

  const [error, setError] = useState(null);

  const { selectedLocation } = useContext(LocationContext);

  const fetchWeatherData = useCallback(async (latitude, longitude) => {
    try {
      setLoading({
        state: true,
        message: 'Fetching weather data...',
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      const updateWeatherData = {
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      };

      setWeatherData(updateWeatherData);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading({
        state: false,
        message: '',
      });
    }
  }, []);

  // Fetch weather data when component mounts and when location changes
  useEffect(() => {
    setLoading({ ...loading, state: true, message: 'Finding Location...' });

    if (selectedLocation.latitude && selectedLocation.longitude) {
      fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude);
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
      });
    }
  }, [selectedLocation.latitude, selectedLocation.longitude]);

  return { weatherData, loading, error };
};

export default useWeather;
