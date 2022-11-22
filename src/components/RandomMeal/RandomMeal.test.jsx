/*import axios from 'axios';
import RandomMeal from './RandomMeal';

jest.mock('axios');

test('should fetch ingredients', () => {
  const ingredients = [{name: 'ingredient'}];
  const resp = {meal: ingredients};
  axios.get.mockResolvedValue(resp);

  return RandomMeal.all().then(meal => expect(meal).toEqual(ingredients));
});*/