import { useContext, useEffect, useState } from 'react';
import heart from '../../assets/heart.svg';
import ReadHeartIcon from '../../assets/heart-red.svg';
import { FavouriteContext, WeatherContext } from '../../context';

const AddToFavourite = () => {
  const [isFavourite, toggleFavourite] = useState(false);
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);

  const { weatherData } = useContext(WeatherContext);

  const { latitude, longitude, location } = weatherData;

  const handleFavourite = () => {
    const found = favourites.find((fav) => fav.location === location);
    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
    toggleFavourite(!isFavourite);
  };

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    toggleFavourite(found);
  }, [favourites]);

  return (
    <div className='md:col-span-2'>
      <div className='flex items-center justify-end space-x-6'>
        <button
          onClick={handleFavourite}
          className='text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]'
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? ReadHeartIcon : heart} alt='' />
        </button>
      </div>
    </div>
  );
};

export default AddToFavourite;
