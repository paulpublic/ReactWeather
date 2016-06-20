var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h2> The temperature in {location} is {temp} </h2>
  );
}

module.exports = WeatherMessage;
