import { createContext } from 'react';

const WeatherContext = createContext('');
const FavouriteContext = createContext('');
const LocationContext = createContext('');

export { FavouriteContext, WeatherContext, LocationContext };
