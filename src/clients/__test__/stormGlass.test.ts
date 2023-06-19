import { StormGlass } from '@src/clients/stormGlass';

describe('StormGlass client', () => {
  it('should return the normalized forecast from the StormGlass service', async () => {
    const lat = -33.792726;
    const lng = 151.289824;

    const stormTGlass = new StormGlass();
    const response = await stormTGlass.fetchPoints(lat, lng);
    expect(response).toEqual({});
  });
});