import { render } from '@testing-library/react';
import Preview from './Preview';

test('testing head, middle, and bottom', () => {
  const container = render(<Preview head="bird" middle="blue" bottom="leg" />);
  expect(container).toMatchSnapshot();
});
