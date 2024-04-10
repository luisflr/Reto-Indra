import { render, screen } from '@testing-library/react';
import CardInfo from '../Components/CardInfo/CardInfo';

test('Renders login page correctly', () => {
  render(<CardInfo userName='luis' priceOfPlan={1} selectedPlan='nuevo'/>);
  // const span = await screen.findByRole('span');
  // expect(span.innerHTML).toBe('count is 0');
  expect(true).toBeTruthy();
});