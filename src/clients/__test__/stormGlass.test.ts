import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWeather3HoursFicture from '@test/fixtures/stormglass_weather_3_hours.json';
import stormGlassNormalizedWeather3HoursFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';

jest.mock('axios');

describe('StormGlass client', () => {
  it('should return the normalized forecast from the StormGlass service', async () => {
    const lat = -33.792726;
    const lng = 151.289824;

    axios.get = jest
      .fn()
      .mockReturnValue({ data: stormGlassWeather3HoursFicture });

    const stormTGlass = new StormGlass(axios);
    const response = await stormTGlass.fetchPoints(lat, lng);
    expect(response).toEqual(stormGlassNormalizedWeather3HoursFixture);
  });
});
