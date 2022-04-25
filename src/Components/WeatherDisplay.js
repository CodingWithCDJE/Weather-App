import '../Css/WeatherDisplay.css';
import moment from 'moment';

const WeatherDisplay = ({ results }) => {
  const todayDate = new Date().toLocaleString('en-US');

  return results.length !== 0 ? (
    <div className='weatherdisplay-main-container'>
      <div className='weatherdisplay-today-weather'>
        <h1 className='weatherdisplay-header'>Today's Weather</h1>
        <p className='weatherdisplay-todaydate'>{todayDate.toString()}</p>
        <p className='weatherdisplay-location'>{results.location.name}</p>
        <p className='weatherdisplay-temperature'>
          {Math.ceil(results.current.temp_f)}°F
        </p>

        <div className='weatherdisplay-highandlow'>
          <span className='weatherdisplay-high'>
            High: {Math.ceil(results.forecast.forecastday[0].day.maxtemp_f)}°F
          </span>

          <span className='weatherdisplay-low'>
            Low: {Math.floor(results.forecast.forecastday[0].day.mintemp_f)}°F
          </span>
        </div>

        <img
          className='weathercondition-img'
          src={results.current.condition.icon}
          alt={results.current.condition.text}
          title={results.current.condition.text}
        />

        <div className='weatherdisplay-bottom-container'>
          <div>
            <p>{Math.ceil(results.current.feelslike_f)}°F</p>
            <p>Feels Like</p>
          </div>
          <div>
            <p>{results.current.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div>
            <p>{results.current.wind_mph} MPH </p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>

      <div className='weatherdisplay-forecast'>
        <h1 className='weatherdisplay-header'>Forecast</h1>
        <div className='weatherdisplay-today-forecast'>
          <span>Today</span>

          <span>
            <img
              src={results.forecast.forecastday[0].day.condition.icon}
              alt={results.forecast.forecastday[0].day.condition.text}
            />
          </span>

          <span>
            L: {Math.floor(results.forecast.forecastday[0].day.mintemp_f)}°F
          </span>

          <span>
            H: {Math.ceil(results.forecast.forecastday[0].day.maxtemp_f)}°F
          </span>
        </div>

        <div className='weatherdisplay-tomorrow-forecast'>
          <span>
            {moment(results.forecast.forecastday[1].date).format('dddd')}
          </span>

          <span>
            <img
              src={results.forecast.forecastday[1].day.condition.icon}
              alt={results.forecast.forecastday[1].day.condition.text}
            />
          </span>

          <span>
            L: {Math.floor(results.forecast.forecastday[1].day.mintemp_f)}°F
          </span>

          <span>
            H: {Math.ceil(results.forecast.forecastday[1].day.maxtemp_f)}°F
          </span>
        </div>

        <div className='weatherdisplay-dayAfterTomorrow-forecast'>
          <span>
            {moment(results.forecast.forecastday[2].date).format('dddd')}
          </span>

          <span>
            <img
              src={results.forecast.forecastday[2].day.condition.icon}
              alt={results.forecast.forecastday[2].day.condition.text}
            />
          </span>

          <span>
            L: {Math.floor(results.forecast.forecastday[2].day.mintemp_f)}°F
          </span>

          <span>
            H: {Math.ceil(results.forecast.forecastday[2].day.maxtemp_f)}°F
          </span>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default WeatherDisplay;
