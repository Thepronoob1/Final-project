import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './store/getWeatherSlice';
import SearchBar from './components/SearchBar';
import WeatherDetails from './components/WeatherDetails';

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.weatherData);
  const weatherStatus = useSelector((state) => state.weather.status);
  const weatherError = useSelector((state) => state.weather.error);

  const handleSearch = (location) => {
    dispatch(fetchWeather(location));
  };

  return (
    <div className='container'>
      <SearchBar onSearch={handleSearch} />
      {weatherStatus === 'loading' && <p>Loading...</p>}
      {weatherError && <p>{weatherError}</p>}
      <WeatherDetails weatherData={weatherData} />
    </div>
  );
}

export default App;
