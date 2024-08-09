import React, { useContext, useState } from 'react';
import heart from '../../assets/heart.svg';
import { FavouriteContext } from '../../context';

const AddToFavourite = () => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);
  const [isFavourite, toggleFavourite] = useState(false);
  const handleFavourite = () => {
    toggleFavourite(!isFavourite);
  };

  return (
    <div className='md:col-span-2'>
      <div className='flex items-center justify-end space-x-6'>
        <button
          onClick={handleFavourite}
          className='text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]'
        >
          <span>Add to Favourite</span>
          <img src={heart} alt='' />
        </button>
      </div>
    </div>
  );
};

export default AddToFavourite;
