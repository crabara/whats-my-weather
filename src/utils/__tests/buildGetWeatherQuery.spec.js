import buildGetWeatherQuery from '../buildGetWeatherQuery';

const mockCoordsObj = {
  coords: {
    longitude: 42,
    latitude: 42,
  },
};

const mockZipString = '42';

describe('src::utils::buildGetWeatherQuery', () => {
  test('Takes object with coordinates and adds them to the base query', () => {
    const query = buildGetWeatherQuery(mockCoordsObj);
    expect(query.lon).toEqual(42);
    expect(query.lat).toEqual(42);
    expect(query.units).toEqual('imperial');
  });

  test('Takes a zipcode as a string and adds it to the base query', () => {
    const query = buildGetWeatherQuery(mockZipString);
    expect(query.zip).toEqual('42');
    expect(query.units).toEqual('imperial');
    expect(query.lon).toBeUndefined();
  });
});
