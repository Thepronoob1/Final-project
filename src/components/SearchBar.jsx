import { useEffect, useState } from 'react';
import searchImg from '../../public/search.png';

function SearchBar({ onSearch }) {
  const [location, setLocation] = useState('agadir');

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // passing the location to the parent component
    onSearch(location);
  };

  useEffect(() => {
    onSearch(location)
    setLocation('')

  }, [])

  return (
    <header className="weather__header">
      <form 
        onSubmit={handleSubmit}
        className='weather__search'
      >
        <input
          type="text"
          value={location}
          onChange={handleChange}
          placeholder="Enter location"
        />
        <img style={{ display: 'none'}} src={searchImg} alt="search img" height='16px' width='16px' />
        <button type='submit'>Search</button>
      </form>
    </header>
  );
}

export default SearchBar;
