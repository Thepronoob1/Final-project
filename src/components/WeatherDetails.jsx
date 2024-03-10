
function WeatherDetails({ weatherData }) {
  // Check if weatherData is available and has localtime
  if (weatherData && weatherData.location && weatherData.location.localtime) {
    // Create a Date object from the localtime string
    const dateTime = new Date(weatherData.location.localtime);

    // Format the date
    const optionsDate = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const formattedDate = dateTime.toLocaleDateString(undefined, optionsDate);

    // Format the time
    const optionsTime = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    const formattedTime = dateTime.toLocaleTimeString(undefined, optionsTime);

    // Combine date and time
    const formattedDateTime = `${formattedDate} at ${formattedTime}`;

    const { current } = weatherData;

    
    return (
      <div className="weather__body">
        <div>
          <h2 className='weather__header'>
            {weatherData.location.name}, {weatherData.location.country.split(' ').slice(0, 2).join(' ')}
          </h2>
          <div className='weather__datetime'>{formattedDateTime}</div>
          <p className='weather__temperature'>{current.temp_c}°C</p>
          <img className='weather__icon' src={current.condition.icon} alt="Weather icon"/>
          <p className='weather__condition'>{current.condition.text}</p>
          <p className='weather__humidity'>Humidity: {current.humidity}%</p>
          <p className='weather__wind'>Wind: {current.wind_kph} km/h {current.wind_dir}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="weather__body">
        <p>No weather data to display</p>
      </div>
    );
  }
}

export default WeatherDetails;
