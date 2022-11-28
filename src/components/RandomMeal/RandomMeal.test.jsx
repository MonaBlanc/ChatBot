import RandomList from './RandomMeal.test.jsx';
import axios from 'axios';

jest.mock('axios');

describe("RandomMeal", () => {
  describe("when API call is successful", () => {
    it("should return meal details", () => Promise.resolve({ status: 200 }));
    });
  });


test('should fetch ingredients', () => {
  const meal = [{ingredients: ''}];
  const resp = {data: meal};
  axios.get.mockResolvedValue(resp);


  return RandomList.getIngredients().then(data => expect(data).toEqual(meal));
});