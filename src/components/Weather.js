import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({ response }) => {
  const { name, main, weather, visibility, wind } = response;
  if (!name) return null;
  const KELVIN_VALUE = 273.15;
  const ICON_URL = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;

  return (
    <div className="col s12 transparent">
      <div className="card-panel black-text col s12 grey">
        <h2>{name}</h2>
        <div className="row">
          <div className="col s3">
            <img className="responsive-img" src={ICON_URL} alt="icon" />
          </div>
          <div className="col s6">
            <p className="temperature">
              {parseFloat(main.temp - KELVIN_VALUE, 10).toFixed(1)} °C <br></br>
              <span>{weather[0].main}</span>
            </p>
          </div>
          <div className="col s3">
            <img className="responsive-img" src={ICON_URL} alt="icon" />
          </div>
        </div>
        <div className="row">
          <div className="col s4 center-align">
            <span>High</span>
          </div>
          <div className="col s4 center-align">
            <span>Low</span>
          </div>
          <div className="col s4 center-align">
            <span>Feels Like</span>
          </div>
          <div className="col s4 center-align">
            <span>
              {parseFloat(main.temp_max - KELVIN_VALUE, 10).toFixed(1)} °C
            </span>
          </div>
          <div className="col s4 center-align">
            <span>
              {parseFloat(main.temp_min - KELVIN_VALUE, 10).toFixed(1)} °C
            </span>
          </div>
          <div className="col s4 center-align">
            {parseFloat(main.feels_like - KELVIN_VALUE, 10).toFixed(1)}
            °C
          </div>
        </div>
        <div className="row">
          <div className="col s4 center-align">
            <span>Visibility</span>
          </div>
          <div className="col s4 center-align">
            <span>Pressure</span>
          </div>
          <div className="col s4 center-align">
            <span>Wind</span>
          </div>
          <div className="col s4 center-align">
            <span>{visibility} m</span>
          </div>
          <div className="col s4 center-align">
            <span>{main.pressure} hPa</span>
          </div>
          <div className="col s4 center-align">
            <span>{wind.speed} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Weather.propTypes = {
  response: PropTypes.object.isRequired,
};

export default Weather;
