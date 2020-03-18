const checkType = location => (typeof location) === 'string';

const baseQuery = {
  units: 'imperial',
  appid: 'f4b9e7823f40bd6bca40fb473c770b68',
};

const buildGetWeatherQuery = (location) => ({
  ...baseQuery,
  ...(checkType(location)
    ? { zip: location }
    : { lon: location.coords.longitude, lat: location.coords.latitude }),
});

export default buildGetWeatherQuery;
